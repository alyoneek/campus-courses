import { Alert, Card } from "antd";
import { FC } from "react";

import { INotification } from "@/modules/course/api/types";

interface NotificationItemProps {
  notificationData: INotification;
  className?: string;
}

const NotificationItem: FC<NotificationItemProps> = ({
  notificationData,
  className,
}) => {
  return notificationData.isImportant ? (
    <Alert
      message={notificationData.text}
      type="warning"
      className={`w-full bg-red-100 border-red-300 ${className}`}
      showIcon
    />
  ) : (
    <Card type="inner" className={`${className} bg-gray-50`}>
      {notificationData.text}
    </Card>
  );
};

export default NotificationItem;
