import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import AddButton from "@/ui/buttons/AddButton";
import AddTeacherForm from "./AddTeacherForm";

const AddTeacherButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();
  const loading = useAppSelector((state) => state.loading.course.addTeacher);

  return (
    <>
      <AddButton className="mb-5" onClick={showModal}>
        Добавить преподавателя
      </AddButton>

      <ModalForm
        title="Добавление преподавателя"
        open={isOpen}
        onCancel={hideModal}
        form={form}
        loading={loading}
      >
        <AddTeacherForm />
      </ModalForm>
    </>
  );
};

export default AddTeacherButton;
