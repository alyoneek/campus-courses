import { List } from "antd";

import { getCourseTeachers } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import TeacherItem from "./TeacherItem";

const TeachersList = () => {
  const teachers = useAppSelector(getCourseTeachers);

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
