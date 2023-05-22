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
import NotFound from "./NotFound";

const Course = () => {
  const dispatch = useAppDispatch();
  const { idCourse } = useParams();
  const courseInfo = useAppSelector(courseSelectors.getCourseInfo);
  const loading = useAppSelector(
    (state) => state.loading.getData.getCourseDetails
  );
  const error = useAppSelector(courseSelectors.getCourseError);

  useEffect(() => {
    if (idCourse) dispatch(courseActions.getCourseDetails(idCourse));
    dispatch(accountActions.getTeachingCourses());
    dispatch(accountActions.getStudingCourses());
  }, []);

  if (!!error) return <NotFound />;

  return (
    <DataContent title={loading ? "" : courseInfo.name}>
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
