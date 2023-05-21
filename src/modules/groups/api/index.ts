import { AxiosPromise } from "axios";

import { axiosInstance } from "@/api/instance";
import { ICourseRequest, ICourseShortResponse } from "@/modules/course";
import endpoints from "./endpoints";
import * as groupsTypes from "./types";

export const getGroups = (): AxiosPromise<groupsTypes.IGropResponse[]> =>
  axiosInstance.get(endpoints.ALL_GROUPS);

export const createGroup = (
  data: groupsTypes.IGropRequest
): AxiosPromise<groupsTypes.IGropResponse> =>
  axiosInstance.post(endpoints.ALL_GROUPS, data);

export const updateGroup = (
  idGroup: string,
  data: groupsTypes.IGropRequest
): AxiosPromise<groupsTypes.IGropResponse> =>
  axiosInstance.put(endpoints.GROUP_BY_ID(idGroup), data);

export const deleteGroup = (idGroup: string): AxiosPromise =>
  axiosInstance.delete(endpoints.GROUP_BY_ID(idGroup));

export const getCoursesInGroup = (
  idGroup: string
): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.get(endpoints.GROUP_BY_ID(idGroup));

export const createCourseInGroup = (
  idGroup: string,
  data: ICourseRequest
): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.post(endpoints.COURSES_IN_GROUP(idGroup), data);
