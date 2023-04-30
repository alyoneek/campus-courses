import Endpoints from "@/api/endpoints";
import { store } from "@/store";
import { authActions } from "@/store/features/auth/authSlice";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const BASE_URL = "https://camp-courses.api.kreosoft.space";

const urlsSkipAuth = [Endpoints.AUTH.LOGIN, Endpoints.AUTH.SIGNUP];

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
