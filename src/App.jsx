import React, { useState } from 'react';
import Menu from "./components/Menu.jsx"
import { Layout, theme  } from 'antd';
import { Routes, Route, Navigate } from "react-router-dom"
import Page1 from "./pages/Page1-1.jsx"
import Page2 from "./pages/Page1-2.jsx"
import Page3 from "./pages/Page2-1.jsx"
import Page4 from "./pages/Page2-2.jsx"

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path='/' element={<Navigate to="/1-1"></Navigate>}></Route>
            <Route path='/1-1' element={<Page1></Page1>}></Route>
            <Route path='/1-2' element={<Page2></Page2>}></Route>
            <Route path='/2-1' element={<Page3></Page3>}></Route>
            <Route path='/2-2' element={<Page4></Page4>}></Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;