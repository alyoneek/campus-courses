import ProfileForm from "@modules/account/components/Profile/ProfileForm";
import StudingCoursesList from "@modules/account/components/StudingCoursesList";
import TeachingCoursesList from "@modules/account/components/TeachingCoursesList";

import {
  getProfile,
  getRoles as getRolesAction,
  getStudingCourses,
  getTeachingCourses,
} from "@modules/account/store/accountActions";
import { getRoles as getRolesSelector } from "@modules/account/store/accountSelectors";
import { accountReducer } from "@modules/account/store/accountSlice";

import { Roles } from "@modules/account/constants/roles";

const accountActions = {
  getProfile,
  getStudingCourses,
  getTeachingCourses,
  getRoles: getRolesAction,
};

const accountSelectors = {
  getRoles: getRolesSelector,
};

export { ProfileForm, TeachingCoursesList, StudingCoursesList };
export { accountReducer, accountSelectors, accountActions };
export { Roles };
