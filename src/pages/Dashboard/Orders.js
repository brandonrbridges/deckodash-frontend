import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import AddOrderButton from '../../components/AddOrderButton/AddOrderButton'
import OrderTable from '../../components/OrderTable/OrderTable'

export default class DashboardOrders extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Orders</h1>
        </Container>
        <Container fluid>
          <AddOrderButton className='d-block mb-4' />
          <OrderTable />
          <AddOrderButton className='d-block mt-4 ml-auto' />
        </Container>
      </DashboardLayout>
    )
  }
}