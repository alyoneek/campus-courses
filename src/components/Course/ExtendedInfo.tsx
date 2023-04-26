import { Badge, Tabs } from "antd";
import DOMPurify from "dompurify";

import NotificationsBlock from "@/components/Course/NotificationsBlock";
import { useAppSelector } from "@/store";

const createMarkup = (html: string | undefined) => {
  return {
    __html: DOMPurify.sanitize(html ? html : ""),
  };
};

const ExtendedInfo = () => {
  const courseDescription = useAppSelector(
    (state) => state.courses.courseDescription
  );
  const notifications = useAppSelector(
    (state) => state.courses.allNotifications
  );

  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      className="mb-10"
      items={[
        {
          label: "Требования к курсу",
          key: "1",
          children: (
            <div
              dangerouslySetInnerHTML={createMarkup(
                courseDescription?.requirements
              )}
            ></div>
          ),
        },
        {
          label: "Аннотация",
          key: "2",
          children: (
            <div
              dangerouslySetInnerHTML={createMarkup(
                courseDescription?.annotations
              )}
            ></div>
          ),
        },
        {
          label: (
            <Badge
              count={notifications.length}
              overflowCount={3}
              offset={[15, 5]}
            >
              <div>Уведомления</div>
            </Badge>
          ),
          key: "3",
          children: <NotificationsBlock />,
        },
      ]}
    />
  );
};

export default ExtendedInfo;
