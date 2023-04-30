import { ICourseShortResponse } from "@/api/courses/types";
import CourseCard from "@components/CourseCard";
import { FC } from "react";

interface CoursesListProps {
  courses: ICourseShortResponse[];
}

const CoursesList: FC<CoursesListProps> = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} courseInfo={course} />
      ))}
    </>
  );
};

export default CoursesList;
