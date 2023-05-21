import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DataContent from "@/layouts/content/DataContent";
import { Roles } from "@/modules/account";
import { CreateCourseButton } from "@/modules/course";
import { CoursesInGroupList } from "@/modules/groups";
import { getCourses } from "@/modules/groups/store/groupsActions";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { history } from "@/router/history";
import { useAppDispatch } from "@/store";

const Group = () => {
  const { idGroup } = useParams();
  const groupName = history.location?.state?.groupName;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idGroup) dispatch(getCourses(idGroup));
  }, [dispatch, idGroup]);

  return (
    <DataContent title={`Группа - ${groupName}`}>
      <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
        <CreateCourseButton idGroup={idGroup as string} />
      </RequireAuthComponent>
      <CoursesInGroupList />
    </DataContent>
  );
};

export default Group;
