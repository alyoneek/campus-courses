import { Form, FormInstance } from "antd";

import TextEditor from "@/components/TextEditor";
import { editCourseFormValidation } from "@/helpers/validation";
import { FC } from "react";

interface ShortCourseFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const ShortCourseForm: FC<ShortCourseFormProps> = ({ form, afterFinish }) => {
  const changeRequirementsField = (value: string) => {
    form?.setFieldValue("requirements", value);
  };

  const changeAnnotationsField = (value: string) => {
    form?.setFieldValue("annotations", value);
  };

  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="requirements"
        label="Требования"
        rules={editCourseFormValidation.requirements}
      >
        <TextEditor handleChange={changeRequirementsField} />
      </Form.Item>

      <Form.Item
        name="annotations"
        label="Аннотации"
        rules={editCourseFormValidation.annotations}
      >
        <TextEditor handleChange={changeAnnotationsField} />
      </Form.Item>
    </Form>
  );
};

export default ShortCourseForm;
