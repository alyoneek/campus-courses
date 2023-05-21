import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FC } from "react";

import { getGroups } from "@/modules/groups/store/groupsSelectors";
import { useAppSelector } from "@/store";
import GroupCard from "./components/GroupCard";

const GroupsList: FC = () => {
  const [parent] = useAutoAnimate();
  const groups = useAppSelector(getGroups);

  return (
    <>
      <div ref={parent}>
        {groups.map((group) => (
          <GroupCard key={group.id} groupInfo={group} />
        ))}
      </div>
    </>
  );
};

export default GroupsList;
