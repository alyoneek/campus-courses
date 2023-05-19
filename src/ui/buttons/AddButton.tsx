import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import { ButtonProps } from "./types";

interface AddButtonProps extends ButtonProps {
  name: string;
}

const AddButton: FC<AddButtonProps> = ({ onClick, name }) => {
  return (
    <Button danger icon={<AppstoreAddOutlined />} onClick={onClick}>
      {name}
    </Button>
  );
};

export default AddButton;
