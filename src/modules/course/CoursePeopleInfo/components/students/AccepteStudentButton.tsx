import { Button } from "antd";
import { FC } from "react";

import { changeStudentStatus } from "@/modules/course/store/courseActions";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppDispatch, useAppSelector } from "@/store";

interface AccepteStudentButtonProps {
  idStudent: string;
}

const AccepteStudentButton: FC<AccepteStudentButtonProps> = ({ idStudent }) => {
  const dispatch = useAppDispatch();
  const idCourse = useAppSelector(getCourseId);

  const onAccept = () => {
    if (idCourse) {
      dispatch(
        changeStudentStatus({
          idCourse,
          idStudent,
          data: { status: "Accepted" },
        })
      );
    }
  };

  return (
    <Button type="primary" onClick={onAccept}>
      Принять
    </Button>
  );
};

export default AccepteStudentButton;
