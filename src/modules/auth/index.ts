import LoginForm from "@modules/auth/components/Login/LoginForm";
import RegisterForm from "@modules/auth/components/Register/RegisterForm";

import { logout } from "@/modules/auth/store/authActions";
import {
  authActions as actions,
  authReducer,
} from "@modules/auth/store/authSlice";

import authEndpoints from "@modules/auth/api/endpoints";

const authActions = {
  logout,
  clearState: actions.clearState,
};

export { authReducer, authActions };
export { RegisterForm, LoginForm };
export { authEndpoints };
