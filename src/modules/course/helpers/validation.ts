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
