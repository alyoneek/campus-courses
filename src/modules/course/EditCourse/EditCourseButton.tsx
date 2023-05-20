import { useForm } from "antd/es/form/Form";
import { FC, useState } from "react";

import ModalForm from "@/components/ModalForm";

import EditButton from "@/ui/buttons/EditButton";
import EditCourseForm from "./EditCourseForm";

const EditCourseButton: FC = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editCourseForm] = useForm();

  const handleEditModalCancel = () => {
    setEditModalOpen(false);
  };

  const showEditModal = () => {
    setEditModalOpen(true);
  };

  return (
    <>
      <EditButton onClick={showEditModal} />

      <ModalForm
        title="Редактирование курса"
        open={isEditModalOpen}
        onCancel={handleEditModalCancel}
        form={editCourseForm}
      >
        <EditCourseForm />
      </ModalForm>
    </>
  );
};

export default EditCourseButton;
