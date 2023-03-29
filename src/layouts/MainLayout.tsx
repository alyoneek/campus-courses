import Header from "@/components/Header";
import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout className="min-h-full">
      <Header />
      <Content className="px-[50px]">
        <div className=" bg-white p-6 my-4">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
