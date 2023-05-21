import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";

import { profileFormValidation } from "@/modules/account/helpers/validation";
import { getProfile } from "@/modules/account/store/accountSelectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { editProfile } from "../../store/accountActions";

const ProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const profileInfo = useAppSelector(getProfile);

  const [isEdit, setEdit] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => form.resetFields(), [profileInfo]);

  const onFinish = (values: any) => {
    const newValues = {
      ...values,
      birthDate: values["birthDate"].format("YYYY-MM-DD"),
    };

    dispatch(editProfile(newValues))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => {
        onFinishFailed(e.message);
      });
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Профиль успешно отредактирован");
    setEdit(false);
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
      autoComplete="off"
      initialValues={{
        fullName: profileInfo.fullName,
        birthDate: dayjs(profileInfo.birthDate),
      }}
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
        <div>{profileInfo.email}</div>
      </Form.Item>

      <Form.Item
        label="Дата рождения"
        name="birthDate"
        labelAlign="left"
        rules={profileFormValidation.birthDate}
      >
        <DatePicker
          format="DD.MM.YYYY"
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
          className={isEdit ? "block" : "hidden"}
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
