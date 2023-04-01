import CoursesList from "@/components/CoursesList";
import CreateCourseForm from "@/components/forms/CreateCourseForm";
import ModalForm from "@/components/ModalForm";
import DataContent from "@/layouts/content/DataContent";
import { Button, Form } from "antd";
import { useState } from "react";

const Group = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [createCourseForm] = Form.useForm();

  const showCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCreateModalCancel = () => {
    setCreateModalOpen(false);
  };

  return (
    <DataContent title="Группа - Компьютерные науки">
      <Button
        type="primary"
        htmlType="button"
        className="mb-2"
        onClick={showCreateModal}
      >
        Создать
      </Button>

      <CoursesList />

      <ModalForm
        title="Создание курса"
        open={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
        form={createCourseForm}
      >
        <CreateCourseForm afterFinish={handleCreateModalCancel} />
      </ModalForm>
    </DataContent>
  );
};

export default Group;
