import { Form, FormInstance, Radio } from "antd";
import { FC } from "react";

import { courseStatusFormValidation } from "@/helpers/validation";

interface CourseStatusFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const CourseStatusForm: FC<CourseStatusFormProps> = ({ form, afterFinish }) => {
  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item name="status" rules={courseStatusFormValidation.status}>
        <Radio.Group>
          <Radio value="1">Открыт для записи</Radio>
          <Radio value="2">В процессе</Radio>
          <Radio value="3">Завершен</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default CourseStatusForm;
