import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ModalForm from "@/components/ModalForm";
import AddButton from "@/ui/buttons/AddButton";
import AddNotificationForm from "./AddNotificationForm";

const AddNotificationButton = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [notificationForm] = useForm();

  const showNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const handleNotificationModalCancel = () => {
    setNotificationModalOpen(false);
  };

  return (
    <>
      <AddButton className="mb-5" onClick={showNotificationModal}>
        Добавить уведомление
      </AddButton>

      <ModalForm
        title="Создание уведомления"
        open={isNotificationModalOpen}
        onCancel={handleNotificationModalCancel}
        form={notificationForm}
      >
        <AddNotificationForm />
      </ModalForm>
    </>
  );
};

export default AddNotificationButton;
