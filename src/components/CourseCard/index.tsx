import { Badge, Collapse } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

interface CourseCardProps {
  title: string;
}

const CourseCard: FC<CourseCardProps> = ({ title }) => {
  return (
    <Badge.Ribbon text="Открыт для записи" color="green">
      <Collapse
        defaultActiveKey={["0"]}
        size="large"
        //   bordered={false}
        className="bg-white mt-2"
      >
        <Panel header={title} key="1" showArrow={false}>
          <p className="mb-1">Учебный год - 2022-2023</p>
          <p className="mb-1">Семестр - Осенний</p>
          <p className="mb-1">Мест всего - 100</p>
          <p className="mb-1">Мест свободно - 95</p>
          <Link to="/courses/1">Подробнее</Link>
        </Panel>
      </Collapse>
    </Badge.Ribbon>
  );
};

export default CourseCard;
