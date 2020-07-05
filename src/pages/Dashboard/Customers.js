import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import AddCustomerButton from '../../components/AddCustomerButton/AddCustomerButton'
import CustomerTable from '../../components/CustomerTable/CustomerTable'

export default class DashboardCustomers extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Customers</h1>
        </Container>
        <Container fluid>
          <AddCustomerButton className='d-block mb-4' />
          <CustomerTable />
          <AddCustomerButton className='d-block mt-4 ml-auto' />
        </Container>
      </DashboardLayout>
    )
  }
}