import { useResetFormOnCloseModal } from "@/hooks/useResetFormOnCloseModal";
import { useAppSelector } from "@/store";
import { Button, FormInstance, Modal } from "antd";
import { cloneElement, ReactElement } from "react";

interface ModalFormProps {
  title?: string;
  open: boolean;
  onCancel: () => void;
  form: FormInstance;
  children?: ReactElement;
}

const ModalForm = ({
  title,
  open,
  onCancel,
  form,
  children,
}: ModalFormProps) => {
  useResetFormOnCloseModal(form, open);
  const status = useAppSelector((state) => state.groups.status);

  const onOk = () => {
    form.submit();
  };

  const renderChildren = () => {
    if (children) {
      return cloneElement(children, {
        ...children.props,
        form: form,
      });
    }
    return null;
  };

  return (
    <Modal
      title={title}
      centered
      width={1000}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Отменить
        </Button>,
        <Button
          key="submit"
          type="primary"
          htmlType="submit"
          loading={status === "loading"}
          onClick={onOk}
        >
          Сохранить
        </Button>,
      ]}
      className="my-3"
    >
      {renderChildren()}
    </Modal>
  );
};

export default ModalForm;
