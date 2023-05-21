import { AxiosPromise } from "axios";

import { axiosInstance } from "@/api/instance";
import { ICourseShortResponse } from "@modules/course/api/types";
import endpoints from "./endpoints";
import * as accountTypes from "./types";

export const getRoles = (): AxiosPromise<accountTypes.IRolesResponse> =>
  axiosInstance.get(endpoints.ROLES);

export const getProfile = (): AxiosPromise<accountTypes.IProfileResponse> =>
  axiosInstance.get(endpoints.PROFILE);

export const editProfile = (
  data: accountTypes.IProfileEditRequest
): AxiosPromise<accountTypes.IProfileResponse> =>
  axiosInstance.put(endpoints.PROFILE, data);

export const getStudingCourses = (): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.get(endpoints.STUDING_COURSES);

export const getTeachingCourses = (): AxiosPromise<ICourseShortResponse[]> =>
  axiosInstance.get(endpoints.TEACHING_COURSES);
