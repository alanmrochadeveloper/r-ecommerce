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
  const location = useLocation()
  React.useEffect(() => {
    console.log('Updated MainWrapper') // TODO remove log or even this useEffect later on
    console.log(`location.pathname = ${location.pathname}`) // TODO remove this log 
    console.log(`document.location.pathname = ${document.location.pathname}`) // TODO remove this log
  })

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
            defaultSelectedKeys={['1']}
          >
            {navMenuButtons.map((btn) => (
              <Menu.Item
                data-path={`${btn.path}`}
                className={`${btn.classNameValue}`}
                key={btn.id}
                onClick={() => history.push(`${btn.path}`)}
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
