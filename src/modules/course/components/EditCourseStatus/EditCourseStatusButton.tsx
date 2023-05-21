import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import EditButton from "@/ui/buttons/EditButton";
import EditCourseStatusForm from "./EditCourseStatusForm";

const EditCourseStatusButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();
  const loading = useAppSelector((state) => state.loading.course.changeStatus);

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Изменение статуса курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
        loading={loading}
      >
        <EditCourseStatusForm />
      </ModalForm>
    </>
  );
};

export default EditCourseStatusButton;
