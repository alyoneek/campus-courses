import {
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { FC } from "react";

import TextEditor from "@/components/TextEditor";
import { createCourseFormValidation } from "@/helpers/validation";

interface CreateCourseFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const CourseForm: FC<CreateCourseFormProps> = ({ form, afterFinish }) => {
  const changeRequirementsField = (value: string) => {
    form?.setFieldValue("requirements", value);
  };

  const changeAnnotationsField = (value: string) => {
    form?.setFieldValue("annotations", value);
  };

  const onFinish = (values: any) => {
    setTimeout(() => {
      const newValues = {
        ...values,
        startYear: values["startYear"].format("YYYY"),
      };
      console.log(newValues);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ semester: "autmn" }}
    >
      <Form.Item
        name="name"
        label="Название курса"
        rules={createCourseFormValidation.name}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="startYear"
        label="Год начала курса"
        rules={createCourseFormValidation.startYear}
      >
        <DatePicker size="large" picker="year" className="w-full" />
      </Form.Item>

      <Form.Item
        name="maximumStudentsCount"
        label="Общее количество мест"
        rules={createCourseFormValidation.maximumStudentsCount}
      >
        <InputNumber size="large" min={1} className="w-full" />
      </Form.Item>

      <Form.Item
        name="semester"
        label="Семестр"
        rules={createCourseFormValidation.semester}
      >
        <Radio.Group>
          <Radio value="autmn">Осенний</Radio>
          <Radio value="spring">Весенний</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="mainTeacherId"
        label="Основной преподаватель курса"
        rules={createCourseFormValidation.mainTeacherId}
      >
        <Select size="large">
          <Select.Option value="demo1">Demo1</Select.Option>
          <Select.Option value="demo2">Demo2</Select.Option>
          <Select.Option value="demo3">Demo3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="requirements"
        label="Требования"
        rules={createCourseFormValidation.requirements}
      >
        <TextEditor handleChange={changeRequirementsField} />
      </Form.Item>

      <Form.Item
        name="annotations"
        label="Аннотации"
        rules={createCourseFormValidation.annotations}
      >
        <TextEditor handleChange={changeAnnotationsField} />
      </Form.Item>
    </Form>
  );
};

export default CourseForm;
