import { FC } from "react";

import ModalForm from "@/components/ModalForm";

import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import EditButton from "@/ui/buttons/EditButton";
import EditCourseForm from "./EditCourseForm";

const EditCourseButton: FC = () => {
  const { isOpen, form, showModal, hideModal } = useModal();
  const loading = useAppSelector((state) => state.loading.course.edit);

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Редактирование курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
        loading={loading}
      >
        <EditCourseForm />
      </ModalForm>
    </>
  );
};

export default EditCourseButton;
