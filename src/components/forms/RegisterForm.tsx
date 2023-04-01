import { useAppDispatch, useAppSelector } from "@/store";
import { signup } from "@/store/features/account/accountActions";
import { registerFormValidation } from "@helpers/validation";
import { Button, DatePicker, Form, Input, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm: FC = () => {
  const status = useAppSelector((state) => state.account.status);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newValues = {
      ...values,
      birthDate: values["birthDate"].format("YYYY-MM-DD"),
    };
    dispatch(signup(newValues))
      .unwrap()
      .then(() => navigate("/groups"))
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
