/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";
import { history } from "@/router/history";
import { useAppDispatch } from "@/store";
import { getRoles } from "@/store/features/account/accountActions";

const MainLayout: FC = () => {
  const { isLoggedIn, roles } = useAuth();
  const dispatch = useAppDispatch();

  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getRoles());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Layout className="min-h-full">
      <Header />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
