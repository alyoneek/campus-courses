import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as usersTypes from "./types";

export const getUsers = (): AxiosPromise<usersTypes.IUserResponse[]> =>
  axiosInstance.get(Endpoints.USERS.ALL_USERS);
