import React from 'react'

import { Button, Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import ProductTable from '../../components/ProductTable/ProductTable'

export default class DashboardProducts extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Products</h1>
          <Button variant='success' className='float-right'>Add new product</Button>
        </Container>
        <Container fluid>
          <ProductTable />
        </Container>
      </DashboardLayout>
    )
  }
}