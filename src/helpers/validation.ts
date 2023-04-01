import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import { Dayjs } from "dayjs";

type getFieldValueType = {
  getFieldValue: (name: NamePath) => any;
};

const validateDate = (_: Rule, value: Dayjs) => {
  if (!value) {
    return Promise.resolve();
  }

  const maxDate = new Date();
  const choosenDate = new Date(value.format("YYYY-MM-DD"));
  const minDate = new Date("1900-01-01");

  if (choosenDate.getTime() < minDate.getTime()) {
    return Promise.reject(
      new Error(
        `Дата должна быть не меньше ${minDate.toLocaleDateString("en-US")}`
      )
    );
  }

  if (choosenDate.getTime() > maxDate.getTime()) {
    return Promise.reject(
      new Error(
        `Дата должна быть не больше ${maxDate.toLocaleDateString("en-US")}`
      )
    );
  }

  return Promise.resolve();
};

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
      validator: validateDate,
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
        return Promise.reject(new Error("Пароли не совпадают"));
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
      validator: validateDate,
    },
  ],
};

export const createGroupFormValidation = {
  name: [
    {
      required: true,
      message: "Введите название группы",
    },
  ],
};

export const editGroupFormValidation = createGroupFormValidation;

export const createCourseFormValidation = {
  name: [
    {
      required: true,
      message: "Введите название курса",
    },
  ],
  startYear: [
    {
      required: true,
      message: "Введите год начала курса",
    },
  ],
  maximumStudentsCount: [
    {
      required: true,
      message: "Введите количество мест",
    },
  ],
  semester: [
    {
      required: true,
      message: "Выберите семестр",
    },
  ],
  mainTeacherId: [
    {
      required: true,
      message: "Выберите основного преподавателя",
    },
  ],
  requirements: [
    {
      required: true,
      message: "Введите требования",
    },
  ],
  annotations: [
    {
      required: true,
      message: "Введите аннотации",
    },
  ],
};
