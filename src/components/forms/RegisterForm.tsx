import { registerFormValidation } from "@helpers/validation";
import { Button, DatePicker, Form, Input, message } from "antd";
import { FC } from "react";

const RegisterForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newValues = {
      ...values,
      birthDate: values["birthDate"].format("YYYY-MM-DD"),
    };
    console.log(newValues);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="ФИО"
        name="fullName"
        rules={registerFormValidation.fullName}
      >
        <Input type="text" size="large" />
      </Form.Item>
      <Form.Item
        label="Дата рождения"
        name="birthDate"
        rules={registerFormValidation.birthDate}
      >
        <DatePicker format="MM.DD.YYYY" size="large" className="w-full" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={registerFormValidation.email}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={registerFormValidation.password}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item
        label="Повторите пароль"
        name="confirmPassword"
        dependencies={["password"]}
        rules={registerFormValidation.confirm}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
