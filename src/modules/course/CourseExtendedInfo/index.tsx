import { Badge, Tabs } from "antd";

import TextBlock from "@/components/TextBlock";
import { useAppSelector } from "@/store";
import {
  getCourseDescription,
  getCourseNotifications,
} from "@modules/course/store/courseSelectors";
import NotificationsBlock from "./components/NotificationsBlock";

const CourseExtendedInfo = () => {
  const courseDescription = useAppSelector(getCourseDescription);
  const notifications = useAppSelector(getCourseNotifications);

  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      className="mb-10"
      items={[
        {
          label: "Требования к курсу",
          key: "1",
          children: <TextBlock text={courseDescription.requirements} />,
        },
        {
          label: "Аннотация",
          key: "2",
          children: <TextBlock text={courseDescription.annotations} />,
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

export default CourseExtendedInfo;
