import useAuth from "@/hooks/useAuth";
import { Roles } from "@/modules/account";
import Unauthorized from "@/pages/Unauthorized";
import { Navigate, Outlet } from "react-router-dom";

interface RequireAuthRouteProps {
  allowedRoles?: Roles[];
}

const RequireAuthRoute = ({ allowedRoles }: RequireAuthRouteProps) => {
  const { isLoggedIn, roles } = useAuth();

  const isRoleMatch =
    !allowedRoles || roles.find((role) => allowedRoles?.includes(role));

  if (isLoggedIn) {
    return <>{isRoleMatch ? <Outlet /> : <Unauthorized />}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuthRoute;
