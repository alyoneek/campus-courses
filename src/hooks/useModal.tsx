import { useForm } from "antd/es/form/Form";
import { useState } from "react";

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [form] = useForm();

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return {
    isOpen,
    form,
    showModal,
    hideModal,
  };
};

export default useModal;
