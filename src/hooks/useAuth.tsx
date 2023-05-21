import { accountSelectors } from "@/modules/account";
import { useAppSelector } from "@/store";

const useAuth = () => {
  const { token, email } = useAppSelector((state) => state.auth);
  const roles = useAppSelector(accountSelectors.getRoles);

  return {
    isLoggedIn: !!token,
    roles,
    token,
    email,
  };
};

export default useAuth;
