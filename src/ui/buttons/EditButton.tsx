import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import { ButtonProps } from "./types";

const EditButton: FC<ButtonProps> = ({ onClick }) => {
  return <Button icon={<EditOutlined />} onClick={onClick} />;
};

export default EditButton;
