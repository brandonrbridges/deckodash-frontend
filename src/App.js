import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import DashboardCustomers from './pages/Dashboard/Customers'
import DashboardCustomerSingle from './pages/Dashboard/CustomerSingle'
import DashboardOrders from './pages/Dashboard/Orders'
import DashboardOrderSingle from './pages/Dashboard/OrderSingle'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardProductSingle from './pages/Dashboard/ProductSingle'
import DashboardSettings from './pages/Dashboard/Settings'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default class App extends React.Component {
  logout = () => {
    localStorage.removeItem('x-access-token')
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/dashboard' component={Dashboard} />

          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />

          <Route exact path='/dashboard/customers' component={DashboardCustomers} />
          <Route exact path='/dashboard/customers/:id' component={DashboardCustomerSingle} />
          <Route exact path='/dashboard/orders' component={DashboardOrders} />
          <Route exact path='/dashboard/orders/:id' component={DashboardOrderSingle} />
          <Route exact path='/dashboard/products' component={DashboardProducts} />
          <Route exact path='/dashboard/products/:id' component={DashboardProductSingle} />
          <Route exact path='/dashboard/settings' component={DashboardSettings} />
        </Switch>
      </Router>
    )
  }
}