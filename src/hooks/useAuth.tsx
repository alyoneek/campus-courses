import { useAppSelector } from "@/store";

const useAuth = () => {
  const token = useAppSelector((state) => state.account.userToken);
  const roles = useAppSelector((state) => state.account.userRoles);

  return {
    isLoggedIn: !!token,
    roles,
    token,
  };
};

export default useAuth;
