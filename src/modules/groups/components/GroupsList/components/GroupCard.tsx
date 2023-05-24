import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { Roles } from "@/modules/account";
import { IGropResponse } from "@/modules/groups/api/types";
import DeleteGroupButton from "@/modules/groups/components/DeleteGroup/DeleteGroupButton";
import EditGroupButton from "@/modules/groups/components/EditGroup/EditGroupButton";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import ViewButton from "@/ui/buttons/ViewButton";

interface GroupCardProps {
  groupInfo: IGropResponse;
}

const GroupCard: FC<GroupCardProps> = ({ groupInfo }) => {
  return (
    <Card className="mt-2">
      <div
        key={groupInfo.id}
        className="flex justify-between items-center gap-2"
      >
        <div className="text-lg text-blue-600">{groupInfo.name}</div>

        <div className="flex gap-3">
          <Link
            to={`/groups/${groupInfo.id}`}
            state={{ groupName: groupInfo.name }}
          >
            <ViewButton />
          </Link>
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
