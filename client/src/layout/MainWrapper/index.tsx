import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../../assets/logo-placeholder.png'
import { navMenuButtons } from '../../utils/mock/nav-menu'
import { appName } from '../../utils/globals'
import { useHistory, useLocation } from 'react-router-dom'

const { Header, Content, Footer } = Layout

interface IProps {
  children: any
}
const MainWrapper: React.FC<IProps> = ({ children }) => {
  const history = useHistory()
  const { pathname } = useLocation()

  const handleMenuClick = (e: any) => {
    navigateToUrl(e.key)
  }

  const navigateToUrl = (key: string) => {
    navMenuButtons.forEach((btn) => {
      if (btn.id === key) {
        history.push(btn.path)
      }
    })
  }
  const getSelectedMenuItem = (): string => {
    const value = navMenuButtons.find((btn) => btn.path === pathname)
    return value !== undefined ? value.id : '0'
  }

  return (
    <>
      <Layout className="layout">
        <Header style={{ backgroundColor: '#d53f3f', marginBottom: '2rem' }}>
          <div className="logo">
            <img src={logo} alt={`logo tipo ${appName}`} />
          </div>
          <Menu
            style={{
              backgroundColor: '#d53f3f',
              color: 'white',
              borderColor: '#d53f3f',
            }}
            className="nav-menu-container"
            mode="horizontal"
            defaultSelectedKeys={[getSelectedMenuItem()]}
            onClick={(e) => handleMenuClick(e)}
          >
            {navMenuButtons.map((btn) => (
              <Menu.Item
                data-path={`${btn.path}`}
                className={`${btn.classNameValue}`}
                key={btn.id}
              >
                {btn.title}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', minHeight: '85vh' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          {`${appName} `}&copy;{` ${new Date().getFullYear()}`}
        </Footer>
      </Layout>
    </>
  )
}
export default MainWrapper
