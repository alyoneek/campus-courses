import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as accountTypes from "./types";
import { IGropResponse } from "./types";

export const getGroups = (): AxiosPromise<IGropResponse[]> =>
  axiosInstance.get(Endpoints.GROUPS.ALL_GROUPS);

export const createGroup = (params: accountTypes.IGropRequest): AxiosPromise =>
  axiosInstance.post(Endpoints.GROUPS.ALL_GROUPS, params);

export const updateGroup = (
  groupId: string,
  params: accountTypes.IGropRequest
): AxiosPromise =>
  axiosInstance.put(Endpoints.GROUPS.GROUP_BY_ID(groupId), params);

export const deleteGroup = (groupId: string): AxiosPromise =>
  axiosInstance.delete(Endpoints.GROUPS.GROUP_BY_ID(groupId));
