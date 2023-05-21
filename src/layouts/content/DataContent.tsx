import { Layout } from "antd";
import { ContentProps } from "./types";

const { Content } = Layout;

const DataContent = ({ title, children }: ContentProps) => {
  return (
    <Content className="my-10 mx-8">
      <div className="max-w-screen-2xl mx-auto py-8 px-10 bg-white">
        <h1 className="mb-8 text-4xl">{title}</h1>
        {children}
      </div>
    </Content>
  );
};

export default DataContent;
