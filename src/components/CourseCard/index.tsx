import { ICourseInGroupResponse } from "@/api/groups/types";
import { Badge, Collapse } from "antd";
import { FC } from "react";

const { Panel } = Collapse;

interface CourseCardProps {
  courseInfo: ICourseInGroupResponse;
}

const CourseCard: FC<CourseCardProps> = ({ courseInfo }) => {
  return (
    <Badge.Ribbon text="Открыт для записи" color="green">
      <Collapse
        defaultActiveKey={["0"]}
        size="large"
        //   bordered={false}
        className="bg-white mt-2"
      >
        <Panel header={courseInfo.name} key="1" showArrow={false}>
          <p className="mb-1">Учебный год - 2022-2023</p>
          <p className="mb-1">Семестр - Осенний</p>
          <p className="mb-1">Мест всего - 100</p>
          <p className="mb-1">Мест свободно - 95</p>
        </Panel>
      </Collapse>
    </Badge.Ribbon>
  );
};

export default CourseCard;
