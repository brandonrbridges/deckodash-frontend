import React from 'react'

import { NavLink } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

import './Sidebar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCog, faColumns, faFileAlt, faKey, faPoll, faTruck, faUser, faUserChart } from '@fortawesome/pro-regular-svg-icons'

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
        { label: 'Statistics', icon: faUserChart, url: '/statistics' },
        { label: 'Marketing', icon: faPoll, url: '/marketing', disabled: true }
      ],
      bottomLinks: [
        { label: 'Users', icon: faKey, url: '/users' },
        { label: 'Settings', icon: faCog, url: '/settings' }
      ]
    }
  }
  
  render() {
    let { links, bottomLinks } = this.state 

    return (
      <section className='d-flex flex-column h-100'>
        <Nav defaultActiveKey='/dashboard' className='flex-column py-5 sidebar'>
          {links.map(x => <NavLink exact to={`/dashboard${x.url}`} className={`nav-link ${((x.disabled) ? 'disabled' : '')}`} activeClassName='active' key={x.label}><FontAwesomeIcon icon={x.icon} className='mr-2' />{x.label}</NavLink>)}
        </Nav>
        <Nav className='flex-column py-5 sidebar mt-auto'>
          {bottomLinks.map(x => <NavLink exact to={`/dashboard${x.url}`} className='nav-link' activeClassName='active' key={x.label}><FontAwesomeIcon icon={x.icon} className='mr-2' />{x.label}</NavLink>)}
        </Nav>
      </section>
    )
  }
}