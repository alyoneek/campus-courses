import { Form, FormInstance, Input, message } from "antd";
import { FC } from "react";

import { IGropRequest } from "@/api/groups/types";
import { useAppDispatch } from "@/store";
import { createGroup } from "@/store/features/groups/groupsActions";
import { createGroupFormValidation } from "@modules/groups/helpers/validation";

interface CreateGroupFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const CreateGroupForm: FC<CreateGroupFormProps> = ({ form, afterFinish }) => {
  const dispatch = useAppDispatch();

  const onFinish = (values: IGropRequest) => {
    dispatch(createGroup(values))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Группа успешно добавлена");
    afterFinish && afterFinish();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="name"
        label="Название группы"
        rules={createGroupFormValidation.name}
      >
        <Input size="large" />
      </Form.Item>
    </Form>
  );
};

export default CreateGroupForm;
