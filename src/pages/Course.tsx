import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ExtendedInfo from "@/components/Course/ExtendedInfo";
import GeneralInfo from "@/components/Course/GeneralInfo";
import PeopleInfo from "@/components/Course/PeopleInfo";
import DataContent from "@/layouts/content/DataContent";
import { getCourseDetails } from "@/store/features/courses/courseActions";

const Course = () => {
  const { idCourse } = useParams();
  const dispatch = useAppDispatch();
  const courseInfo = useAppSelector((state) => state.courses.courseInfo);

  useEffect(() => {
    if (idCourse) dispatch(getCourseDetails(idCourse));
  }, [dispatch, idCourse]);

  return (
    <DataContent title={courseInfo?.name}>
      <GeneralInfo />
      <ExtendedInfo />
      <PeopleInfo />
    </DataContent>
  );
};

export default Course;
