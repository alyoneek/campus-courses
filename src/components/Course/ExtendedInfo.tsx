import { Badge, Tabs } from "antd";

import NotificationsBlock from "@/components/Course/NotificationsBlock";

const data = ["one", "two", "three"];

const ExtendedInfo = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      className="mb-10"
      items={[
        {
          label: "Требования к курсу",
          key: "1",
          children: "Content of Specifications",
        },
        {
          label: "Аннотация",
          key: "2",
          children: "Content of Reviews",
        },
        {
          label: (
            <Badge count={data.length} overflowCount={3} offset={[15, 5]}>
              <div>Уведомления</div>
            </Badge>
          ),
          key: "3",
          children: <NotificationsBlock data={data} />,
        },
      ]}
    />
  );
};

export default ExtendedInfo;
