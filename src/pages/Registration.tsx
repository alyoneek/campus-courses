import AuthContent from "@/layouts/content/AuthContent";
import { RegisterForm } from "@/modules/auth";
import { FC } from "react";

const Registration: FC = () => {
  return (
    <AuthContent title="Регистрация нового пользователя">
      <RegisterForm />
    </AuthContent>
  );
};

export default Registration;
