import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC, ReactNode } from "react";

import { ButtonProps } from "./types";

interface AddButtonProps extends ButtonProps {
  children: ReactNode;
}

const AddButton: FC<AddButtonProps> = ({ onClick, className, children }) => {
  return (
    <Button
      icon={<AppstoreAddOutlined />}
      type="primary"
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default AddButton;
