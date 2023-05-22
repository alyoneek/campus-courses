import { Divider, Empty } from "antd";

import List from "@/components/List";
import { getCourseStudents } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import StudentItem from "./StudentItem";

const StudentsList = () => {
  const students = useAppSelector(getCourseStudents);

  return students.length === 0 ? (
    <Empty description="Нет студентов" />
  ) : (
    <List
      data={students}
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
