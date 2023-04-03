import { IGropResponse } from "@/api/groups/types";
import GroupCard from "@/components/GroupCard";
import { FC } from "react";

interface GroupsListProps {
  groups: IGropResponse[];
  onEditGroup: (idGroup: string) => void;
}

const GroupsList: FC<GroupsListProps> = ({ groups, onEditGroup }) => {
  return (
    <>
      {groups.map((group) => (
        <GroupCard key={group.id} groupInfo={group} onEdit={onEditGroup} />
      ))}
    </>
  );
};

export default GroupsList;
