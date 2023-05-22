import { Divider } from "antd";

import List from "@/components/List";
import { getCourseTeachers } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import TeacherItem from "./TeacherItem";

const TeachersList = () => {
  const teachers = useAppSelector(getCourseTeachers);
  const sortedTeachers = [...teachers].sort((x) => (x.isMain ? -1 : 0));

  return (
    <List
      data={sortedTeachers}
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
