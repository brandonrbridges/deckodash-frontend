import React from 'react'

import { Redirect } from 'react-router-dom'

import Axios from '../../config/axios'

import { Button, Col, Form } from 'react-bootstrap'

export default class AddCustomerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      address_line_one: null,
      address_line_two: null,
      address_city: null,
      address_county: null,
      address_postcode: null,
      done: false
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)

    Axios.post('customers/new', this.state, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ done: true }))
  }

  render() {
    let { done } = this.state

    if(done) return <Redirect to='/dashboard/customers' />

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' name='first_name' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' name='last_name' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' name='email' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Control type='text' name='phone' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Address Line One</Form.Label>
            <Form.Control type='text' name='address_line_one' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Address Line Two</Form.Label>
            <Form.Control type='text' name='address_line_two' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' name='address_city' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>County</Form.Label>
            <Form.Control type='text' name='address_county' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Postcode</Form.Label>
            <Form.Control type='text' name='address_postcode' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Button type='submit' variant='success' className='d-block ml-auto'>Add Customer</Button>
      </Form>
    )
  }
}