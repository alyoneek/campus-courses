import { IProfileResponse } from "@/api/account/types";
import { profileFormValidation } from "@/helpers/validation";
import { useAppDispatch, useAppSelector } from "@/store";
import { editProfile } from "@/store/features/account/accountActions";
import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";

interface ProfileFormProps {
  profileInfo: IProfileResponse;
}

const ProfileForm: FC<ProfileFormProps> = ({ profileInfo }) => {
  const [isEdit, setEdit] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.account.status);

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
          onClick={onEditClick}
          className={isEdit ? "block" : "hidden"}
          loading={status === "loading"}
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
