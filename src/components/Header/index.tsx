import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const { Header: AntHeader } = Layout;

const Header = () => {
  console.log(styles);
  return (
    <AntHeader className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        Кампусные курсы
      </NavLink>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <NavLink to="/groups">Группы курсов</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">Мои курсы</NavLink>
        </Menu.Item>
        <Menu.Item style={{ marginRight: "auto" }}>
          <NavLink to="/">Преподаваемые курсы</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/registration">Регистрация</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">Логин</NavLink>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
