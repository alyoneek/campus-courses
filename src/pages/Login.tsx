import AuthContent from "@/layouts/content/AuthContent";
import { LoginForm } from "@/modules/auth";

const Login = () => {
  return (
    <AuthContent title="Авторизация">
      <LoginForm />
    </AuthContent>
  );
};

export default Login;
