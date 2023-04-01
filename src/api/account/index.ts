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

// export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT)

// export const getProfile = (): AxiosPromise<string> => axiosInstance.get(Endpoints.AUTH.PROFILE)
