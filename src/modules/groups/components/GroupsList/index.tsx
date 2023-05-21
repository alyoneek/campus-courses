import { FC } from "react";

import List from "@/components/List";
import { getGroups } from "@/modules/groups/store/groupsSelectors";
import { useAppSelector } from "@/store";
import GroupCard from "./components/GroupCard";

const GroupsList: FC = () => {
  const groups = useAppSelector(getGroups);

  return (
    <List
      data={groups}
      renderItem={(group) => <GroupCard key={group.id} groupInfo={group} />}
    />
  );
};

export default GroupsList;
