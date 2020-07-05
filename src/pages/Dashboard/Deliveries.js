import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

export default class DashboardDeliveries extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Deliveries</h1>
        </Container>
        <Container fluid>

        </Container>
      </DashboardLayout>
    )
  }
}