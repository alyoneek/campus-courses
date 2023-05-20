import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import AddButton from "@/ui/buttons/AddButton";
import AddTeacherForm from "./AddTeacherForm";

const AddTeacherButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <AddButton className="my-3" onClick={showModal}>
        Добавить преподавателя
      </AddButton>

      <ModalForm
        title="Добавление преподавателя"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <AddTeacherForm />
      </ModalForm>
    </>
  );
};

export default AddTeacherButton;
