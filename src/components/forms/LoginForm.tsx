import { loginFormValidation } from "@/helpers/validation";
import { useAppDispatch, useAppSelector } from "@/store";
import { login } from "@/store/features/account/accountActions";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
  const status = useAppSelector((state) => state.account.status);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate("/groups"))
      .catch((e) => {
        onFinishFailed(e.message);
      });
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish} autoComplete="off">
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
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={status === "loading"}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
