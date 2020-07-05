import React from 'react'

import { Redirect } from 'react-router-dom'

import { isAuthenticated } from '../helpers/Authentication'

import { Col, Row } from 'react-bootstrap'

import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'

export default class DashboardLayout extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) {
      this.setState({ auth: false })
    }
  }
  
  render() {
    let { auth } = this.state

    return (
      <>
        {((auth) ? '' : <Redirect to='/login' />)}
        
        <Navigation />

        <Row>
          <Col className='bg-dark px-4' style={{ maxWidth: '12%' }}>
            <Sidebar />
          </Col>
          <Col className='pl-0'>
            {this.props.children}
          </Col>
        </Row>
      </>
    )
  }
}