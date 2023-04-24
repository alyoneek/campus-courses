import { ICourseInGroupResponse } from "@/api/groups/types";
import CourseCard from "@components/CourseCard";
import { FC } from "react";

interface CoursesListProps {
  courses: ICourseInGroupResponse[];
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
