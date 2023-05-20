import { Alert, List } from "antd";

import { useAppSelector } from "@/store";
import { getCourseNotifications } from "@modules/course/store/courseSelectors";

const NotificationsList = () => {
  const notifications = useAppSelector(getCourseNotifications);

  return (
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
  );
};

export default NotificationsList;
