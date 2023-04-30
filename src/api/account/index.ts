import { AxiosPromise } from "axios";

import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { ICourseShortResponse } from "../courses/types";
import * as accountTypes from "./types";

export const getRoles = (): AxiosPromise<accountTypes.IRolesResponse> =>
  axiosInstance.get(Endpoints.ACCOUNT.ROLES);

export const getProfile = (): AxiosPromise<accountTypes.IProfileResponse> =>
  axiosInstance.get(Endpoints.ACCOUNT.PROFILE);

export const editProfile = (
  data: accountTypes.IProfileEditRequest
): AxiosPromise<accountTypes.IProfileResponse> =>
  axiosInstance.put(Endpoints.ACCOUNT.PROFILE, data);

export const getStudingCourses = (): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.get(Endpoints.ACCOUNT.STUDING_COURSES);

export const getTeachingCourses = (): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.get(Endpoints.ACCOUNT.TEACHING_COURSES);
