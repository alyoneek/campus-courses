import { IRolesResponse } from "@/modules/account/api/types";
import { Roles } from "@/modules/account/constants/roles";
import { IRole } from "@/modules/account/types";

export const convertRolesResponeToArray = (response: IRolesResponse) => {
  const roles: IRole[] = [];

  for (const key in response) {
    if (response[key]) {
      roles.push(Roles[key] as IRole);
    }
  }
  return roles;
};
