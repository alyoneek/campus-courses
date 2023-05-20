import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FC } from "react";

import { IGropResponse } from "@/api/groups/types";
import GroupCard from "@/components/GroupCard";

interface GroupsListProps {
  groups: IGropResponse[];
  onEditGroup: (idGroup: string) => void;
}

const GroupsList: FC<GroupsListProps> = ({ groups, onEditGroup }) => {
  const [parent] = useAutoAnimate();

  return (
    <>
      <div ref={parent}>
        {groups.map((group) => (
          <GroupCard key={group.id} groupInfo={group} onEdit={onEditGroup} />
        ))}
      </div>
    </>
  );
};

export default GroupsList;
