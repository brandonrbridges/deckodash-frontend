import React from 'react'

import { Button, Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import OrderTable from '../../components/OrderTable/OrderTable'

export default class DashboardOrders extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Orders</h1>
          <Button variant='success' className='float-right'>Add new order</Button>
        </Container>
        <Container fluid>
          <OrderTable />
        </Container>
      </DashboardLayout>
    )
  }
}