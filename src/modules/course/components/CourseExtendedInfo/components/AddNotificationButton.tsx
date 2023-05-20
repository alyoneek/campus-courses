import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import AddButton from "@/ui/buttons/AddButton";
import AddNotificationForm from "./AddNotificationForm";

const AddNotificationButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <AddButton className="mb-5" onClick={showModal}>
        Добавить уведомление
      </AddButton>

      <ModalForm
        title="Создание уведомления"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <AddNotificationForm />
      </ModalForm>
    </>
  );
};

export default AddNotificationButton;
