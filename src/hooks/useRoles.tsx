import { useAppSelector } from "@/store";
import { Roles } from "@/store/features/account/accountSlice";
import useAuth from "./useAuth";

const useRoles = () => {
  const { roles } = useAuth();
  const teachingCourses = useAppSelector(
    (state) => state.account.teachingCourses
  );
  const studingCourses = useAppSelector(
    (state) => state.account.studingCourses
  );

  const isUserTeacherInCourse = (idCourse: string) => {
    return teachingCourses.find((c) => c.id == idCourse);
  };

  const isUserStudentInCourse = (idCourse: string) => {
    return studingCourses.find((c) => c.id == idCourse);
  };

  const isUserInRoles = (checkedRoles: Roles[]) =>
    roles.find((role) => checkedRoles?.includes(role));

  const isUserCourseEditor = (idCourse: string) =>
    !!isUserInRoles([Roles.isAdmin]) || !!isUserTeacherInCourse(idCourse);

  const isUserCourseSigner = (idCourse: string) =>
    !isUserStudentInCourse(idCourse) && !isUserTeacherInCourse(idCourse);

  return {
    isUserInRoles,
    isUserCourseEditor,
    isUserCourseSigner,
  };
};

export default useRoles;
