import { RootState } from "@/store";

export const getGroups = (state: RootState) => state.groups.allGroups;
export const getCourses = (state: RootState) =>
  state.groups.currentGroupCourses;
export const getGroupError = (state: RootState) => state.groups.error;
