import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import AddProductButton from '../../components/AddProductButton/AddProductButton'
import ProductTable from '../../components/ProductTable/ProductTable'

export default class DashboardProducts extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Products</h1>
        </Container>
        <Container fluid>
          <AddProductButton className='d-block mb-4 ml-auto' />
          <ProductTable className='float-right' />
          <AddProductButton className='d-block mt-4 ml-auto' />
        </Container>
      </DashboardLayout>
    )
  }
}