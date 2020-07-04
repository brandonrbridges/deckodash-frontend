import React from 'react'

import { NavLink } from 'react-router-dom'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faSearch } from '@fortawesome/pro-solid-svg-icons'

import './Navigation.scss'

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      links: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Customers', url: '/dashboard/customers' },
        { label: 'Orders', url: '/dashboard/orders' },
        { label: 'Products', url: '/dashboard/products' },
        { label: 'Deliveries', url: '/dashboard/deliveries' }
      ]
    }
  }


  render() {
    let {
      links
    } = this.state 

    return (
      <Navbar variant='dark' className='navigation'>
        <NavLink to='/dashboard' className='navbar-brand'>Deckodash <span className='text-muted x-small'>Alpha 1.0</span></NavLink>
        <Nav className='mr-auto'>
          {links.map(x => <NavLink to={x.url} className='nav-link' activeClassName='active' key={x.label}>{x.label}</NavLink>)}
        </Nav>
        <Nav className='ml-auto'>
          <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faSearch} /></NavLink>
          <NavLink to='/dashboard/settings' className='nav-link'><FontAwesomeIcon icon={faCog} /></NavLink>
          <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faBell} /></NavLink>
          <NavDropdown title="Brandon" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}