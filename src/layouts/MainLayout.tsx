import Header from "@/components/Header";
import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <Layout className="min-h-full">
      <Header />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
