import { Tabs } from "antd";

import StudentsBlock from "./StudentsBlock";
import TeachersBlock from "./TeachersBlock";

const PeopleInfo = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      type="card"
      items={[
        {
          label: "Преподаватели",
          key: "1",
          children: <TeachersBlock />,
        },
        {
          label: "Студенты",
          key: "2",
          children: <StudentsBlock />,
        },
      ]}
    />
  );
};

export default PeopleInfo;
