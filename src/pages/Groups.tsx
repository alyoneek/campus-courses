import { useEffect } from "react";

import DataContent from "@/layouts/content/DataContent";
import { CreateGroupButton, GroupsList, groupsActions } from "@/modules/groups";
import { useAppDispatch } from "@/store";

const Groups = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(groupsActions.getGroups());
  }, [dispatch]);

  return (
    <DataContent title="Группы кампусных курсов">
      <CreateGroupButton />
      <GroupsList />
    </DataContent>
  );
};

export default Groups;
