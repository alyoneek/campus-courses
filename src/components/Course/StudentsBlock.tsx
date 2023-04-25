import { List } from "antd";

import StudentItem from "@/components/Course/StudentItem";

const students = [
  {
    name: "Тестовый Студент Отличникович",
    email: "cool@gmail.com",
    status: "Declined",
    midtermResult: "Passed",
    finalResult: "Passed",
  },
  {
    name: "Студент1",
    email: "cool@gmail.com",
    status: "Declined",
    midtermResult: "NotDefined",
    finalResult: "NotDefined",
  },
  {
    name: "Кирилл ТАкойто ТАкойто",
    email: "cool@gmail.com",
    status: "InQueue",
    midtermResult: "NotDefined",
    finalResult: "NotDefined",
  },
];

const StudentsBlock = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={students}
      renderItem={(item) => <StudentItem data={item} />}
    />
  );
};

export default StudentsBlock;
