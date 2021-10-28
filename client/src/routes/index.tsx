import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Categories from '../components/Categories';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Register';

interface IProps {}
const Routes: React.FC<IProps> = () => {
  return <>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contato" component={Contact} />
        <Route path="/sobre" component={About} />
        <Route path="/categorias" component={Categories} />
        <Route path="/entrar" component={Login} />
        <Route path="/cadastrar" component={Registration} />
    </Switch>
  </>
}
export default Routes
