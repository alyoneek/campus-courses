import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import AddButton from "@/ui/buttons/AddButton";
import { FC } from "react";
import CreateCourseForm from "./CreateCourseForm";

interface CreateCourseButtonProps {
  idGroup: string;
}

const CreateCourseButton: FC<CreateCourseButtonProps> = ({ idGroup }) => {
  const { isOpen, form, showModal, hideModal } = useModal();
  const loading = useAppSelector((state) => state.loading.course.create);

  return (
    <>
      <AddButton className="mb-2" onClick={showModal}>
        Создать
      </AddButton>
      <ModalForm
        title="Создание курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
        loading={loading}
      >
        <CreateCourseForm idGroup={idGroup} />
      </ModalForm>
    </>
  );
};

export default CreateCourseButton;
