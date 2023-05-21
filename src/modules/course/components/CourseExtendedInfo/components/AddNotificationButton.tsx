import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import AddButton from "@/ui/buttons/AddButton";
import AddNotificationForm from "./AddNotificationForm";

const AddNotificationButton = () => {
  const loading = useAppSelector(
    (state) => state.loading.course.addNotification
  );
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
        loading={loading}
      >
        <AddNotificationForm />
      </ModalForm>
    </>
  );
};

export default AddNotificationButton;
