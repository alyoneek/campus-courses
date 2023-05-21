import { validateBirthDate } from "@/helpers/validation";

export const profileFormValidation = {
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
};
