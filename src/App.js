import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { fetchUser, isAuthenticated } from './helpers/Authentication'

import Dashboard from './pages/Dashboard'
import DashboardCustomers from './pages/Dashboard/Customers'
import DashboardCustomerSingle from './pages/Dashboard/CustomerSingle'
import DashboardDeliveries from './pages/Dashboard/Deliveries'
import DashboardOrders from './pages/Dashboard/Orders'
import DashboardOrderSingle from './pages/Dashboard/OrderSingle'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardProductSingle from './pages/Dashboard/ProductSingle'
import DashboardSettings from './pages/Dashboard/Settings'
import DashboardUsers from './pages/Dashboard/Users'
import Home from './pages/Home'
import Login from './pages/Login'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true,
      user: {
        email: null,
        first_name: null,
        last_name: null,
        role: null
      }
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) {
      return this.setState({ auth: false })
    }

    let jwtUser = fetchUser()
    let newUser = this.state.user
    newUser.email = jwtUser.email
    newUser.first_name = jwtUser.first_name
    newUser.last_name = jwtUser.last_name
    newUser.role = jwtUser.role
    this.setState({ user: newUser })

    console.log(this.state.user)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/dashboard' component={() => <Dashboard user={this.state.user.first_name} />} />

          <Route exact path='/login' component={Login} />

          <Route exact path='/dashboard/customers' component={DashboardCustomers} />
          <Route exact path='/dashboard/customers/:id' component={DashboardCustomerSingle} />

          <Route exact path='/dashboard/deliveries' component={DashboardDeliveries} />
          <Route exact path='/dashboard/deliveries/:id' component={DashboardDeliveries} />

          <Route exact path='/dashboard/orders' component={DashboardOrders} />
          <Route exact path='/dashboard/orders/:id' component={DashboardOrderSingle} />
          
          <Route exact path='/dashboard/products' component={DashboardProducts} />
          <Route exact path='/dashboard/products/:id' component={DashboardProductSingle} />

          <Route exact path='/dashboard/settings' component={DashboardSettings} />

          <Route exact path='/dashboard/users' component={DashboardUsers} />
        </Switch>
      </Router>
    )
  }
}