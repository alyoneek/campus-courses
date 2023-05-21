import { authActions, authEndpoints } from "@/modules/auth";
import { store } from "@/store";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const BASE_URL = "https://camp-courses.api.kreosoft.space";

const urlsSkipAuth = [authEndpoints.LOGIN, authEndpoints.SIGNUP];

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
      return config;
    }

    const token = store.getState().auth.token;

    if (token) {
      const autharization = `Bearer ${token}`;

      config.headers = {
        ...config.headers,
        authorization: autharization,
      };
    }

    return config;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isLoggedIn = !!store.getState().auth.token;

    if (error.response?.status === 401) {
      if (isLoggedIn) {
        store.dispatch(authActions.clearState());
      }
      error.message = "Необходима повторная авторизация";
    }

    throw error;
  }
);
