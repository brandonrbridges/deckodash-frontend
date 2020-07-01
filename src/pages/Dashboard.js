import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import DashboardLayout from '../layouts/DashboardLayout'

import WelcomeWidget from '../components/WelcomeWidget/WelcomeWidget'

export default class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Bob'
    }
  }
  
  render() {
    let {
      name
    } = this.state
    
    return (
      <DashboardLayout fluid id='Dashboard'>
        <Col>
          
        </Col>
        <Col md={3}>
        
        </Col>
      </DashboardLayout>
    )
  }
}