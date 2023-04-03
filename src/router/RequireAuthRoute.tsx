import useAuth from "@/hooks/useAuth";
import Unauthorized from "@/pages/Unauthorized";
import { Roles } from "@/store/features/account/accountSlice";
import { Navigate, Outlet } from "react-router-dom";

interface RequireAuthRouteProps {
  allowedRoles?: Roles[];
}

const RequireAuthRoute = ({ allowedRoles }: RequireAuthRouteProps) => {
  const { isLoggedIn, roles } = useAuth();

  const isRoleMatch =
    !allowedRoles || roles?.find((role) => allowedRoles?.includes(role));

  if (isLoggedIn) {
    return <>{isRoleMatch ? <Outlet /> : <Unauthorized />}</>;
  } else {
    return <Navigate to="/login" />;
  }
  {
    /* {isLoggedIn ? (
        !allowedRoles || roles?.find((role) => allowedRoles?.includes(role)) ? (
          <Outlet />
        ) : (
          <Unauthorized />
        )
      ) : (
        <Navigate to="/login" />
      )} */
  }
};

export default RequireAuthRoute;
