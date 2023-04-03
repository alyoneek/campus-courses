import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as accountTypes from "./types";

export const signup = (
  params: accountTypes.ISignupRequest
): AxiosPromise<accountTypes.ISignupResponse> =>
  axiosInstance.post(Endpoints.ACCOUNT.SIGNUP, params);

export const login = (
  params: accountTypes.ILoginRequest
): AxiosPromise<accountTypes.ILoginResponse> =>
  axiosInstance.post(Endpoints.ACCOUNT.LOGIN, params);

export const logout = (): AxiosPromise =>
  axiosInstance.post(Endpoints.ACCOUNT.LOGOUT);

export const getRoles = (): AxiosPromise<accountTypes.IRolesResponse> =>
  axiosInstance.get(Endpoints.ACCOUNT.ROLES);

export const getProfile = (): AxiosPromise<accountTypes.IProfileResponse> =>
  axiosInstance.get(Endpoints.ACCOUNT.PROFILE);

export const editProfile = (
  params: accountTypes.IProfileEditRequest
): AxiosPromise => axiosInstance.put(Endpoints.ACCOUNT.PROFILE, params);
