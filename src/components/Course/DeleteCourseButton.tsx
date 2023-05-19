import { Button, Popconfirm, message } from "antd";
import { FC } from "react";

import usePopconfirm from "@/hooks/usePopconfirm";
import { history } from "@/router/history";
import { useAppDispatch } from "@/store";
import { deleteCourse } from "@/store/features/courses/courseActions";

interface DeleteCourseButtonProps {
  idCourse: string;
}

const DeleteCourseButton: FC<DeleteCourseButtonProps> = ({ idCourse }) => {
  const dispatch = useAppDispatch();

  const { openPopconfirm, showPopconfirm, onCancelPopconfirm } =
    usePopconfirm();

  const onOkPopconfirm = () => {
    dispatch(deleteCourse(idCourse as string))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Курс успешно удален");
    history.navigate && history.navigate(-1);
  };

  return (
    <Popconfirm
      title="Удалить курс"
      description="Вы уверены, что хотите удалить этот курс?"
      open={openPopconfirm}
      onConfirm={onOkPopconfirm}
      onCancel={onCancelPopconfirm}
      okText="Да"
      cancelText="Нет"
    >
      <Button
        type="primary"
        danger
        size="large"
        className="ml-3"
        onClick={showPopconfirm}
      >
        Удалить
      </Button>
    </Popconfirm>
  );
};

export default DeleteCourseButton;
