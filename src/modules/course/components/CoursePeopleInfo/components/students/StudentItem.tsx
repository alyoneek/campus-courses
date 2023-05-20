import { FC } from "react";

import { StudentStatuses, studentStatusColors } from "@/helpers/constants";
import { IStudent } from "@/modules/course/api/types";
import AccepteStudentButton from "./AccepteStudentButton";
import Certification from "./Certification/Certification";
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
        <Certification studentInfo={studentInfo} />
      )}
    </div>
  );
};

export default StudentItem;
