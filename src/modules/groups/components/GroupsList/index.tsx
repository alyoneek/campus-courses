import { Empty } from "antd";

import List from "@/components/List";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { getGroups } from "@/modules/groups/store/groupsSelectors";
import { useAppSelector } from "@/store";
import GroupCard from "./components/GroupCard";

const GroupsList = () => {
  const groups = useAppSelector(getGroups);
  const loading = useAppSelector((state) => state.loading.isDataFetching);

  return !loading ? (
    groups.length === 0 ? (
      <Empty description="Нет групп" />
    ) : (
      <List
        data={groups}
        renderItem={(group) => <GroupCard key={group.id} groupInfo={group} />}
      />
    )
  ) : (
    Array.from(Array(8).keys()).map((i) => <CardSkeleton key={i} />)
  );
};

export default GroupsList;
