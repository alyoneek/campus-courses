/* eslint-disable react-hooks/exhaustive-deps */
import { FloatButton, Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";
import { accountActions } from "@/modules/account";
import { history } from "@/router/history";
import { useAppDispatch } from "@/store";

const MainLayout: FC = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(accountActions.getRoles());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Layout className="min-h-full">
      <Header />
      <Outlet />
      <FloatButton.BackTop />
    </Layout>
  );
};

export default MainLayout;
