import { useAppSelector } from "@/store";

const useAuth = () => {
  const { token, email } = useAppSelector((state) => state.auth);
  const roles = useAppSelector((state) => state.account.roles);

  return {
    isLoggedIn: !!token,
    roles,
    token,
    email,
  };
};

export default useAuth;
