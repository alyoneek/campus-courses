import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getCourseNotifications } from "@modules/course/store/courseSelectors";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
  const notifications = useAppSelector(getCourseNotifications);

  return (
    <List
      data={notifications}
      emptyText="Нет уведомлений"
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
