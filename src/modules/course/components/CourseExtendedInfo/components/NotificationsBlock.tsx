import useRoles from "@/hooks/useRoles";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import AddNotificationButton from "./AddNotificationButton";
import NotificationsList from "./NotificationsList";

const NotificationsBlock = () => {
  const { isUserCourseEditor } = useRoles();
  const idCourse = useAppSelector(getCourseId);

  return (
    <>
      {isUserCourseEditor(idCourse) && <AddNotificationButton />}
      <NotificationsList />
    </>
  );
};

export default NotificationsBlock;
