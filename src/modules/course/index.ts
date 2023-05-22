import CourseExtendedInfo from "@modules/course/components/CourseExtendedInfo";
import CourseGeneralInfo from "@modules/course/components/CourseGeneralInfo";
import CoursePeopleInfo from "@modules/course/components/CoursePeopleInfo";
import CreateCourseButton from "@modules/course/components/CreateCourse/CreateCourseButton";

import { getCourseDetails } from "@modules/course/store/courseActions";
import {
  getCourseError,
  getCourseInfo,
} from "@modules/course/store/courseSelectors";
import { coursesReducer } from "@modules/course/store/courseSlice";

import {
  ICourseRequest,
  ICourseShortResponse,
} from "@modules/course/api/types";

const courseActions = {
  getCourseDetails,
};

const courseSelectors = {
  getCourseInfo,
  getCourseError,
};

export {
  CourseGeneralInfo,
  CourseExtendedInfo,
  CoursePeopleInfo,
  CreateCourseButton,
};
export { coursesReducer, courseActions, courseSelectors };
export type { ICourseRequest, ICourseShortResponse };
