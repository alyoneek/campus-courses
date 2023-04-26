import { ICourseInGroupResponse } from "@/api/groups/types";
import { Badge, Collapse } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

interface CourseCardProps {
  courseInfo: ICourseInGroupResponse;
}

enum Semesters {
  Autumn = "Осенний",
  Spring = "Весенний",
}

enum Statuses {
  Created = "Создан",
  OpenForAssigning = "Открыт для записи",
  Started = "В процессе обучения",
  Finished = "Закрыт",
}

const ribbonColors = {
  Created: "grey",
  OpenForAssigning: "green",
  Started: "blue",
  Finished: "red",
};

const CourseCard: FC<CourseCardProps> = ({ courseInfo }) => {
  return (
    <Badge.Ribbon
      text={Statuses[courseInfo.status]}
      color={ribbonColors[courseInfo.status]}
    >
      <Collapse
        defaultActiveKey={["0"]}
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
