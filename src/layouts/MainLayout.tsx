/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/components/Header";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { getRoles } from "@/store/features/account/accountActions";
import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout: FC = () => {
  const roles = useAppSelector((state) => state.account.userRoles);
  const token = useAppSelector((state) => state.account.userToken);
  const dispatch = useAppDispatch();

  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    if (!!token && !roles) {
      dispatch(getRoles());
    }
  }, [token, dispatch]);

  return (
    <Layout className="min-h-full">
      <Header />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
