import { useAppSelector } from "@/store";
import { List } from "antd";
import StudentItem from "./StudentItem";

const StudentsList = () => {
  // TODO
  const students = useAppSelector((state) => state.courses.allStudents);

  return (
    <List
      itemLayout="horizontal"
      dataSource={students}
      renderItem={(item) => (
        <List.Item>
          <StudentItem studentInfo={item} />
        </List.Item>
      )}
    />
  );
};

export default StudentsList;
