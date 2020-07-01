import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import DashboardCustomers from './pages/Dashboard/Customers'
import DashboardOrders from './pages/Dashboard/Orders'
import Home from './pages/Home'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/customers' component={DashboardCustomers} />
          <Route exact path='/dashboard/orders' component={DashboardOrders} />
        </Switch>
      </Router>
    )
  }
}