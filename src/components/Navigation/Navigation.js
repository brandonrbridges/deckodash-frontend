import React from 'react'

import { NavLink } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'

import './Navigation.scss'

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      links: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Customers', url: '/dashboard/customers' },
        { label: 'Orders', url: '/dashboard/orders' } 
      ]
    }
  }


  render() {
    let {
      links
    } = this.state 

    return (
      <Navbar variant="dark" className='navigation'>
        <NavLink to='/dashboard' className='navbar-brand'>Deckodash <span className='text-muted x-small'>Alpha 1.0</span></NavLink>
        <Nav className="mr-auto">
          {links.map(x => <NavLink to={x.url} className='nav-link' activeClassName='active' key={x.label}>{x.label}</NavLink>)}
        </Nav>
      </Navbar>
    )
  }
}