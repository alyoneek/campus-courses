import { Form, FormInstance, Radio } from "antd";
import { FC } from "react";

import { resultFormValidation } from "@/helpers/validation";

interface NotificationFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
  markType: string;
  studentName: string;
}

const ResultForm: FC<NotificationFormProps> = ({
  form,
  afterFinish,
  markType,
  studentName,
}) => {
  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values, markType);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="mark"
        rules={resultFormValidation.mark}
        label={`Студент - ${studentName}`}
      >
        <Radio.Group>
          <Radio value="1">Пройдено</Radio>
          <Radio value="2">Зафейлено</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default ResultForm;
