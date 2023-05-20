import { Checkbox, Form, FormInstance, Input, message } from "antd";
import { FC } from "react";

import { INotificationRequest } from "@/api/courses/types";
import { notificationFormValidation } from "@/modules/course/helpers/validation";
import { addNotificationToCourse } from "@/modules/course/store/courseActions";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCourseId } from "@modules/course/store/courseSelectors";

const { TextArea } = Input;

interface NotificationFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const AddNotificationForm: FC<NotificationFormProps> = ({
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();
  const idCourse = useAppSelector(getCourseId);

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

export default AddNotificationForm;
