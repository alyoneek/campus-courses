import { Form, FormInstance, Input } from "antd";
import { FC } from "react";

interface EditGroupFormProps {
  idGroup: string;
  form?: FormInstance;
  afterFinish?: () => void;
}

const EditGroupForm: FC<EditGroupFormProps> = ({
  idGroup,
  form,
  afterFinish,
}) => {
  const onFinish = (values: any) => {
    setTimeout(() => {
      console.log(values);
      afterFinish && afterFinish();
    }, 1000);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="userForm"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ name: idGroup }}
    >
      <Form.Item
        name="name"
        label="Название группы"
        rules={[{ required: true }]}
      >
        <Input size="large" />
      </Form.Item>
    </Form>
  );
};

export default EditGroupForm;
