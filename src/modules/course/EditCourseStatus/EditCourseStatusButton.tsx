import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ModalForm from "@/components/ModalForm";
import EditButton from "@/ui/buttons/EditButton";
import EditCourseStatusForm from "./EditCourseStatusForm";

const EditCourseStatusButton = () => {
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [statusCourseForm] = useForm();

  const handleStatusModalCancel = () => {
    setStatusModalOpen(false);
  };

  const showStatusModal = () => {
    setStatusModalOpen(true);
  };

  return (
    <>
      <EditButton onClick={showStatusModal} />

      <ModalForm
        title="Изменение статуса курса"
        open={isStatusModalOpen}
        onCancel={handleStatusModalCancel}
        form={statusCourseForm}
      >
        <EditCourseStatusForm />
      </ModalForm>
    </>
  );
};

export default EditCourseStatusButton;
