import { useState } from "react";
import { Menu } from "antd";
import {
  MenuOutlined,
  ReadOutlined,
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
// import { Link } from "react-scroll";

const { SubMenu } = Menu;

export const Burger = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={[current]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MenuOutlined />}>
        <SubMenu
          key="gi1"
          title="Prochains stages"
          icon={<CalendarOutlined style={{ color: "#ce0033" }} />}
        >
          <Menu.Item
            key="events"
            icon={<UserOutlined style={{ color: "#ce0033" }} />}
          >
            {/* <Link to="event1" smooth>
              Stage 2 semaines Avril-Mai 2021
            </Link> */}
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="contact"
          icon={<MailOutlined style={{ color: "#ce0033" }} />}
        >
          <a
            href="https://www.google.com/intl/en-GB/forms/about/"
            target="_blank"
          >
            Nous contacter
          </a>
        </Menu.Item>
        <Menu.Item
          key="formations"
          icon={<ReadOutlined style={{ color: "#ce0033" }} />}
        >
          <a
            href="https://auvergnerhonealpes.simplon.co/candidatures.html"
            target="_blank"
          >
            Nos offres de formations
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
