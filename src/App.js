import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}