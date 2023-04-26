import Endpoints from "@/api/endpoints";
import { axiosInstance } from "@/api/instance";
import { AxiosPromise } from "axios";
import * as coursesTypes from "./types";

export const getCourseDetails = (
  idCourse: string
): AxiosPromise<coursesTypes.ICourseResponse> =>
  axiosInstance.get(Endpoints.COURSES.COURSE_BY_ID(idCourse));
