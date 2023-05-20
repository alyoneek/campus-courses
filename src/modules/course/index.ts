import CourseExtendedInfo from "@modules/course/components/CourseExtendedInfo";
import CourseGeneralInfo from "@modules/course/components/CourseGeneralInfo";
import CoursePeopleInfo from "@modules/course/components/CoursePeopleInfo";

import { getCourseDetails } from "@modules/course/store/courseActions";
import { getCourseInfo } from "@modules/course/store/courseSelectors";
import { coursesReducer } from "@modules/course/store/courseSlice";

const courseActions = {
  getCourseDetails,
};

const courseSelectors = {
  getCourseInfo,
};

export { CourseGeneralInfo, CourseExtendedInfo, CoursePeopleInfo };
export { coursesReducer, courseActions, courseSelectors };
