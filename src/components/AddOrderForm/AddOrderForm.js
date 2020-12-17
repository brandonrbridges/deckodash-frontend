/** React */
import React, { useState } from 'react'

/** Axios */
import Axios from '../../config/axios'

/** Helpers */
import { fetchUser } from '../../helpers/Authentication'

/** React Bootstrap */
import { Button, Col, Form } from 'react-bootstrap'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/pro-solid-svg-icons'

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      customer_id: null,
      availableProducts: [],
      products: [],
      rows: 1,
      staff_id: null,
      status: 'quote',

      product_1: null,
      product_1_qty: 1,
      product_1_price: null,
      product_2: null,
      product_2_qty: 1,
      product_2_price: null,
      product_3: null,
      product_3_qty: 1,
      product_3_price: null,
      product_4: null,
      product_4_qty: 1,
      product_4_price: null,
      product_5: null,
      product_5_qty: 1,
      product_5_price: null,
      product_6: null,
      product_6_qty: 1,
      product_6_price: null,
      product_7: null,
      product_7_qty: 1,
      product_7_price: null,
      product_8: null,
      product_8_qty: 1,
      product_8_price: null,
    }
  }

  componentDidMount() {
    Axios.get('customers', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ customers: response.data.customers }))

    Axios.get('products', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ availableProducts: response.data.products }))

    if(fetchUser()) {
      let jwtUser = fetchUser()

      this.setState({ staff_id: jwtUser._id })
    }
  }

  handleAddRow = e => {
    this.setState({ rows: this.state.rows + 1 })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleProductChange = e => {
    console.log(e.target.name + ' ' + e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()

    let selectedProducts = []

    if(this.state.product_1 !== null) {
      selectedProducts.push({
        product_id: this.state.product_1,
        quantity: this.state.product_1_qty,
        price: this.state.product_1_price
      })
    }

    if(this.state.product_2 !== null) {
      selectedProducts.push({
        product_id: this.state.product_2,
        quantity: this.state.product_2_qty,
        price: this.state.product_2_price
      })
    }

    if(this.state.product_3 !== null) {
      selectedProducts.push({
        product_id: this.state.product_3,
        quantity: this.state.product_3_qty,
        price: this.state.product_3_price
      })
    }

    if(this.state.product_4 !== null) {
      selectedProducts.push({
        product_id: this.state.product_4,
        quantity: this.state.product_4_qty,
        price: this.state.product_4_price
      })
    }

    if(this.state.product_5 !== null) {
      selectedProducts.push({
        product_id: this.state.product_5,
        quantity: this.state.product_5_qty,
        price: this.state.product_5_price
      })
    }

    if(this.state.product_6 !== null) {
      selectedProducts.push({
        product_id: this.state.product_6,
        quantity: this.state.product_6_qty,
        price: this.state.product_6_price
      })
    }

    if(this.state.product_7 !== null) {
      selectedProducts.push({
        product_id: this.state.product_7,
        quantity: this.state.product_7_qty,
        price: this.state.product_7_price
      })
    }

    if(this.state.product_8 !== null) {
      selectedProducts.push({
        product_id: this.state.product_8,
        quantity: this.state.product_8_qty,
        price: this.state.product_8_price
      })
    }

    let order = {
      customer_id: this.state.customer_id,
      products: selectedProducts,
      staff_id: this.state.staff_id,
      status: this.state.status
    }

    console.log(order)

    Axios.post('orders/new', order, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => console.log(response))
  }

  render() {
    let { customers, availableProducts, rows } = this.state

    let activeRows = []

    for(let i = 1; i < rows; i++) {
      activeRows.push(
        <Form.Row className='mb-4'>
          <Col>
            <Form.Control as='select' name={'product_' + i} onChange={this.handleChange}>
              <option disabled selected>Select a Product</option>
              {availableProducts.map(x => <option value={x._id}>{x.name}</option>)}
            </Form.Control>
          </Col>
          <Col xs={2}>
            <Form.Control type='number' name={'product_' + i + '_qty'} defaultValue='1' onChange={this.handleChange} />
          </Col>
          <Col xs={1}>
            <Button type='button' variant='danger' className='w-100'><FontAwesomeIcon icon={faMinus} /></Button>
          </Col>
        </Form.Row>
      )
    }
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Customer</Form.Label>
            <Form.Control as='select' name='customer_id' onChange={this.handleChange}>
              <option disabled selected>Select a Customer</option>
              {customers.map(x => <option value={x._id}>{x.first_name + ' ' + x.last_name}</option>)}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <Form.Control as='select' name='status' onChange={this.handleChange}>
              <option value='quote' selected>Quote</option>
              <option value='invoice'>Invoice</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label>Products</Form.Label>
            {activeRows}
            <Form.Row>
              <Col>
                <Button type='button' onClick={() => this.handleAddRow()}>Add Product Row</Button>
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
        <Button type='submit' variant='success' className='d-block ml-auto mt-4'>Add Order</Button>
      </Form>
    )
  }
}