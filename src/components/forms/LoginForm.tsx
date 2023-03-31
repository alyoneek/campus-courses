import { loginFormValidation } from "@/helpers/validation";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { FC } from "react";

const LoginForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
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
      <Form.Item label="Email" name="email" rules={loginFormValidation.email}>
        <Input
          prefix={
            <UserOutlined className="site-form-item-icon text-gray-500" />
          }
          size="large"
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={loginFormValidation.password}
      >
        <Input.Password
          prefix={
            <LockOutlined className="site-form-item-icon text-gray-500" />
          }
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
