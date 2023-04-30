import { useEffect } from "react";

import CoursesList from "@/components/CoursesList";
import DataContent from "@/layouts/content/DataContent";
import { useAppDispatch, useAppSelector } from "@/store";
import { getStudingCourses } from "@/store/features/account/accountActions";

const OwnCourses = () => {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.account.studingCourses);

  useEffect(() => {
    dispatch(getStudingCourses());
  }, [dispatch]);

  return (
    <DataContent title="Мои курсы">
      <CoursesList courses={courses} />
    </DataContent>
  );
};

export default OwnCourses;
