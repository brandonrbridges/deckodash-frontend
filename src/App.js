import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import DashboardCustomers from './pages/Dashboard/Customers'
import DashboardOrders from './pages/Dashboard/Orders'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardSettings from './pages/Dashboard/Settings'
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
          <Route exact path='/dashboard/products' component={DashboardProducts} />
          <Route exact path='/dashboard/settings' component={DashboardSettings} />
        </Switch>
      </Router>
    )
  }
}