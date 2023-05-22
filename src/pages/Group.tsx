import { useParams } from "react-router-dom";

import DataContent from "@/layouts/content/DataContent";
import { Roles } from "@/modules/account";
import { CreateCourseButton } from "@/modules/course";
import {
  CoursesInGroupList,
  groupsActions,
  groupsSelectors,
} from "@/modules/groups";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import NotFound from "./NotFound";

const Group = () => {
  const dispatch = useAppDispatch();
  const { idGroup } = useParams();
  const groups = useAppSelector(groupsSelectors.getGroups);
  const error = useAppSelector(groupsSelectors.getGroupError);
  const loading = useAppSelector((state) => state.loading.getData.getCourses);
  const groupName = history.location?.state?.groupName;

  useEffect(() => {
    if (idGroup) dispatch(groupsActions.getCourses(idGroup));
  }, [dispatch]);

  useEffect(() => {
    if (!groupName) {
      dispatch(groupsActions.getGroups());
    }
  }, [groupName, dispatch]);

  const getGroupName = () => {
    if (loading) {
      return "";
    }
    return groupName ?? groups.find((group) => group.id == idGroup)?.name;
  };

  if (!!error) return <NotFound />;

  return (
    <DataContent title={`Группа ${getGroupName()}`}>
      <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
        <CreateCourseButton idGroup={idGroup as string} />
      </RequireAuthComponent>
      <CoursesInGroupList />
    </DataContent>
  );
};

export default Group;
