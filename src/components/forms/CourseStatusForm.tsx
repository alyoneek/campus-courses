import { Form, FormInstance, Radio, message } from "antd";
import { FC } from "react";

import { CourseStatus } from "@/api/courses/types";
import { CourseStatuses } from "@/helpers/constants";
import { courseStatusFormValidation } from "@/helpers/validation";
import { useAppDispatch } from "@/store";
import { changeCourseStatus } from "@/store/features/courses/courseActions";

interface CourseStatusFormProps {
  idCourse: string;
  initial: CourseStatus;
  form?: FormInstance;
  afterFinish?: () => void;
}

const CourseStatusForm: FC<CourseStatusFormProps> = ({
  idCourse,
  initial,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(changeCourseStatus({ id: idCourse, data: values }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Статус курса успешно изменен");
    afterFinish && afterFinish();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ status: initial }}
    >
      <Form.Item name="status" rules={courseStatusFormValidation.status}>
        <Radio.Group>
          {(
            Object.keys(CourseStatuses) as Array<keyof typeof CourseStatuses>
          ).map((key, i) => (
            <Radio key={i} value={key}>
              {CourseStatuses[key]}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default CourseStatusForm;
