import { Form, FormInstance, Input, message } from "antd";
import { FC } from "react";

import { IGropRequest, IGropResponse } from "@/modules/groups/api/types";
import { updateGroup } from "@/modules/groups/store/groupsActions";
import { useAppDispatch } from "@/store";
import { editGroupFormValidation } from "@modules/groups/helpers/validation";

interface EditGroupFormProps {
  initial: IGropResponse;
  form?: FormInstance;
  afterFinish?: () => void;
}

const EditGroupForm: FC<EditGroupFormProps> = ({
  initial,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  const onFinish = (values: IGropRequest) => {
    dispatch(updateGroup({ id: initial.id, data: values }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Группа успешно отредактирована");
    afterFinish && afterFinish();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ name: initial.name }}
    >
      <Form.Item
        name="name"
        label="Название группы"
        rules={editGroupFormValidation.name}
      >
        <Input size="large" />
      </Form.Item>
    </Form>
  );
};

export default EditGroupForm;
