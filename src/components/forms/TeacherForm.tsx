import { Form, FormInstance, Select, message } from "antd";
import { FC, useEffect } from "react";

import { ITeacherRequest } from "@/api/courses/types";
import { teacherFormValidation } from "@/helpers/validation";
import { useAppDispatch, useAppSelector } from "@/store";
import { addTeacherToCourse } from "@/store/features/courses/courseActions";
import { getUsers } from "@/store/features/users/usersActions";

interface TeacherFormProps {
  idCourse: string;
  form?: FormInstance;
  afterFinish?: () => void;
}

const TeacherForm: FC<TeacherFormProps> = ({ idCourse, form, afterFinish }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onFinish = (values: ITeacherRequest) => {
    dispatch(addTeacherToCourse({ idCourse, data: values }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishSuccess = () => {
    message.success("Преподаватель успешно добавлен");
    afterFinish && afterFinish();
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="userId"
        label="Выберите преподавателя"
        rules={teacherFormValidation.userId}
      >
        <Select size="large">
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.fullName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default TeacherForm;
