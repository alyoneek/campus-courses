import { Divider } from "antd";

import List from "@/components/List";
import useAuth from "@/hooks/useAuth";
import { getCourseStudents } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import StudentItem from "./StudentItem";

const StudentsList = () => {
  const students = useAppSelector(getCourseStudents);
  const { email } = useAuth();
  const sortedStudents = [...students].sort((x) =>
    x.email === email ? -1 : 0
  );

  return (
    <List
      data={sortedStudents}
      emptyText="Нет студентов"
      renderItem={(student, i) => (
        <>
          <StudentItem key={student.id} studentInfo={student} />
          {i !== students.length - 1 && <Divider />}
        </>
      )}
    />
  );
};

export default StudentsList;
