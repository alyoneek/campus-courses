import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CourseSkeleton from "@/components/Skeletons/CourseSkeleton";
import DataContent from "@/layouts/content/DataContent";
import { accountActions } from "@/modules/account";
import {
  CourseExtendedInfo,
  CourseGeneralInfo,
  CoursePeopleInfo,
  courseActions,
  courseSelectors,
} from "@/modules/course";

const Course = () => {
  const { idCourse } = useParams();
  const dispatch = useAppDispatch();
  const courseInfo = useAppSelector(courseSelectors.getCourseInfo);
  const loading = useAppSelector((state) => state.loading.isDataFetching);

  useEffect(() => {
    if (idCourse) dispatch(courseActions.getCourseDetails(idCourse));
    dispatch(accountActions.getTeachingCourses());
    dispatch(accountActions.getStudingCourses());
  }, [dispatch, idCourse]);

  return (
    <DataContent title={courseInfo?.name}>
      {loading ? (
        <CourseSkeleton />
      ) : (
        <>
          <CourseGeneralInfo />
          <CourseExtendedInfo />
          <CoursePeopleInfo />
        </>
      )}
    </DataContent>
  );
};

export default Course;
