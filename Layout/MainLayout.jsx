import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
const MainLayout = ({ children, categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="wrapper">
      {children}
      </div>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array,
};
export default MainLayout;
