import { FC } from "react";

import ModalForm from "@/components/ModalForm";

import useModal from "@/hooks/useModal";
import EditButton from "@/ui/buttons/EditButton";
import EditCourseForm from "./EditCourseForm";

const EditCourseButton: FC = () => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Редактирование курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <EditCourseForm />
      </ModalForm>
    </>
  );
};

export default EditCourseButton;
