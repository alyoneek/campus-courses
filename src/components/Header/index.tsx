import { Layout, Menu } from "antd";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import RequireAuthComponent from "@/router/RequireAuthComponent";
import { useAppDispatch, useAppSelector } from "@/store";
import { logout } from "@/store/features/auth/authActions";

import { Roles } from "@/modules/account";
import styles from "./header.module.scss";

const { Header: AntHeader } = Layout;

const Header: FC = () => {
  const email = useAppSelector((state) => state.auth.email);
  const dispatch = useAppDispatch();

  return (
    <AntHeader className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        Кампусные курсы
      </NavLink>
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={[
          {
            label: (
              <RequireAuthComponent>
                <NavLink
                  to="/groups"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  Группы курсов
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "1",
            className: styles.linkWrapper,
          },

          {
            label: (
              <RequireAuthComponent allowedRoles={[Roles.isStudent]}>
                <NavLink
                  to="/courses/my"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  Мои курсы
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "2",
            className: styles.linkWrapper,
          },

          {
            label: (
              <RequireAuthComponent allowedRoles={[Roles.isTeacher]}>
                <NavLink
                  to="/courses/teaching"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  Преподаваемые курсы
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "3",
            className: styles.linkWrapper,
          },

          {
            label: (
              <RequireAuthComponent loggedOut>
                <NavLink
                  to="/registration"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  Регистрация
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "4",
            className: `${styles.linkWrapper} ${styles.lastInLeftCol}`,
          },

          {
            label: (
              <RequireAuthComponent loggedOut>
                <NavLink
                  to="/login"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  Вход
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "5",
            className: styles.linkWrapper,
          },

          {
            label: (
              <RequireAuthComponent>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => {
                    return `${styles.link} ${isActive ? styles.active : ""}`;
                  }}
                >
                  {email && email}
                </NavLink>
              </RequireAuthComponent>
            ),
            key: "6",
            className: styles.linkWrapper,
          },

          {
            label: (
              <RequireAuthComponent>
                <div aria-hidden="true" onClick={() => dispatch(logout())}>
                  Выход
                </div>
              </RequireAuthComponent>
            ),
            key: "7",
            className: styles.linkWrapper,
          },
        ]}
      />
    </AntHeader>
  );
};

export default Header;
