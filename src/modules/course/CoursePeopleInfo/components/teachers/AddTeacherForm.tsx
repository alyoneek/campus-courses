import { Form, FormInstance, Select, message } from "antd";
import { FC, useEffect } from "react";

import { ITeacherRequest } from "@/api/courses/types";
import { teacherFormValidation } from "@/modules/course/helpers/validation";
import { addTeacherToCourse } from "@/modules/course/store/courseActions";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { getUsers } from "@/store/features/users/usersActions";

interface TeacherFormProps {
  form?: FormInstance;
  afterFinish?: () => void;
}

const AddTeacherForm: FC<TeacherFormProps> = ({ form, afterFinish }) => {
  const dispatch = useAppDispatch();
  //TODO
  const idCourse = useAppSelector(getCourseId);
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
        <Select showSearch size="large">
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

export default AddTeacherForm;