import { Button, List, Tabs } from "antd";

import StudentItem from "@/components/Course/StudentItem";
import TeacherItem from "@/components/Course/TeacherItem";

const teachers = [
  { name: "Препод1111111111111111", email: "cool@gmail.com", isMain: true },
  { name: "Препод2", email: "cool2@gmail.com", isMain: false },
  { name: "Препод3", email: "cool3@gmail.com", isMain: false },
];

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
          children: (
            <>
              <Button type="primary" className="my-3">
                Добавить преподавателя
              </Button>
              <List
                itemLayout="horizontal"
                dataSource={teachers}
                renderItem={(item) => <TeacherItem teacherData={item} />}
              />
            </>
          ),
        },
        {
          label: "Студенты",
          key: "2",
          children: (
            <>
              <List
                itemLayout="horizontal"
                dataSource={students}
                renderItem={(item) => <StudentItem studentData={item} />}
              />
            </>
          ),
        },
      ]}
    />
  );
};

export default PeopleInfo;
