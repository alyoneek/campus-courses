import { useEffect } from "react";

import DataContent from "@/layouts/content/DataContent";
import { StudingCoursesList, accountActions } from "@/modules/account";
import { useAppDispatch } from "@/store";

const OwnCourses = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(accountActions.getStudingCourses());
  }, [dispatch]);

  return (
    <DataContent title="Мои курсы">
      <StudingCoursesList />
    </DataContent>
  );
};

export default OwnCourses;
