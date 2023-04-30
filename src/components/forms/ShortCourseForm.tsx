import { Form, FormInstance, message } from "antd";

import { ICourseDescription, ICourseShortRequest } from "@/api/courses/types";
import TextEditor from "@/components/TextEditor";
import { courseFormValidation } from "@/helpers/validation";
import { useAppDispatch } from "@/store";
import { editCourse } from "@/store/features/courses/courseActions";
import { FC } from "react";

interface ShortCourseFormProps {
  idCourse: string;
  courseDescription: ICourseDescription;
  form?: FormInstance;
  afterFinish?: () => void;
}

const ShortCourseForm: FC<ShortCourseFormProps> = ({
  idCourse,
  courseDescription,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  const changeRequirementsField = (value: string) => {
    form?.setFieldValue("requirements", value);
  };

  const changeAnnotationsField = (value: string) => {
    form?.setFieldValue("annotations", value);
  };

  const onFinish = (values: ICourseShortRequest) => {
    dispatch(editCourse({ idCourse, data: values }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Курс успешно отредактирован");
    afterFinish && afterFinish();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ ...courseDescription }}
    >
      <Form.Item
        name="requirements"
        label="Требования"
        rules={courseFormValidation.requirements}
      >
        <TextEditor handleChange={changeRequirementsField} />
      </Form.Item>

      <Form.Item
        name="annotations"
        label="Аннотации"
        rules={courseFormValidation.annotations}
      >
        <TextEditor handleChange={changeAnnotationsField} />
      </Form.Item>
    </Form>
  );
};

export default ShortCourseForm;
