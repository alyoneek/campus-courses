import { Badge, Collapse } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { ICourseInGroupResponse } from "@/api/groups/types";
import {
  CourseStatuses,
  Semesters,
  courseStatusColors,
} from "@/helpers/constants";

const { Panel } = Collapse;

interface CourseCardProps {
  courseInfo: ICourseInGroupResponse;
}

const CourseCard: FC<CourseCardProps> = ({ courseInfo }) => {
  return (
    <Badge.Ribbon
      text={CourseStatuses[courseInfo.status]}
      color={courseStatusColors[courseInfo.status]}
    >
      <Collapse
        size="large"
        //   bordered={false}
        className="bg-white mt-2"
      >
        <Panel header={courseInfo.name} key="1" showArrow={false}>
          <p className="mb-1">
            {`Учебный год - ${courseInfo.startYear} - ${
              courseInfo.startYear + 1
            }`}
          </p>
          <p className="mb-1">Семестр - {Semesters[courseInfo.semester]}</p>
          <p className="mb-1">Мест всего - {courseInfo.maximumStudentsCount}</p>
          <p className="mb-1">
            Мест свободно - {courseInfo.remainingSlotsCount}
          </p>
          <Link to={`/courses/${courseInfo.id}`}>Подробнее</Link>
        </Panel>
      </Collapse>
    </Badge.Ribbon>
  );
};

export default CourseCard;
