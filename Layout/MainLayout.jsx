import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
const MainLayout = ({ children, categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
