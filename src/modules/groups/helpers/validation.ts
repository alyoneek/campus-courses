export const createGroupFormValidation = {
  name: [
    {
      required: true,
      message: "Введите название группы",
    },
  ],
};

export const editGroupFormValidation = createGroupFormValidation;
