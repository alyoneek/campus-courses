import { AxiosPromise } from "axios";

import { axiosInstance } from "@/api/instance";
import endpoints from "./endpoints";
import * as usersTypes from "./types";

export const getUsers = (): AxiosPromise<usersTypes.IUserResponse[]> =>
  axiosInstance.get(endpoints.ALL_USERS);
