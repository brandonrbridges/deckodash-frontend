import React from 'react'

import { Button, Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import CustomerTable from '../../components/CustomerTable/CustomerTable'

export default class DashboardCustomers extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Customers</h1>
          <Button variant='success' className='float-right'>Add new customer</Button>
        </Container>
        <Container fluid>
          <CustomerTable />
        </Container>
      </DashboardLayout>
    )
  }
}