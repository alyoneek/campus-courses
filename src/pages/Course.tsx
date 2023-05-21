import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    if (idCourse) dispatch(courseActions.getCourseDetails(idCourse));
    //TODO
    dispatch(accountActions.getTeachingCourses());
    dispatch(accountActions.getStudingCourses());
  }, [dispatch, idCourse]);

  return (
    <DataContent title={courseInfo?.name}>
      <CourseGeneralInfo />
      <CourseExtendedInfo />
      <CoursePeopleInfo />
    </DataContent>
  );
};

export default Course;
