import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "../components/Navbar";
import { Burger } from "../components/Burger";
import MediaQuery from "react-responsive";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className="layout">
      <MediaQuery minWidth={1025}>
        <div className="navbar">
          <Navbar />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <Burger />
      </MediaQuery>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
