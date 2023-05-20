import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import { ButtonProps } from "./types";

const DeleteButton: FC<ButtonProps> = ({ onClick, className = "" }) => {
  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      onClick={onClick}
      className={className}
    />
  );
};

export default DeleteButton;
