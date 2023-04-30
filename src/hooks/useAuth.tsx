import { useAppSelector } from "@/store";

const useAuth = () => {
  const token = useAppSelector((state) => state.auth.token);
  const roles = useAppSelector((state) => state.account.roles);

  return {
    isLoggedIn: !!token,
    roles,
    token,
  };
};

export default useAuth;
