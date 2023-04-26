import { Button, List } from "antd";
import { FC } from "react";

import { IStudent } from "@/api/courses/types";
import { StudentStatuses, studentStatusColors } from "@/helpers/constants";
import Certification from "./Certification";

interface StudentItemProps {
  studentInfo: IStudent;
}

const StudentItem: FC<StudentItemProps> = ({ studentInfo }) => {
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
            <Button type="primary">Принять</Button>
            <Button type="primary" danger>
              Отклонить заявку
            </Button>
          </div>
        )}

        {studentInfo.status == "Accepted" && (
          <Certification
            name={studentInfo.name}
            midtermResult={studentInfo.midtermResult}
            finalResult={studentInfo.finalResult}
          />
        )}
      </div>
    </List.Item>
  );
};

export default StudentItem;
