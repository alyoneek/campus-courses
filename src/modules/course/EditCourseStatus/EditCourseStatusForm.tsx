import { Form, FormInstance, Radio, message } from "antd";
import { FC } from "react";

import { ICourseStatusRequest } from "@/api/courses/types";
import { CourseStatuses } from "@/helpers/constants";
import { courseStatusFormValidation } from "@/helpers/validation";
import { changeCourseStatus } from "@/modules/course/store/courseActions";
import { useAppDispatch, useAppSelector } from "@/store";
import * as courseSelectors from "@modules/course/store/courseSelectors";

interface CourseStatusFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const EditCourseStatusForm: FC<CourseStatusFormProps> = ({
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();
  const courseInfo = useAppSelector(courseSelectors.getCourseInfo);
  const idCourse = useAppSelector(courseSelectors.getCourseId);

  const onFinish = (values: ICourseStatusRequest) => {
    dispatch(changeCourseStatus({ idCourse, data: values }))
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
      initialValues={{ status: courseInfo.status }}
    >
      <Form.Item name="status" rules={courseStatusFormValidation.status}>
        <Radio.Group>
          {(
            Object.keys(CourseStatuses) as Array<keyof typeof CourseStatuses>
          ).map(
            (key, i) =>
              key != "Created" && (
                <Radio key={i} value={key}>
                  {CourseStatuses[key]}
                </Radio>
              )
          )}
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default EditCourseStatusForm;
