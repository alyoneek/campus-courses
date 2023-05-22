import { StudentMarks, marksColors } from "@/helpers/constants";
import { MarkType } from "@/modules/course/api/types";
import { Button, Tag } from "antd";
import { FC } from "react";

interface ResultButtonProps {
  result: MarkType;
  name: string;
  editable?: boolean;
  onClick?: () => void;
}

const ResultButton: FC<ResultButtonProps> = ({
  result,
  name,
  editable = false,
  onClick,
}) => {
  return (
    <div className="flex gap-2 items-center">
      {editable ? (
        <Button className="text-base" type="link" onClick={onClick}>
          {name}
        </Button>
      ) : (
        <div className="text-base">{name}</div>
      )}
      —
      <Tag color={marksColors[result]} className="ml-2">
        {StudentMarks[result]}
      </Tag>
    </div>
  );
};

export default ResultButton;
