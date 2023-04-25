import { useResetFormOnCloseModal } from "@/hooks/useResetFormOnCloseModal";
import { Button, FormInstance, Modal } from "antd";
import { ReactElement, cloneElement } from "react";

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

  const onOk = () => {
    form.submit();
  };

  const renderChildren = () => {
    if (children) {
      return cloneElement(children, {
        ...children.props,
        form: form,
        afterFinish: onCancel,
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
          // loading
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
