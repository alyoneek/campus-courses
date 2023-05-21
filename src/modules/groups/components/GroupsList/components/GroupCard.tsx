import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { IGropResponse } from "@/modules/groups/api/types";
import DeleteGroupButton from "@/modules/groups/components/DeleteGroup/DeleteGroupButton";
import EditGroupButton from "@/modules/groups/components/EditGroup/EditGroupButton";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { Roles } from "@/store/features/account/accountSlice";

interface GroupCardProps {
  groupInfo: IGropResponse;
}

const GroupCard: FC<GroupCardProps> = ({ groupInfo }) => {
  return (
    <Card className="mt-2">
      <div key={groupInfo.id} className="flex justify-between items-center">
        <Link
          to={`/groups/${groupInfo.id}`}
          className="text-base"
          state={{ groupName: groupInfo.name }}
        >
          {groupInfo.name}
        </Link>

        <div className="flex gap-4">
          <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
            <EditGroupButton groupInfo={groupInfo} />
          </RequireAuthComponent>

          <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
            <DeleteGroupButton idGroup={groupInfo.id} />
          </RequireAuthComponent>
        </div>
      </div>
    </Card>
  );
};

export default GroupCard;
