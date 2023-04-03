import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as accountTypes from "./types";

export const getGroups = (): AxiosPromise<accountTypes.IGropResponse[]> =>
  axiosInstance.get(Endpoints.GROUPS.ALL_GROUPS);

export const createGroup = (
  params: accountTypes.IGropRequest
): AxiosPromise<accountTypes.IGropResponse> =>
  axiosInstance.post(Endpoints.GROUPS.ALL_GROUPS, params);

export const updateGroup = (
  idGroup: string,
  params: accountTypes.IGropRequest
): AxiosPromise<accountTypes.IGropResponse> =>
  axiosInstance.put(Endpoints.GROUPS.GROUP_BY_ID(idGroup), params);

export const deleteGroup = (idGroup: string): AxiosPromise =>
  axiosInstance.delete(Endpoints.GROUPS.GROUP_BY_ID(idGroup));

export const getCoursesInGroup = (
  idGroup: string
): AxiosPromise<accountTypes.ICourseInGroupResponse[]> =>
  axiosInstance.get(Endpoints.GROUPS.GROUP_BY_ID(idGroup));
