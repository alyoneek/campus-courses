import { Alert, Button, List } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import ModalForm from "../ModalForm";
import NotificationForm from "../forms/NotificationForm";

type Props = {
  data: string[];
};

const NotificationsBlock = ({ data }: Props) => {
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
      <ModalForm
        title="Создание уведомления"
        open={isNotificationModalOpen}
        onCancel={handleNotificationModalCancel}
        form={notificationForm}
      >
        <NotificationForm />
      </ModalForm>

      <Button type="primary" className="mb-5" onClick={showNotificationModal}>
        Добавить уведомление
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Alert message={item} type="error" className="w-full" />
          </List.Item>
        )}
      />
    </>
  );
};

export default NotificationsBlock;
