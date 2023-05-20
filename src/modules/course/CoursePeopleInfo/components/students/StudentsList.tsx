import { List } from "antd";

import { getCourseStudents } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import StudentItem from "./StudentItem";

const StudentsList = () => {
  const students = useAppSelector(getCourseStudents);
  console.log(1);

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
