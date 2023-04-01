import RegisterForm from "@/components/forms/RegisterForm";
import AuthContent from "@/layouts/content/AuthContent";
import { FC } from "react";

const Registration: FC = () => {
  return (
    <AuthContent title="Регистрация нового пользователя">
      <RegisterForm />
    </AuthContent>
  );
};

export default Registration;
