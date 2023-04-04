import { createCourseFormValidation } from "@/helpers/validation";
import { useAppDispatch, useAppSelector } from "@/store";
import { createCourse } from "@/store/features/groups/groupsActions";
import { getUsers } from "@/store/features/users/usersActions";
import {
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
} from "antd";
import { FC, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextEditor from "../TextEditor";

interface CreateCourseFormProps {
  idGroup: string;
  form?: FormInstance;
  afterFinish?: () => void;
}

const CreateCourseForm: FC<CreateCourseFormProps> = ({
  idGroup,
  form,
  afterFinish,
}) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const changeRequirementsField = (value: string) => {
    form?.setFieldValue("requirements", value);
  };

  const changeAnnotationsField = (value: string) => {
    form?.setFieldValue("annotations", value);
  };

  const onFinish = (values: any) => {
    const newValues = {
      ...values,
      startYear: Number(values["startYear"].format("YYYY")),
    };

    dispatch(createCourse({ idGroup, data: newValues }))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Курс успешно добавлен");
    afterFinish && afterFinish();
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ semester: "Autmn" }}
      >
        <Form.Item
          name="name"
          label="Название курса"
          rules={createCourseFormValidation.name}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="startYear"
          label="Год начала курса"
          rules={createCourseFormValidation.startYear}
        >
          <DatePicker size="large" picker="year" className="w-full" />
        </Form.Item>

        <Form.Item
          name="maximumStudentsCount"
          label="Общее количество мест"
          rules={createCourseFormValidation.maximumStudentsCount}
        >
          <InputNumber size="large" min={1} className="w-full" />
        </Form.Item>

        <Form.Item
          name="semester"
          label="Семестр"
          rules={createCourseFormValidation.semester}
        >
          <Radio.Group>
            <Radio value="Autmn">Осенний</Radio>
            <Radio value="Spring">Весенний</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="mainTeacherId"
          label="Основной преподаватель курса"
          rules={createCourseFormValidation.mainTeacherId}
        >
          <Select size="large">
            {users.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.fullName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="requirements"
          label="Требования"
          rules={createCourseFormValidation.requirements}
        >
          <TextEditor onChange={changeRequirementsField} />
        </Form.Item>

        <Form.Item
          name="annotations"
          label="Аннотации"
          rules={createCourseFormValidation.annotations}
        >
          <TextEditor onChange={changeAnnotationsField} />
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateCourseForm;
