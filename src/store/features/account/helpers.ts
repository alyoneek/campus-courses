import { IRolesResponse } from "@/api/account/types";
import { Roles } from "./accountSlice";

export const convertRolesResponeToArray = (response: IRolesResponse) => {
  const roles = [];

  for (const key in response) {
    if (response[key]) {
      roles.push(Roles[key]);
    }
  }
  return roles;
};

export const getToken = () => localStorage.getItem("userToken");
export const resetToken = () => localStorage.removeItem("userToken");
export const setToken = (token: string) =>
  localStorage.setItem("userToken", token);
