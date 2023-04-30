import { Button, List } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { IStudent } from "@/api/courses/types";
import Certification from "@/components/Course/Certification";
import { StudentStatuses, studentStatusColors } from "@/helpers/constants";
import { useAppDispatch, useAppSelector } from "@/store";
import { changeStudentStatus } from "@/store/features/courses/courseActions";

interface StudentItemProps {
  studentInfo: IStudent;
}

const StudentItem: FC<StudentItemProps> = ({ studentInfo }) => {
  const { idCourse } = useParams();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.courses.status);

  const onAccept = () => {
    if (idCourse) {
      dispatch(
        changeStudentStatus({
          idCourse,
          idStudent: studentInfo.id,
          data: { status: "Accepted" },
        })
      );
    }
  };

  const onDecline = () => {
    if (idCourse) {
      dispatch(
        changeStudentStatus({
          idCourse,
          idStudent: studentInfo.id,
          data: { status: "Declined" },
        })
      );
    }
  };

  return (
    <List.Item>
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
            <Button
              type="primary"
              loading={status === "loading"}
              onClick={onAccept}
            >
              Принять
            </Button>
            <Button type="primary" danger onClick={onDecline}>
              Отклонить заявку
            </Button>
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
    </List.Item>
  );
};

export default StudentItem;
