import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DataContent from "@/layouts/content/DataContent";
import {
  CourseExtendedInfo,
  CourseGeneralInfo,
  CoursePeopleInfo,
  courseActions,
  courseSelectors,
} from "@/modules/course";
import {
  getStudingCourses,
  getTeachingCourses,
} from "@/store/features/account/accountActions";

const Course = () => {
  const { idCourse } = useParams();
  const dispatch = useAppDispatch();
  const courseInfo = useAppSelector(courseSelectors.getCourseInfo);

  useEffect(() => {
    if (idCourse) dispatch(courseActions.getCourseDetails(idCourse));
    dispatch(getTeachingCourses());
    dispatch(getStudingCourses());
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
