import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Empty } from "antd";
import { ReactNode } from "react";

interface ListProps<T> {
  data: T[];
  emptyText?: string;
  renderItem: (item: T, index: number) => ReactNode;
}

const List = <T,>({ data, emptyText = "", renderItem }: ListProps<T>) => {
  const [parent] = useAutoAnimate();

  return data.length === 0 ? (
    <Empty description={emptyText} />
  ) : (
    <div ref={parent}>{data.map(renderItem)}</div>
  );
};

export default List;
