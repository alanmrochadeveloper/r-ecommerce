import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../../assets/logo-placeholder.png'
import { navMenuButtons } from '../../utils/mock/nav-menu'
import { appName } from '../../utils/globals';
import { useHistory } from 'react-router';

const { Header, Content, Footer } = Layout

interface IProps {
  children: any
}
const MainWrapper: React.FC<IProps> = ({ children }) => {
  const history = useHistory()
  
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img src={logo} alt={`logo tipo ${appName}`} />
          </div>
          <Menu
            theme='dark'
            className="nav-menu-container"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            {navMenuButtons.map((btn) => (
              <Menu.Item className={`${btn.classNameValue}`} key={btn.id} onClick={()=>history.push(`${btn.path}`)}>{btn.title}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{`${appName} ${new Date().getFullYear()}`}</Footer>
      </Layout>
    </>
  )
}
export default MainWrapper
