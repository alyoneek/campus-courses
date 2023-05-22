import useRoles from "@/hooks/useRoles";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import AddTeacherButton from "./AddTeacherButton";
import TeachersList from "./TeachersList";

const TeachersBlock = () => {
  const { isUserCourseEditor } = useRoles();
  const idCourse = useAppSelector(getCourseId);

  return (
    <>
      {isUserCourseEditor(idCourse) && <AddTeacherButton />}
      <TeachersList />
    </>
  );
};

export default TeachersBlock;
