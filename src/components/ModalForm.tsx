import { useResetFormOnCloseModal } from "@/hooks/useResetFormOnCloseModal";
import { Button, FormInstance, Modal } from "antd";
import { ReactElement, cloneElement } from "react";

interface ModalFormProps {
  title?: string;
  open: boolean;
  onCancel: () => void;
  form: FormInstance;
  children?: ReactElement;
  loading?: boolean;
}

const ModalForm = ({
  title,
  open,
  onCancel,
  form,
  children,
  loading = false,
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
      confirmLoading={loading}
      footer={[
        <Button key="back" onClick={onCancel}>
          Отменить
        </Button>,
        <Button
          key="submit"
          type="primary"
          htmlType="submit"
          loading={loading}
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
