import { useEffect } from "react";

import CoursesList from "@/components/CoursesList";
import DataContent from "@/layouts/content/DataContent";
import { useAppDispatch, useAppSelector } from "@/store";
import { getTeachingCourses } from "@/store/features/account/accountActions";

const TeachingCourses = () => {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.account.teachingCourses);

  useEffect(() => {
    dispatch(getTeachingCourses());
  }, [dispatch]);

  return (
    <DataContent title="Преподаваемые курсы">
      <CoursesList courses={courses} />
    </DataContent>
  );
};

export default TeachingCourses;
