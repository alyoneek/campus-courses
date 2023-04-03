import { IGropResponse } from "@/api/groups/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./groupCard.module.scss";

interface GroupCardProps {
  groupInfo: IGropResponse;
  onEdit: (idGroup: string) => void;
}

const GroupCard: FC<GroupCardProps> = ({ groupInfo, onEdit }) => {
  return (
    <Card className="mt-2">
      <div className={styles.innerContainer}>
        <Link to="/groups/1" className={styles.link}>
          {groupInfo.name}
        </Link>
        <div className={styles.iconsContainer}>
          <EditOutlined
            className={styles.editIcon}
            onClick={() => onEdit(groupInfo.id)}
          />
          <DeleteOutlined className={styles.deleteIcon} />
        </div>
      </div>
    </Card>
  );
};

export default GroupCard;
