import { ReactNode } from "react";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

const List = <T,>({ data, renderItem }: ListProps<T>) => {
  return <>{data.map(renderItem)}</>;
};

export default List;
