import { useState } from "react";
import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

export const Burger = ({ categories = [] }) => {
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const menu = (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={[current]}
      triggerSubMenuAction="click"
    >
      {categories.map((category) => (
        <Menu.Item key={category.title}>
          <Link href={`/${category.id}`}>
            <a>{category.title}</a>
          </Link>
        </Menu.Item>
      ))}
      <Menu.Item key={"contact"}>
          <Link href={`/contact`}>
            <a>Contact</a>
          </Link>
        </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <MenuOutlined
          style={{ position: "relative", top: "35%", marginRight: "2rem" }}
        />
      </a>
    </Dropdown>
  );
};
