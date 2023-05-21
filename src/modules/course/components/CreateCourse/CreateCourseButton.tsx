import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { Button } from "antd";
import { FC } from "react";
import CreateCourseForm from "./CreateCourseForm";

interface CreateCourseButtonProps {
  idGroup: string;
}

const CreateCourseButton: FC<CreateCourseButtonProps> = ({ idGroup }) => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <Button
        type="primary"
        htmlType="button"
        className="mb-2"
        onClick={showModal}
      >
        Создать
      </Button>
      <ModalForm
        title="Создание курса"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <CreateCourseForm idGroup={idGroup} />
      </ModalForm>
    </>
  );
};

export default CreateCourseButton;
