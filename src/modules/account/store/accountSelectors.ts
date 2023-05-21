import { RootState } from "@/store";

export const getProfile = (state: RootState) => state.account.profile;
export const getTeachingCourses = (state: RootState) =>
  state.account.teachingCourses;
export const getStudingCourses = (state: RootState) =>
  state.account.studingCourses;
export const getRoles = (state: RootState) => state.account.roles;
