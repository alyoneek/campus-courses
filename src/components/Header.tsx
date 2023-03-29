import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <NavLink
        to="/"
        style={{
          float: "left",
          width: 120,
          height: 31,
          color: "white",
        }}
        className="text-[#50d71e]"
      >
        Кампусные курсы
      </NavLink>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item style={{ marginRight: "auto" }}>
          <NavLink to="/groups">Группы курсов</NavLink>
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
