import { List, Tag } from "antd";
import { FC } from "react";

import { ITeacher } from "@/api/courses/types";

interface TeacherItemProps {
  teacherInfo: ITeacher;
}

const TeacherItem: FC<TeacherItemProps> = ({ teacherInfo }) => {
  return (
    <List.Item>
      <div>
        <div className="flex">
          <h3>{teacherInfo.name}</h3>
          {teacherInfo.isMain && (
            <Tag color="gold" className="ml-2">
              основной
            </Tag>
          )}
        </div>
        <p>{teacherInfo.email}</p>
      </div>
    </List.Item>
  );
};

export default TeacherItem;
