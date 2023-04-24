import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./groupCard.module.scss";

interface GroupCardProps {
  title: string;
  onEdit: (idGroup: string) => void;
}

const GroupCard: FC<GroupCardProps> = ({ title, onEdit }) => {
  return (
    <Card className="mt-2">
      <div className={styles.innerContainer}>
        <Link to="1" className={styles.link}>
          {title}
        </Link>
        <div className={styles.iconsContainer}>
          <EditOutlined
            className={styles.editIcon}
            onClick={() => onEdit("asdf")}
          />
          <DeleteOutlined className={styles.deleteIcon} />
        </div>
      </div>
    </Card>
  );
};

export default GroupCard;
