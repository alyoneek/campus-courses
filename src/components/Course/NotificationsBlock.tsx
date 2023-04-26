import { Alert, Button, List } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useParams } from "react-router-dom";

import ModalForm from "@/components/ModalForm";
import NotificationForm from "@/components/forms/NotificationForm";
import { useAppSelector } from "@/store";

const NotificationsBlock = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [notificationForm] = useForm();

  const { idCourse } = useParams();
  const notifications = useAppSelector(
    (state) => state.courses.allNotifications
  );

  const showNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const handleNotificationModalCancel = () => {
    setNotificationModalOpen(false);
  };

  return (
    <>
      <Button type="primary" className="mb-5" onClick={showNotificationModal}>
        Добавить уведомление
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            {item.isImportant ? (
              <Alert message={item.text} type="error" className="w-full" />
            ) : (
              <div>{item.text}</div>
            )}
          </List.Item>
        )}
      />

      <ModalForm
        title="Создание уведомления"
        open={isNotificationModalOpen}
        onCancel={handleNotificationModalCancel}
        form={notificationForm}
      >
        <NotificationForm />
      </ModalForm>
    </>
  );
};

export default NotificationsBlock;
