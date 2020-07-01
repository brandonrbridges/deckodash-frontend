import React from 'react'

import { Button, Col, Container, Nav, Row } from 'react-bootstrap'

import DashboardNavigation from '../components/DashboardNavigation/DashboardNavigation'

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={1}>
            <DashboardNavigation />
          </Col>
          <Col>
            <Row>
              <Col className='text-right'>
                <Button>Username</Button>
              </Col>
            </Row>
            <Row>
              {this.props.children}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}