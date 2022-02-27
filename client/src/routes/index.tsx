import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Categories from '../components/Categories'
import About from '../pages/About'
import Contact from '../pages/Contact'
import DashboardCustomerWrapper from '../layout/DashboardCustomerWrapper'
import DashboardCustomerHome from '../pages/DashboardCustomerHome'
import DashboardCustomerPurchases from '../pages/DashboardCustomerPurchases'
import DashboardCustomerSettings from '../pages/DashboardCustomerSettings'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Registration from '../pages/Register'
import TestApi from '../pages/TestApi'
import DashboardCustomerFollowUp from '../pages/DashboardCustomerFollowUp'
import Usuarios from '../pages/Usuarios';

interface IProps { }
const Routes: React.FC<IProps> = () => {
  return (
    <>
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contato" component={Contact} />
          <Route path="/sobre" component={About} />
          <Route path="/categorias/:categoria" component={Categories} />
          <Route path="/test" component={TestApi} />
          <Route
            path="/entrar"
            component={React.lazy(() => import('../pages/Login'))}
          />
          <Route path="/cadastrar" component={Registration} />
          <Route path="/usuarios" component={Usuarios} />
          <Route
            path="/dashboard"
            render={({ match: { path } }) => (
              <DashboardCustomerWrapper>
                <Switch>
                  <Route
                    exact
                    path={`${path}/inicio`}
                    component={DashboardCustomerHome}
                  />
                  <Route
                    exact
                    path={`${path}/configuracoes`}
                    component={DashboardCustomerSettings}
                  />
                  <Route
                    exact
                    path={`${path}/compras`}
                    component={DashboardCustomerPurchases}
                  />
                  <Route
                    exact
                    path={`${path}/acompanhamento`}
                    component={DashboardCustomerFollowUp}
                  />
                  <Route
                    path={`${path}/404`}
                    component={NotFound}
                  />
                  <Redirect
                    from={`${path}/*`}
                    to={`${path}/404`}
                  />
                </Switch>
              </DashboardCustomerWrapper>
            )} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
    </>
  )
}
export default Routes
