import React from 'react'
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom"
import Go from './pages/DynamicGo';
import Info from './pages/Info';
import ping$ from './redux/epics'
import { rootEpic$ } from '../rootEpics'

rootEpic$.next(ping$)

const PingpongIndex = () => {
  return (
    <div>
      <ul className="main-menu">
        <li>
          <NavLink to="/pingpong/go">Go</NavLink>
        </li>
        <li>
          <NavLink to="/pingpong/info">Info</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/pingpong/go" component={Go} />
        <Route path="/pingpong/info" component={Info} />
      </Switch>
    </div>
  )
}

export default PingpongIndex
