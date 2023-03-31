import CourseCard from "@components/CourseCard";
import { FC } from "react";

const courses = [
  "Искусственный интеллект",
  "Основы сетевого анализа",
  "Основы машинного обучения",
];

const CoursesList: FC = () => {
  return (
    <>
      {courses.map((course, i) => (
        <CourseCard key={i} title={course} />
      ))}
    </>
  );
};

export default CoursesList;
