import useAuth from "@/hooks/useAuth";
import Unauthorized from "@/pages/Unauthorized";
import { Roles } from "@/store/features/account/accountSlice";
import { Navigate, Outlet } from "react-router-dom";

interface RequireAuthProps {
  allowedRoles?: Roles[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { isLoggedIn, roles } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        !allowedRoles || roles?.find((role) => allowedRoles?.includes(role)) ? (
          <Outlet />
        ) : (
          <Unauthorized />
        )
      ) : (
        <Navigate to="/login" />
      )}
      {/* {!allowedRoles && isLoggedIn || roles?.find((role) => {
        allowedRoles?.includes(role);
      }) ? (
        <Outlet />
      ) : isLoggedIn ? (
        <Navigate
          to="/unauthorized"
          state={{ from: history.location }}
          replace
        />
      ) : (
        <Navigate to="/login" state={{ from: history.location }} replace />
      )} */}
    </>
  );
};

export default RequireAuth;
