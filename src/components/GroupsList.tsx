import GroupCard from "@/components/GroupCard";
import { FC } from "react";

const groups = [
  "Гуманитарные науки",
  "Иностранные науки",
  "Компьютерные науки",
];

interface GroupsListProps {
  onEditGroup: (idGroup: string) => void;
}

const GroupsList: FC<GroupsListProps> = ({ onEditGroup }) => {
  return (
    <>
      {groups.map((group, i) => (
        <GroupCard key={i} title={group} onEdit={onEditGroup} />
      ))}
    </>
  );
};

export default GroupsList;
