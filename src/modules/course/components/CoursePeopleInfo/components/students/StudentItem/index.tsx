import { FC } from "react";

import useRoles from "@/hooks/useRoles";
import { IStudent } from "@/modules/course/api/types";
import AccepteStudentButton from "@/modules/course/components/CoursePeopleInfo/components/students/AccepteStudentButton";
import Certification from "@/modules/course/components/CoursePeopleInfo/components/students/Certification/Certification";
import RejectStudentButton from "@/modules/course/components/CoursePeopleInfo/components/students/RejectStudentButton";
import { StudentStatuses } from "@/modules/course/helpers/constants";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";

import styles from "./studentItem.module.scss";

interface StudentItemProps {
  studentInfo: IStudent;
}

const StudentItem: FC<StudentItemProps> = ({ studentInfo }) => {
  const { isUserCourseEditor, isUserCanSeeMark } = useRoles();
  const idCourse = useAppSelector(getCourseId);

  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h3>{studentInfo.name}</h3>
        <p>
          Статус -{" "}
          <span className={styles[studentInfo.status]}>
            {StudentStatuses[studentInfo.status]}
          </span>
        </p>
        <p>{studentInfo.email}</p>
      </div>

      {isUserCourseEditor(idCourse) && (
        <>
          {studentInfo.status == "InQueue" && (
            <div className="flex gap-3">
              <AccepteStudentButton idStudent={studentInfo.id} />
              <RejectStudentButton idStudent={studentInfo.id} />
            </div>
          )}
        </>
      )}

      {isUserCanSeeMark(studentInfo.email, idCourse) && (
        <>
          {studentInfo.status == "Accepted" && (
            <Certification
              studentInfo={studentInfo}
              editable={isUserCourseEditor(idCourse)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default StudentItem;
