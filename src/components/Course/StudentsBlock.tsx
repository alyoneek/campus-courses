import { List } from "antd";

import StudentItem from "@/components/Course/StudentItem";
import { useAppSelector } from "@/store";

const StudentsBlock = () => {
  const students = useAppSelector((state) => state.courses.allStudents);

  return (
    <List
      itemLayout="horizontal"
      dataSource={students}
      renderItem={(item) => <StudentItem studentInfo={item} />}
    />
  );
};

export default StudentsBlock;
