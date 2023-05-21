import { Button, Form, Input, message } from "antd";
import { FC } from "react";

import { loginFormValidation } from "@/modules/auth/helpers/validation";
import { login } from "@/modules/auth/store/authActions";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const LoginForm: FC = () => {
  const status = useAppSelector((state) => state.account.status);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(login(values))
      .unwrap()
      .then(() => history.navigate && history.navigate("/"))
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
