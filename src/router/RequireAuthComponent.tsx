import { ReactNode } from "react";

import useAuth from "@/hooks/useAuth";
import { Roles } from "@/modules/account";

interface RequireAuthComponentProps {
  loggedOut?: boolean;
  allowedRoles?: Roles[];
  children: ReactNode;
}

const RequireAuthComponent = ({
  loggedOut = false,
  allowedRoles,
  children,
}: RequireAuthComponentProps) => {
  const { isLoggedIn, roles } = useAuth();

  const isRoleMatch =
    !allowedRoles || roles.find((role) => allowedRoles?.includes(role));

  const isAuthStatusMatch = loggedOut ? !isLoggedIn : !!isLoggedIn;

  if (isAuthStatusMatch && isRoleMatch) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default RequireAuthComponent;
