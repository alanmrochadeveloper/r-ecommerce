import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { navMenuButtons } from '../../utils/mock/nav-menu'
import { appName } from '../../utils/globals'
import logo from '../../assets/logo-placeholder.png'
import { useHistory, useLocation } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu'
import ContentWrapper from '../ContentWrapper'
import MainFooter from '../Footer'

const { Header } = Layout

interface IProps {
	children: any
}
const MainWrapper: React.FC<IProps> = ({ children }) => {
	const history = useHistory()
	const { pathname } = useLocation()

	const [currentWidth, setCurrentWidth] = useState<number>(0)

	React.useLayoutEffect(() => {
		const resizeWindow = () => {
			setCurrentWidth(window.innerWidth)
		}
		window.addEventListener('resize', resizeWindow)

		resizeWindow()

		return () => window.removeEventListener('resize', resizeWindow)
	}, [])

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
				<Header style={{ backgroundColor: '#d53f3f' }}>
					<div className="logo">
						<img src={logo} alt={`logo tipo ${appName}`} />
					</div>
					<Menu
						style={{
							backgroundColor: '#d53f3f',
							color: 'white',
							borderColor: '#d53f3f',
						}}
						mode="horizontal"
						defaultSelectedKeys={[getSelectedMenuItem()]}
						onClick={(e) => handleMenuClick(e)}
					>
						{navMenuButtons.map((btn) => {
							return !btn.isSubMenu ? (
								<Menu.Item
									data-path={`${btn.path}`}
									className={`${btn.classNameValue}`}
									key={btn.id}
									style={{
										marginLeft: btn.isRightMenu
											? currentWidth - (!!btn.offset ? btn.offset : 0)
											: '0rem',
									}}
								>
									{btn.title}
								</Menu.Item>
							) : (
								<SubMenu key={btn.title} title={btn.title}>
									{btn.subMenu?.map((sm) => (
										<Menu.Item
											data-path={`${sm.path}`}
											className={`${sm.classNameValue}`}
											key={sm.id}
										>
											{sm.title}
										</Menu.Item>
									))}
								</SubMenu>
							)
						})}
					</Menu>
				</Header>
				<ContentWrapper>
					<div className="site-layout-content">{children}</div>
				</ContentWrapper>
        <MainFooter />
			</Layout>
		</>
	)
}
export default MainWrapper
