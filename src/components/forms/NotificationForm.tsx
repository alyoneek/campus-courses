import { Checkbox, Form, FormInstance, Input, message } from "antd";
import { FC } from "react";

import { INotificationRequest } from "@/api/courses/types";
import { notificationFormValidation } from "@/helpers/validation";
import { useAppDispatch } from "@/store";
import { addNotificationToCourse } from "@/store/features/courses/courseActions";

const { TextArea } = Input;

interface NotificationFormProps {
  idCourse: string;
  form?: FormInstance;
  afterFinish?: () => void;
}

const NotificationForm: FC<NotificationFormProps> = ({
  idCourse,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  const onFinish = (values: INotificationRequest) => {
    dispatch(addNotificationToCourse({ idCourse, data: values }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishSuccess = () => {
    message.success("Уведомление успешно добавлено");
    afterFinish && afterFinish();
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ isImportant: false }}
    >
      <Form.Item name="text" rules={notificationFormValidation.text}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="isImportant" valuePropName="checked">
        <Checkbox>Важное</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default NotificationForm;
