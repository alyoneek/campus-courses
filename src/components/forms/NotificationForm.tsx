import { Form, FormInstance, Input } from "antd";
import { FC } from "react";

import { notificationFormValidation } from "@/helpers/validation";

const { TextArea } = Input;

interface NotificationFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const NotificationForm: FC<NotificationFormProps> = ({ form, afterFinish }) => {
  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="description"
        rules={notificationFormValidation.description}
      >
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default NotificationForm;
