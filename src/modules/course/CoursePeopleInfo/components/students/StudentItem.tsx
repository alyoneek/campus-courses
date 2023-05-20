import { FC } from "react";

import { IStudent } from "@/api/courses/types";
import { StudentStatuses, studentStatusColors } from "@/helpers/constants";
import Certification from "@/modules/course/CoursePeopleInfo/components/students/Certification";
import AccepteStudentButton from "./AccepteStudentButton";
import RejectStudentButton from "./RejectStudentButton";

interface StudentItemProps {
  studentInfo: IStudent;
}

const StudentItem: FC<StudentItemProps> = ({ studentInfo }) => {
  return (
    <div className="w-full flex items-center justify-between text-base">
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

      {studentInfo.status == "InQueue" && (
        <div className="flex gap-3">
          <AccepteStudentButton idStudent={studentInfo.id} />
          <RejectStudentButton idStudent={studentInfo.id} />
        </div>
      )}

      {studentInfo.status == "Accepted" && (
        <Certification
          studentInfo={studentInfo}
          midtermResult={studentInfo.midtermResult}
          finalResult={studentInfo.finalResult}
        />
      )}
    </div>
  );
};

export default StudentItem;
