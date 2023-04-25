import { teacherFormValidation } from "@/helpers/validation";
import { Form, FormInstance, Select } from "antd";
import { FC } from "react";

interface TeacherFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const TeacherForm: FC<TeacherFormProps> = ({ form, afterFinish }) => {
  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="teacher"
        label="Выберите преподавателя"
        rules={teacherFormValidation.teacher}
      >
        <Select size="large">
          <Select.Option value="demo1">Demo1</Select.Option>
          <Select.Option value="demo2">Demo2</Select.Option>
          <Select.Option value="demo3">Demo3</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default TeacherForm;
