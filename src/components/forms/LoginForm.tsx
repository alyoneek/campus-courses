import { loginFormValidation } from "@/helpers/validation";
import { Button, Form, Input, message } from "antd";

const LoginForm = () => {
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
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={loginFormValidation.password}
      >
        <Input.Password size="large" />
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
