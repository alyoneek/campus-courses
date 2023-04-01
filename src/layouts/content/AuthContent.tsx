import { Layout } from "antd";
import { ContentProps } from "./types";

const { Content } = Layout;

const AuthContent = ({ title, children }: ContentProps) => {
  return (
    <Content className="my-10 mx-8 ">
      <div className="max-w-xl mx-auto p-5 bg-white">
        <h1 className="mb-5 text-2xl text-center">{title}</h1>
        {children}
      </div>
    </Content>
  );
};

export default AuthContent;
