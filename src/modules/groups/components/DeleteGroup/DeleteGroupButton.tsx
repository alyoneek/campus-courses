import { Popconfirm, message } from "antd";

import usePopconfirm from "@/hooks/usePopconfirm";
import { deleteGroup } from "@/modules/groups/store/groupsActions";
import { useAppDispatch } from "@/store";
import DeleteButton from "@/ui/buttons/DeleteButton";
import { FC } from "react";

interface DeleteGroupButtonProps {
  idGroup: string;
}

const DeleteGroupButton: FC<DeleteGroupButtonProps> = ({ idGroup }) => {
  const dispatch = useAppDispatch();

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
      title="Вы точно хотите удалить эту группу?"
      open={openPopconfirm}
      onConfirm={onOkPopconfirm}
      onCancel={onCancelPopconfirm}
    >
      <DeleteButton onClick={showPopconfirm} />
    </Popconfirm>
  );
};

export default DeleteGroupButton;
