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
