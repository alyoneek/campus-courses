import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactNode } from "react";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

const List = <T,>({ data, renderItem }: ListProps<T>) => {
  const [parent] = useAutoAnimate();

  return <div ref={parent}>{data.map(renderItem)}</div>;
};

export default List;
