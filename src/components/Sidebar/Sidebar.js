import React from 'react'

import { NavLink } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

import './Sidebar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faColumns, faFileAlt, faTruck, faUser } from '@fortawesome/pro-regular-svg-icons'

export default class Sidebar extends React.Component {
  constructor() {
    super()

    this.state = {
      links: [
        { label: 'Dashboard', icon: faColumns, url: '' },
        { label: 'Customers', icon: faUser, url: '/customers' },
        { label: 'Orders', icon: faFileAlt, url: '/orders' },
        { label: 'Products', icon: faBox, url: '/products' },
        { label: 'Deliveries', icon: faTruck, url: '/deliveries' }
      ]
    }
  }
  
  render() {
    let { links } = this.state 

    return (
      <Nav defaultActiveKey='/dashboard' className='flex-column py-5 sidebar'>
        {links.map(x => <NavLink exact to={`/dashboard${x.url}`} className='nav-link' activeClassName='active'><FontAwesomeIcon icon={x.icon} className='mr-2' />{x.label}</NavLink>)}
      </Nav>
    )
  }
}