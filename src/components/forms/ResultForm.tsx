import { Form, FormInstance, Radio, message } from "antd";
import { FC, useEffect } from "react";

import {
  CertificationType,
  IStudent,
  IStudentMarkRequest,
  MarkType,
} from "@/api/courses/types";
import { StudentMarks } from "@/helpers/constants";
import { resultFormValidation } from "@/helpers/validation";
import { useAppDispatch } from "@/store";
import { changeStudentMark } from "@/store/features/courses/courseActions";

interface NotificationFormProps {
  idCourse: string;
  markType: CertificationType;
  studentInfo: IStudent;
  initial: MarkType;
  form?: FormInstance;
  afterFinish?: () => void;
}

const ResultForm: FC<NotificationFormProps> = ({
  idCourse,
  initial,
  markType,
  studentInfo,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => form?.resetFields(), [markType, initial]);

  const onFinish = (values: IStudentMarkRequest) => {
    dispatch(
      changeStudentMark({ idCourse, idStudent: studentInfo.id, data: values })
    )
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishSuccess = () => {
    message.success("Отметка успешно изменена");
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
      initialValues={{ markType, mark: initial }}
    >
      <Form.Item hidden name="markType" />

      <Form.Item
        name="mark"
        rules={resultFormValidation.mark}
        label={`Студент - ${studentInfo.name}`}
      >
        <Radio.Group>
          {(Object.keys(StudentMarks) as Array<keyof typeof StudentMarks>).map(
            (key, i) =>
              key !== "NotDefined" && (
                <Radio key={i} value={key}>
                  {StudentMarks[key]}
                </Radio>
              )
          )}
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default ResultForm;
