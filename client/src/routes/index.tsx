import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import Categories from '../components/Categories';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DashboardCustomerWrapper from '../pages/DashboardCustomer';
import DashboardCustomerHome from '../pages/DashboardCustomerHome';
import Home from '../pages/Home';
import Registration from '../pages/Register';

interface IProps { }
const Routes: React.FC<IProps> = () => {
	return <>
		<Suspense fallback='loading...'>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contato" component={Contact} />
				<Route path="/sobre" component={About} />
				<Route path="/categorias" component={Categories} />
				<Route path="/entrar" component={
					React.lazy(() => import('../pages/Login'))
				} />
				<Route path="/cadastrar" component={Registration} />
				<Route path="/dashboard" render={
					({ match: { path } }) => (<DashboardCustomerWrapper>
							<Switch>
								<Route path={`${path}/`} component={DashboardCustomerHome} />
							</Switch>	
					</DashboardCustomerWrapper>)
				} />
			</Switch>
		</Suspense>
	</>
}
export default Routes
