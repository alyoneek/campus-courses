import { Popconfirm, message } from "antd";

import usePopconfirm from "@/hooks/usePopconfirm";
import { deleteGroup } from "@/modules/groups/store/groupsActions";
import { useAppDispatch, useAppSelector } from "@/store";
import DeleteButton from "@/ui/buttons/DeleteButton";
import { FC } from "react";

interface DeleteGroupButtonProps {
  idGroup: string;
}

const DeleteGroupButton: FC<DeleteGroupButtonProps> = ({ idGroup }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.groups.delete);

  const { openPopconfirm, showPopconfirm, onCancelPopconfirm } =
    usePopconfirm();

  const onOkPopconfirm = () => {
    dispatch(deleteGroup(idGroup))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Группа успешно удалена");
    onCancelPopconfirm();
  };

  return (
    <Popconfirm
      title="Удаление группы"
      description="Вы точно хотите удалить эту группу?"
      open={openPopconfirm}
      onConfirm={onOkPopconfirm}
      onCancel={onCancelPopconfirm}
      okText="Да"
      cancelText="Нет"
      okButtonProps={{ loading: loading }}
    >
      <DeleteButton onClick={showPopconfirm} />
    </Popconfirm>
  );
};

export default DeleteGroupButton;
