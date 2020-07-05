import React from 'react'

import { NavLink } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

import './Sidebar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCog, faColumns, faFileAlt, faTruck, faUser, faUsers } from '@fortawesome/pro-regular-svg-icons'

export default class Sidebar extends React.Component {
  constructor() {
    super()

    this.state = {
      links: [
        { label: 'Dashboard', icon: faColumns, url: '' },
        { label: 'Customers', icon: faUser, url: '/customers' },
        { label: 'Orders', icon: faFileAlt, url: '/orders' },
        { label: 'Products', icon: faBox, url: '/products' },
        { label: 'Deliveries', icon: faTruck, url: '/deliveries' },
      ],
      bottomLinks: [
        { label: 'Staff', icon: faUsers, url: '/staff' },
        { label: 'Settings', icon: faCog, url: '/settings' }
      ]
    }
  }
  
  render() {
    let { links, bottomLinks } = this.state 

    return (
      <section class="d-flex flex-column h-100">
        <Nav defaultActiveKey='/dashboard' className='flex-column py-5 sidebar'>
          {links.map(x => <NavLink exact to={`/dashboard${x.url}`} className='nav-link' activeClassName='active'><FontAwesomeIcon icon={x.icon} className='mr-2' />{x.label}</NavLink>)}
        </Nav>
        <Nav className='flex-column py-5 sidebar mt-auto'>
          {bottomLinks.map(x => <NavLink exact to={`/dashboard${x.url}`} className='nav-link' activeClassName='active'><FontAwesomeIcon icon={x.icon} className='mr-2' />{x.label}</NavLink>)}
        </Nav>
      </section>
    )
  }
}