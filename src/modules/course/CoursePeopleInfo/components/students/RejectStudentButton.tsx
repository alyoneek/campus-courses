import { changeStudentStatus } from "@/modules/course/store/courseActions";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button } from "antd";
import { FC } from "react";

interface RejectStudentButtonProps {
  idStudent: string;
}

const RejectStudentButton: FC<RejectStudentButtonProps> = ({ idStudent }) => {
  const dispatch = useAppDispatch();
  const idCourse = useAppSelector(getCourseId);

  const onDecline = () => {
    if (idCourse) {
      dispatch(
        changeStudentStatus({
          idCourse,
          idStudent,
          data: { status: "Declined" },
        })
      );
    }
  };

  return (
    <Button type="primary" danger onClick={onDecline}>
      Отклонить заявку
    </Button>
  );
};

export default RejectStudentButton;
