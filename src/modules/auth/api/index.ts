import { AxiosPromise } from "axios";

import { axiosInstance } from "@/api/instance";
import endpoints from "./endpoints";
import * as authTypes from "./types";

export const signup = (
  data: authTypes.ISignupRequest
): AxiosPromise<authTypes.ISignupResponse> =>
  axiosInstance.post(endpoints.SIGNUP, data);

export const login = (
  data: authTypes.ILoginRequest
): AxiosPromise<authTypes.ILoginResponse> =>
  axiosInstance.post(endpoints.LOGIN, data);

export const logout = (): AxiosPromise => axiosInstance.post(endpoints.LOGOUT);
