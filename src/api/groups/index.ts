import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as groupsTypes from "./types";

export const getGroups = (): AxiosPromise<groupsTypes.IGropResponse[]> =>
  axiosInstance.get(Endpoints.GROUPS.ALL_GROUPS);

export const createGroup = (
  data: groupsTypes.IGropRequest
): AxiosPromise<groupsTypes.IGropResponse> =>
  axiosInstance.post(Endpoints.GROUPS.ALL_GROUPS, data);

export const updateGroup = (
  idGroup: string,
  data: groupsTypes.IGropRequest
): AxiosPromise<groupsTypes.IGropResponse> =>
  axiosInstance.put(Endpoints.GROUPS.GROUP_BY_ID(idGroup), data);

export const deleteGroup = (idGroup: string): AxiosPromise =>
  axiosInstance.delete(Endpoints.GROUPS.GROUP_BY_ID(idGroup));

export const getCoursesInGroup = (
  idGroup: string
): AxiosPromise<groupsTypes.ICourseInGroupResponse[]> =>
  axiosInstance.get(Endpoints.GROUPS.GROUP_BY_ID(idGroup));

export const createCourseInGroup = (
  idGroup: string,
  data: groupsTypes.ICourseInGroupRequest
): AxiosPromise<groupsTypes.ICourseInGroupResponse[]> =>
  axiosInstance.post(Endpoints.GROUPS.COURSE_IN_GROUP(idGroup), data);
