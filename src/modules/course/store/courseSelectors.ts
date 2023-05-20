import { RootState } from "@/store";

export const getCourseInfo = (state: RootState) => state.courses.courseInfo;
export const getCourseDescription = (state: RootState) =>
  state.courses.courseDescription;
export const getCourseId = (state: RootState) => state.courses.idCourse;
export const getCourseNotifications = (state: RootState) =>
  state.courses.allNotifications;
