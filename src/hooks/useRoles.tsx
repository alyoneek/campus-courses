import { Roles, accountSelectors } from "@/modules/account";
import { IRole } from "@/modules/account/types";
import { useAppSelector } from "@/store";
import useAuth from "./useAuth";

const useRoles = () => {
  const { roles, email } = useAuth();
  const teachingCourses = useAppSelector(accountSelectors.getTeachingCourses);
  const studingCourses = useAppSelector(accountSelectors.getStudingCourses);

  const isUserInRoles = (checkedRoles: IRole[]) =>
    roles.find((role) => checkedRoles?.includes(role));

  const isUserTeacherInCourse = (idCourse: string) => {
    return teachingCourses.find((c) => c.id == idCourse);
  };

  const isUserStudentInCourse = (idCourse: string) => {
    return studingCourses.find((c) => c.id == idCourse);
  };

  const isUserCourseEditor = (idCourse: string) =>
    !!isUserInRoles([Roles.isAdmin]) || !!isUserTeacherInCourse(idCourse);

  const isUserCourseSigner = (idCourse: string) =>
    !isUserStudentInCourse(idCourse) && !isUserTeacherInCourse(idCourse);

  const isUserCanSeeMark = (checkEmail: string, idCourse: string) =>
    !!isUserCourseEditor(idCourse) || email === checkEmail;

  return {
    isUserInRoles,
    isUserCourseEditor,
    isUserCourseSigner,
    isUserCanSeeMark,
  };
};

export default useRoles;
