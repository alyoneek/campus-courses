import { profileFormValidation } from "@/helpers/validation";
import { Button, DatePicker, Form, Input, message } from "antd";
import { FC, useState } from "react";

const ProfileForm: FC = () => {
  const [isEdit, setEdit] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    setEdit(false);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onEditClick = () => {
    setEdit(true);
  };

  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

  return (
    <Form
      {...formItemLayout}
      layout="horizontal"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="ФИО"
        name="fullName"
        labelAlign="left"
        rules={profileFormValidation.fullName}
      >
        <Input size="large" disabled={!isEdit} />
      </Form.Item>

      <Form.Item label="Email" labelAlign="left">
        <div>alyonta03@mail.ru</div>
      </Form.Item>

      <Form.Item
        label="Дата рождения"
        name="birthDate"
        labelAlign="left"
        rules={profileFormValidation.birthDate}
      >
        <DatePicker
          format="MM.DD.YYYY"
          size="large"
          className="w-full"
          disabled={!isEdit}
        />
      </Form.Item>

      <Form.Item className="flex justify-end">
        <Button
          type="primary"
          htmlType="button"
          size="large"
          onClick={onEditClick}
          className={isEdit ? "hidden" : "block"}
        >
          Изменить
        </Button>
        <Button
          htmlType="submit"
          size="large"
          onClick={onEditClick}
          className={isEdit ? "block" : "hidden"}
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
