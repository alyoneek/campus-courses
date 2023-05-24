import { Breadcrumb, Layout } from "antd";

import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { ContentProps } from "./types";

const { Content } = Layout;

const DataContent = ({ title, children }: ContentProps) => {
  const { breadcrumbItems } = useBreadcrumbs();

  return (
    <Content className="my-10 mx-8">
      <div className="max-w-screen-2xl mx-auto py-8 px-10 bg-white">
        <Breadcrumb className="mb-7" items={breadcrumbItems} />
        <h1 className="mb-8 xl:text-4xl text-3xl">{title}</h1>
        {children}
      </div>
    </Content>
  );
};

export default DataContent;
