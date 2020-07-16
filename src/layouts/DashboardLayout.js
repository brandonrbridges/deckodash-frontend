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
          <Col className='bg-dark px-4' style={{ height: 'calc(100vh - 56px)', maxWidth: '14%' }}>
            <Sidebar />
          </Col>
          <Col className='pb-5 px-0' style={{ height: 'calc(100vh - 56px)', overflowY: 'scroll' }}>
            {this.props.children}
          </Col>
        </Row>
      </>
    )
  }
}