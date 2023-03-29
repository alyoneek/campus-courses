import { Layout, Menu } from "antd";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const { Header: AntHeader } = Layout;

// const paths = [
//   "/",
//   "//(groups|courses)/*/",
//   "/",
//   "/",
//   "/registration",
//   "/login",
// ];

const Header: FC = () => {
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
              <NavLink
                to="/groups"
                className={({ isActive }) => {
                  return `${styles.link} ${isActive ? styles.active : ""}`;
                }}
              >
                Группы курсов
              </NavLink>
            ),
            key: "1",
            className: styles.linkWrapper,
          },
          {
            label: (
              <NavLink
                to="/courses"
                className={({ isActive }) => {
                  return `${styles.link} ${isActive ? styles.active : ""}`;
                }}
              >
                Мои курсы
              </NavLink>
            ),
            key: "2",
            className: styles.linkWrapper,
          },
          {
            label: (
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  return `${styles.link} ${isActive ? styles.active : ""}`;
                }}
              >
                Преподаваемые курсы
              </NavLink>
            ),
            key: "3",
            className: `${styles.linkWrapper} ${styles.lastInLeftCol}`,
          },
          {
            label: (
              <NavLink
                to="/registration"
                className={({ isActive }) => {
                  return `${styles.link} ${isActive ? styles.active : ""}`;
                }}
              >
                Регистрация
              </NavLink>
            ),
            key: "4",
            className: styles.linkWrapper,
          },
          {
            label: (
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `${styles.link} ${isActive ? styles.active : ""}`;
                }}
              >
                Логин
              </NavLink>
            ),
            key: "5",
            className: styles.linkWrapper,
          },
        ]}
      />
    </AntHeader>
  );
};

export default Header;
