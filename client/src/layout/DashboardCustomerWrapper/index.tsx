import React from 'react';
import { Typography, Layout, Menu } from 'antd';
import ContentWrapper from '../../layout/ContentWrapper';
import { navMenuSiderDashboardButtons } from '../../utils/mock/nav-menu-sider-dashboard';
import MainFooter from '../../layout/Footer';
// import {ShoppingCartOutlined, UserOutlined,DollarOutlined } from '@ant-design/icons';
import { iconPicker } from '../../utils/icon-picker';
import { appName } from '../../utils/globals';
import logo from '../../assets/logo-placeholder.png';
import shortLogo from '../../assets/okiama-short-logo.jpg';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Sider } = Layout;
const { Item } = Menu;

interface IProps {
  children: React.ReactNode;
}

const DashboardCustomerWrapper: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [contentMarginLeft, setContentMarginLeft] = React.useState<number>(200);
  const history = useHistory();

  const onCollapseHandler = (collapsedValue: boolean) => {
    console.log('collapsedValue ', collapsedValue);
    setCollapsed(collapsedValue);
    setContentMarginLeft(collapsed ? 200 : 80);
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          backgroundColor: '#d53f3f',
          zIndex: 1
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapseHandler}
      >
        <div className="logo" style={{ width: collapsed ? 80 : 200, textAlign: 'center', margin: '20px 0' }} >
          <img
            src={collapsed ? shortLogo : logo}
            alt={`logo tipo ${appName}`}
            style={{ maxWidth: collapsed ? 40 : 100 }} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            backgroundColor: '#d53f3f',
            color: '#fff',
            borderColor: '#d53f3f',
          }}>
          {
            navMenuSiderDashboardButtons.map(({ id, title, url, icon }) => (
              <Item key={id} icon={iconPicker(icon)} onClick={() => {
                history.push(`${url}`);
              }}>
                {/*console.log(`history = ${JSON.stringify(history)}`)*/}
                {title}
              </Item>
            ))
          }
        </Menu>
      </Sider>
      <span className='spacer' style={{ marginLeft: contentMarginLeft, padding: 1, minHeight: '100vh' }}></span>
      <ContentWrapper>
        <Title level={2}>Portal do cliente</Title>
        {children}
      </ContentWrapper>
      <MainFooter style={{ position: 'fixed', top: '94vh', width: '100vw', overflow: 'auto', backgroundColor: 'transparent', left: 10 }} />
    </div>
  )
}

export default DashboardCustomerWrapper;
