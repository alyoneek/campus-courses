import { Popconfirm, message } from "antd";
import { FC } from "react";

import usePopconfirm from "@/hooks/usePopconfirm";
import { deleteCourse } from "@/modules/course/store/courseActions";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import DeleteButton from "@/ui/buttons/DeleteButton";
import { getCourseId } from "@modules/course/store/courseSelectors";

const DeleteCourseButton: FC = () => {
  const dispatch = useAppDispatch();
  const idCourse = useAppSelector(getCourseId);
  const loading = useAppSelector((state) => state.loading.course.delete);

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
      okButtonProps={{ loading: loading }}
    >
      <DeleteButton className="ml-3" onClick={showPopconfirm} />
    </Popconfirm>
  );
};

export default DeleteCourseButton;
