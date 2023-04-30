import { AxiosPromise } from "axios";

import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import * as authTypes from "./types";

export const signup = (
  data: authTypes.ISignupRequest
): AxiosPromise<authTypes.ISignupResponse> =>
  axiosInstance.post(Endpoints.AUTH.SIGNUP, data);

export const login = (
  data: authTypes.ILoginRequest
): AxiosPromise<authTypes.ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, data);

export const logout = (): AxiosPromise =>
  axiosInstance.post(Endpoints.AUTH.LOGOUT);
