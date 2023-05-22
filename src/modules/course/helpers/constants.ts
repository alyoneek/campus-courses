export enum Semesters {
  Autumn = "Осенний",
  Spring = "Весенний",
}

export enum CourseStatuses {
  Created = "Создан",
  OpenForAssigning = "Открыт для записи",
  Started = "В процессе обучения",
  Finished = "Закрыт",
}

export enum StudentStatuses {
  InQueue = "в очереди",
  Accepted = "принят в группу",
  Declined = "отклонен",
}

export enum StudentMarks {
  NotDefined = "отметки нет",
  Passed = "успешно пройдена",
  Failed = "зафейлена",
}

export const courseStatusColors = {
  Created: "grey",
  OpenForAssigning: "green",
  Started: "blue",
  Finished: "red",
};

export const studentStatusColors = {
  InQueue: "blue",
  Accepted: "green",
  Declined: "red",
};

export const marksColors = {
  NotDefined: "grey",
  Passed: "green",
  Failed: "red",
};
