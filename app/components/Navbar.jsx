import React from "react";
import { Menu } from "antd";
import { useCategories } from "../lib/api";

const Navbar = () => {
  const {
    isLoading,
    data: { data: { allCategories = [] } = {} } = {},
    error,
  } = useCategories();
  console.log(allCategories);
  return (
    <>
      <img
        src="img/cyberscooty-excavator.svg"
        style={{ width: "100px", height: "100px" }}
      />
      <Menu theme="dark" mode="horizontal">
        {allCategories.map((category) => (
          <Menu.Item key={category.id}>{category.name}</Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
