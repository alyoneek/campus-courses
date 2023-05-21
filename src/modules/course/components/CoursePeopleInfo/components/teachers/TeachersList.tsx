import { Divider } from "antd";

import List from "@/components/List";
import { getCourseTeachers } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import TeacherItem from "./TeacherItem";

const TeachersList = () => {
  const teachers = useAppSelector(getCourseTeachers);

  return (
    <List
      data={teachers}
      renderItem={(teacher, i) => (
        <>
          <TeacherItem key={teacher.email} teacherInfo={teacher} />
          {i !== teachers.length - 1 && <Divider />}
        </>
      )}
    />
  );
};

export default TeachersList;
