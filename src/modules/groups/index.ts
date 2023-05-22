import CoursesInGroupList from "@modules/groups/components/CoursesInGroupList";
import CreateGroupButton from "@modules/groups/components/CreateGroup/CreateGroupButton";
import GroupsList from "@modules/groups/components/GroupsList";

import {
  getCourses,
  getGroups as getGroupsAction,
} from "@modules/groups/store/groupsActions";
import {
  getGroupError,
  getGroups as getGroupsSelector,
} from "@modules/groups/store/groupsSelectors";
import {
  groupsActions as actions,
  groupsReducer,
} from "@modules/groups/store/groupsSlice";

const groupsSelectors = {
  getGroups: getGroupsSelector,
  getGroupError,
};

const groupsActions = {
  getGroups: getGroupsAction,
  addCourse: actions.addCourse,
  getCourses,
};

export { CreateGroupButton, GroupsList, CoursesInGroupList };
export { groupsSelectors, groupsActions, groupsReducer };
