import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getCourseNotifications } from "@modules/course/store/courseSelectors";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
  const notifications = useAppSelector(getCourseNotifications);

  return (
    <List
      data={notifications}
      renderItem={(notification, i) => (
        <NotificationItem
          notificationData={notification}
          className={i !== notifications.length ? "mb-3" : ""}
        />
      )}
    />
  );
};

export default NotificationsList;
