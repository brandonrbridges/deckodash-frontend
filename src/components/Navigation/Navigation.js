import React from 'react'

import { NavLink, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../../helpers/Authentication'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faSearch } from '@fortawesome/pro-solid-svg-icons'

import './Navigation.scss'

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true,
      links: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Customers', url: '/dashboard/customers' },
        { label: 'Orders', url: '/dashboard/orders' },
        { label: 'Products', url: '/dashboard/products' },
        { label: 'Deliveries', url: '/dashboard/deliveries' }
      ]
    }
  }

  logout = () => {
    localStorage.removeItem('x-access-token')
    this.setState({ auth: false })
  }

  componentDidMount() {
    if(!isAuthenticated()) {
      this.setState({ auth: false })
    }
  }


  render() {
    let {
      auth,
      links
    } = this.state 

    return (
      <Navbar variant='dark' className='navigation'>
        {((isAuthenticated()) ? '' : <Redirect to='/login' />)}
        <NavLink to='/dashboard' className='navbar-brand'>Deckodash <span className='text-muted x-small'>Alpha 1.0</span></NavLink>
        <Nav className='mr-auto'>
          {links.map(x => <NavLink to={x.url} className='nav-link' activeClassName='active' key={x.label}>{x.label}</NavLink>)}
        </Nav>
        <Nav className='ml-auto'>
          {(isAuthenticated()) ? <LoggedInMenuItems logout={this.logout} /> : <LoggedOutMenuItems />}
        </Nav>
      </Navbar>
    )
  }
}

class LoggedInMenuItems extends React.Component {
  render() {
    return (
      <>
        <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faSearch} /></NavLink>
        <NavLink to='/dashboard/settings' className='nav-link'><FontAwesomeIcon icon={faCog} /></NavLink>
        <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faBell} /></NavLink>
        <NavDropdown title="Brandon" id="basic-nav-dropdown" alignRight>
          <NavDropdown.Item href="#" onClick={() => this.props.logout()}>Logout</NavDropdown.Item>
        </NavDropdown>
      </>
    )
  }
}

class LoggedOutMenuItems extends React.Component {
  render() {
    return <NavLink to='/login' className='nav-link'>Login</NavLink>
  }
}