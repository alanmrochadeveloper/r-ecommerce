import React from 'react'
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';

interface IProps {}
const Routes: React.FC<IProps> = () => {
  return <>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contato" component={Contact} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
    </Switch>
  </>
}
export default Routes
