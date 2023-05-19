import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import { ButtonProps } from "./types";

const DeleteButton: FC<ButtonProps> = ({ onClick }) => {
  return <Button danger icon={<DeleteOutlined />} onClick={onClick} />;
};

export default DeleteButton;
