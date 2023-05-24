import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import { ButtonProps } from "./types";

const ViewButton: FC<ButtonProps> = ({ onClick }) => {
  return <Button icon={<EyeOutlined />} onClick={onClick} />;
};

export default ViewButton;
