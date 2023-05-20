import { List } from "antd";

import { useAppSelector } from "@/store";
import TeacherItem from "./TeacherItem";

const TeachersList = () => {
  //TODO
  const teachers = useAppSelector((state) => state.courses.allTeachers);

  return (
    <List
      itemLayout="horizontal"
      dataSource={teachers}
      renderItem={(item) => (
        <List.Item>
          <TeacherItem teacherInfo={item} />
        </List.Item>
      )}
    />
  );
};

export default TeachersList;
