import { getFieldValueType, validateBirthDate } from "@/helpers/validation";
import { Rule } from "antd/es/form";

export const registerFormValidation = {
  fullName: [
    {
      required: true,
      message: "Введите ФИО",
    },
  ],
  birthDate: [
    {
      required: true,
      message: "Введите дату рождения",
    },
    {
      validator: validateBirthDate,
    },
  ],
  email: [
    {
      required: true,
      message: "Введите email",
    },
    {
      type: "email",
      message: "Введите корректный email",
    },
  ] as Rule[],
  password: [
    {
      required: true,
      message: "Введите пароль",
    },
    {
      min: 6,
      message: "Минимальная длина - 6",
    },
    {
      max: 32,
      message: "Максимальная длина - 32",
    },
    {
      pattern: /.*[0-9].*/,
      message: "Пароль должен содержать хотя бы одну цифру",
    },
  ],
  confirm: [
    {
      required: true,
      message: "Подтвердите пароль",
    },
    ({ getFieldValue }: getFieldValueType) => ({
      validator(_: Rule, value: string) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject("Пароли не совпадают");
      },
    }),
  ],
};

export const loginFormValidation = {
  email: [
    {
      required: true,
      message: "Введите email",
    },
    {
      type: "email",
      message: "Введите корректный email",
    },
  ] as Rule[],
  password: [
    {
      required: true,
      message: "Введите пароль",
    },
  ],
};
