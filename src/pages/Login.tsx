import LoginForm from "@/components/forms/LoginForm";
import AuthContent from "@/layouts/content/AuthContent";

const Login = () => {
  return (
    <AuthContent title="Авторизация">
      <LoginForm />
    </AuthContent>
  );
};

export default Login;
