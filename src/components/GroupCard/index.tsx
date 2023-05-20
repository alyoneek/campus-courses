import { IGropResponse } from "@/api/groups/types";
import usePopconfirm from "@/hooks/usePopconfirm";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { useAppDispatch, useAppSelector } from "@/store";
import { Roles } from "@/store/features/account/accountSlice";
import { deleteGroup } from "@/store/features/groups/groupsActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Popconfirm, message } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./groupCard.module.scss";

interface GroupCardProps {
  groupInfo: IGropResponse;
  onEdit: (idGroup: string) => void;
}

const GroupCard: FC<GroupCardProps> = ({ groupInfo, onEdit }) => {
  const { openPopconfirm, showPopconfirm, onCancelPopconfirm } =
    usePopconfirm();

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.groups.status);

  const onOkPopconfirm = () => {
    dispatch(deleteGroup(groupInfo.id))
      .unwrap()
      .then(() => onFinishSuccess())
      .catch((e) => onFinishFailed(e.message));
  };

  const onFinishFailed = (value: string) => {
    message.error(value);
  };

  const onFinishSuccess = () => {
    message.success("Группа успешно удалена");
    onCancelPopconfirm();
  };

  return (
    <Card className="mt-2">
      <div key={groupInfo.id} className={styles.innerContainer}>
        <Link
          to={`/groups/${groupInfo.id}`}
          className={styles.link}
          state={{ groupName: groupInfo.name }}
        >
          {groupInfo.name}
        </Link>
        <div className={styles.iconsContainer}>
          <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
            <EditOutlined
              className={styles.editIcon}
              onClick={() => onEdit(groupInfo.id)}
            />
          </RequireAuthComponent>
          <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
            <Popconfirm
              title="Вы точно хотите удалить эту группу?"
              open={openPopconfirm}
              onConfirm={onOkPopconfirm}
              okButtonProps={{ loading: status === "loading" }}
              onCancel={onCancelPopconfirm}
            >
              <DeleteOutlined
                className={styles.deleteIcon}
                onClick={showPopconfirm}
              />
            </Popconfirm>
          </RequireAuthComponent>
        </div>
      </div>
    </Card>
  );
};

export default GroupCard;
