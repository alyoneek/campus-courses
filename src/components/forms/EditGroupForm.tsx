import { IGropRequest, IGropResponse } from "@/api/groups/types";
import { editGroupFormValidation } from "@/helpers/validation";
import { useAppDispatch } from "@/store";
import { updateGroup } from "@/store/features/groups/groupsActions";
import { Form, FormInstance, Input, message } from "antd";
import { FC, useEffect } from "react";

interface EditGroupFormProps {
  groupInfo: IGropResponse;
  form?: FormInstance;
  afterFinish?: () => void;
}

const EditGroupForm: FC<EditGroupFormProps> = ({
  groupInfo,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => form?.resetFields(), [groupInfo]);

  const onFinish = (values: IGropRequest) => {
    dispatch(updateGroup({ id: groupInfo.id, data: values }))
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
      initialValues={{ name: groupInfo.name }}
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
