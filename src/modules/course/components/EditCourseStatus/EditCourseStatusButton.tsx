import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import EditButton from "@/ui/buttons/EditButton";
import EditCourseStatusForm from "./EditCourseStatusForm";

const EditCourseStatusButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Изменение статуса курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <EditCourseStatusForm />
      </ModalForm>
    </>
  );
};

export default EditCourseStatusButton;
