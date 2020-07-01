import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

import './DashboardNavigation.scss'

export default class DashboardNavigation extends React.Component {
  render() {
    return (
      <Nav defaultActiveKey='/dashboard' id='DashboardNavigation'>
        <Link to='/dashboard' className='nav-link'>D</Link>
        <Link to='/dashboard/customers' className='nav-link'>C</Link>
        <Link to='/dashboard/orders' className='nav-link'>O</Link>
      </Nav>
    )
  }
}