import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom"
import Loadable from 'react-loadable'
import Counter from './counterModule/CounterIndex'
import './App.css';
import Loading from './components/Loading/Loading'

const User = Loadable({
  loader: () => import('./userModule/containers/User/Dynamic'),
  loading: Loading,
});

const Pingpong = Loadable({
  loader: () => import('./pingModule/PingpongIndex'),
  loading: Loading,
});

const App = () => (
  <Router>
    <div className="App">
      <ul className="main-menu">
        <li>
          <NavLink exact to="/">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/pingpong">Pingpong</NavLink>
        </li>
      </ul>
      <br />
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/user" component={User} />
        <Route path="/pingpong" component={Pingpong} />
      </Switch>
    </div>
  </Router>
);

export default App;
