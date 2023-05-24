import { NamePath } from "antd/es/form/interface";
import { Dayjs } from "dayjs";
import { Rule } from "rc-field-form/lib/interface";

export const validateCourseDate = (_: Rule, value: Dayjs) => {
  if (!value) {
    return Promise.resolve();
  }

  const maxDate = new Date("2029");
  const choosenDate = new Date(value.format("YYYY"));
  const minDate = new Date("2000");

  if (choosenDate.getTime() < minDate.getTime()) {
    return Promise.reject(`Год должен быть не меньше ${minDate.getFullYear()}`);
  }

  if (choosenDate.getTime() > maxDate.getTime()) {
    return Promise.reject(`Год должен быть не больше ${maxDate.getFullYear()}`);
  }

  return Promise.resolve();
};

export const courseFormValidation = {
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
    {
      validator: validateCourseDate,
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

export const notificationFormValidation = {
  text: [
    {
      required: true,
      message: "Введите текст",
    },
  ],
};

export const teacherFormValidation = {
  userId: [
    {
      required: true,
      message: "Выберите преподавателя",
    },
  ],
};

export const courseStatusFormValidation = {
  status: [
    {
      required: true,
      message: "Выберите статус",
    },
    ({ getFieldValue }: { getFieldValue: (name: NamePath) => any }) => ({
      validator() {
        if (getFieldValue("status") === "Created") {
          return Promise.reject("Выберите статус");
        }
        return Promise.resolve();
      },
    }),
  ],
};

export const resultFormValidation = {
  mark: [
    {
      required: true,
      message: "Выберите оценку",
    },
    ({ getFieldValue }: { getFieldValue: (name: NamePath) => any }) => ({
      validator() {
        if (getFieldValue("mark") === "NotDefined") {
          return Promise.reject("Выберите оценку");
        }
        return Promise.resolve();
      },
    }),
  ],
};
