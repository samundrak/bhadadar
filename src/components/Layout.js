import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content } = Layout;
const AppLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">BhadaDar</Menu.Item>
      </Menu>
    </Header>
    <Content style={{}}>
      <div style={{ background: '#fff', minHeight: 280 }}>{children}</div>
    </Content>
  </Layout>
);
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
