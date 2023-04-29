import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as coursesTypes from "./types";

export const getCourseDetails = (
  idCourse: string
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.get(Endpoints.COURSES.COURSE_BY_ID(idCourse));

export const changeCourseStatus = (
  idCourse: string,
  data: coursesTypes.IStatusRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(Endpoints.COURSES.STATUS(idCourse), data);

export const addTeacherToCourse = (
  idCourse: string,
  data: coursesTypes.ITeacherRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(Endpoints.COURSES.TEACHERS(idCourse), data);

export const addNotificationToCourse = (
  idCourse: string,
  data: coursesTypes.INotificationRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(Endpoints.COURSES.NOTIFICATIONS(idCourse), data);
