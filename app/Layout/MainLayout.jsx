import Navbar from "../components/Navbar";
import { Burger } from "../components/Burger";
import MediaQuery from "react-responsive";
import Content from "../components/Content";
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
