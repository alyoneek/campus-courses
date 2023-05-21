import CreateGroupButton from "@modules/groups/components/CreateGroup/CreateGroupButton";
import GroupsList from "@modules/groups/components/GroupsList";

import { getGroups as getGroupsAction } from "@modules/groups/store/groupsActions";
import { getGroups as getGroupsSelector } from "@modules/groups/store/groupsSelectors";
import { groupsReducer } from "@modules/groups/store/groupsSlice";

const groupsSelectors = {
  getGroups: getGroupsSelector,
};

const groupsActions = {
  getGroups: getGroupsAction,
};

export { CreateGroupButton, GroupsList };
export { groupsSelectors, groupsActions, groupsReducer };
