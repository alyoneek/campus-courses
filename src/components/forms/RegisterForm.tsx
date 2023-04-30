import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { signup } from "@/store/features/auth/authActions";
import { registerFormValidation } from "@helpers/validation";
import { Button, DatePicker, Form, Input, message } from "antd";
import { FC } from "react";

const RegisterForm: FC = () => {
  const status = useAppSelector((state) => state.account.status);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newValues = {
      ...values,
      birthDate: values["birthDate"].format("YYYY-MM-DD"),
    };
    dispatch(signup(newValues))
      .unwrap()
      .then(() => history.navigate && history.navigate("/groups"))
      .catch((e) => {
        onFinishFailed(e.message);
      });
  };

  const onFinishFailed = (value: string) => {
    if (value) message.error(value);
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish} autoComplete="off">
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
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={status === "loading"}
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
