import { AxiosPromise } from "axios";

import { axiosInstance } from "@/api/instance";
import endpoints from "./endpoints";
import * as coursesTypes from "./types";

export const deleteCourse = (idCourse: string): AxiosPromise =>
  axiosInstance.delete(endpoints.COURSE_BY_ID(idCourse));

export const editCourse = (
  idCourse: string,
  data: coursesTypes.ICourseShortRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.put(endpoints.COURSE_BY_ID(idCourse), data);

export const getCourseDetails = (
  idCourse: string
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.get(endpoints.DETAILS(idCourse));

export const changeCourseStatus = (
  idCourse: string,
  data: coursesTypes.ICourseStatusRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(endpoints.STATUS(idCourse), data);

export const addTeacherToCourse = (
  idCourse: string,
  data: coursesTypes.ITeacherRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(endpoints.TEACHERS(idCourse), data);

export const addNotificationToCourse = (
  idCourse: string,
  data: coursesTypes.INotificationRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(endpoints.NOTIFICATIONS(idCourse), data);

export const changeStudentStatus = (
  idCourse: string,
  idStudent: string,
  data: coursesTypes.IStudentStatusRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(endpoints.STUDENT_STATUS(idCourse, idStudent), data);

export const changeStudentMark = (
  idCourse: string,
  idStudent: string,
  data: coursesTypes.IStudentMarkRequest
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.post(endpoints.STUDENT_MARK(idCourse, idStudent), data);

export const signUpForCourse = (idCourse: string): AxiosPromise =>
  axiosInstance.post(endpoints.SIGN_UP(idCourse));
