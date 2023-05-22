import { FC } from "react";

import { StudentStatuses, studentStatusColors } from "@/helpers/constants";
import useRoles from "@/hooks/useRoles";
import { IStudent } from "@/modules/course/api/types";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import AccepteStudentButton from "./AccepteStudentButton";
import Certification from "./Certification/Certification";
import RejectStudentButton from "./RejectStudentButton";

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
          <span
            className={`text-${studentStatusColors[studentInfo.status]}-600`}
          >
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
