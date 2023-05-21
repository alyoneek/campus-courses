import { Divider } from "antd";

import List from "@/components/List";
import { getCourseStudents } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import StudentItem from "./StudentItem";

const StudentsList = () => {
  const students = useAppSelector(getCourseStudents);

  return (
    <List
      data={students}
      renderItem={(student, i) => (
        <>
          <StudentItem studentInfo={student} />
          {i !== students.length - 1 && <Divider />}
        </>
      )}
    />
  );
};

export default StudentsList;
