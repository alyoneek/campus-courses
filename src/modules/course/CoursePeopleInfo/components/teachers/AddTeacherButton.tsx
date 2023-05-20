import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ModalForm from "@/components/ModalForm";
import AddButton from "@/ui/buttons/AddButton";
import AddTeacherForm from "./AddTeacherForm";

const AddTeacherButton = () => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [teacherForm] = useForm();

  const showTeacherModal = () => {
    setTeacherModalOpen(true);
  };

  const handleTeacherModalCancel = () => {
    setTeacherModalOpen(false);
  };

  return (
    <>
      <AddButton className="my-3" onClick={showTeacherModal}>
        Добавить преподавателя
      </AddButton>

      <ModalForm
        title="Добавление преподавателя"
        open={isTeacherModalOpen}
        onCancel={handleTeacherModalCancel}
        form={teacherForm}
      >
        <AddTeacherForm />
      </ModalForm>
    </>
  );
};

export default AddTeacherButton;
