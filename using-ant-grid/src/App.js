import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Col, Layout, Menu, Row } from 'antd';
import React, { useState } from 'react';
import Cards from "./components/cards/Cards";
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={ null } collapsible collapsed={ collapsed }>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={ ['1'] }
          items={ [
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'nav 4',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'nav 5',
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'nav 6',
            },
            {
              key: '7',
              icon: <UploadOutlined />,
              label: 'nav 7',
            },

          ] }
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={ {
            padding: 0,
          } }
        >
          { React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          }) }
        </Header>
        <Content
          className="site-layout-background"
          style={ {
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          } }
        >
          {/* ************************** */ }
          <Row gutter={ 16 }>
            <Col span={ 6 } className="img-card" push={ 18 }>
              <div ></div>
            </Col>
            <Col span={ 18 } pull={ 6 }>
              <Cards />
            </Col>
          </Row>
          {/* ************************** */ }
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
