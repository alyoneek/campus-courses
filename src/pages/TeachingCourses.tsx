import { useEffect } from "react";

import DataContent from "@/layouts/content/DataContent";
import { TeachingCoursesList, accountActions } from "@/modules/account";
import { useAppDispatch } from "@/store";

const TeachingCourses = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(accountActions.getTeachingCourses());
  }, [dispatch]);

  return (
    <DataContent title="Преподаваемые курсы">
      <TeachingCoursesList />
    </DataContent>
  );
};

export default TeachingCourses;
