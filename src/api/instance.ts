import Endpoints from "@/api/endpoints";
import { store } from "@/store";
import { accountActions } from "@/store/features/account/accountSlice";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const BASE_URL = "https://camp-courses.api.kreosoft.space";

const urlsSkipAuth = [Endpoints.ACCOUNT.LOGIN, Endpoints.ACCOUNT.SIGNUP];

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
      return config;
    }

    const token = store.getState().account.userToken;

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
    const isLoggedIn = !!store.getState().account.userToken;

    if (error.response?.status === 401) {
      if (isLoggedIn) {
        store.dispatch(accountActions.clearState());
      }
      error.message = "Необходима повторная авторизация";
      //   if (history.navigate) history.navigate("/login");
    }

    throw error;
  }
);
