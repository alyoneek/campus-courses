import { Empty } from "antd";

import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getCourseNotifications } from "@modules/course/store/courseSelectors";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
  const notifications = useAppSelector(getCourseNotifications);

  return notifications.length === 0 ? (
    <Empty description="Нет уведомлений" />
  ) : (
    <List
      data={notifications}
      renderItem={(notification, i) => (
        <NotificationItem
          key={i}
          notificationData={notification}
          className={i !== notifications.length ? "mb-3" : ""}
        />
      )}
    />
  );
};

export default NotificationsList;
