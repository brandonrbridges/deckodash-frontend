import React from 'react'

import { NavLink, Redirect } from 'react-router-dom'

import { fetchUser, isAuthenticated } from '../../helpers/Authentication'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faSearch } from '@fortawesome/pro-solid-svg-icons'

import './Navigation.scss'

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true,
      user: {
        first_name: null,
        last_name: null,
      }
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
    
    if(fetchUser()) {
      let jwtUser = fetchUser()
      let newUser = this.state.user
      newUser.first_name = jwtUser.first_name
      newUser.last_name = jwtUser.last_name
      this.setState({ user: newUser })
    }
  }


  render() {
    let {
      auth,
      user
    } = this.state 

    return (
      <Navbar variant='dark' className='navigation'>
        {((auth) ? '' : <Redirect to='/login' />)}
        <NavLink to='/dashboard' className='navbar-brand'>Deckodash <span className='text-muted x-small'>Alpha 1.0</span></NavLink>
        <Nav className='ml-auto'>
          <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faSearch} /></NavLink>
          <NavLink to='/dashboard/settings' className='nav-link'><FontAwesomeIcon icon={faCog} /></NavLink>
          <NavLink to='/orders' className='nav-link'><FontAwesomeIcon icon={faBell} /></NavLink>
          <NavDropdown title={user.first_name + ' ' + user.last_name} id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item onClick={() => this.logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}