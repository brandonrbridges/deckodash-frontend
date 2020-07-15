import React from 'react'

import Axios from 'axios'

import { Alert, Button, Col, Form } from 'react-bootstrap'

import DeleteCustomerButton from '../DeleteCustomerButton/DeleteCustomerButton'

export default class EditCustomerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: null,
      first_name: null,
      last_name: null,
      address_line_one: null,
      address_line_two: null,
      address_city: null,
      address_county: null,
      address_postcode: null,
      email: null,
      phone: null
    }
  }

  componentDidMount() {
    Axios.get(`/customers/${ this.props.customerId }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => {
      let { customer } = response.data

      this.setState({
        customer,
        first_name: customer.first_name,
        last_name: customer.last_name,
        address_line_one: customer.address.line_one,
        address_line_two: customer.address.line_two,
        address_city: customer.address.city,
        address_county: customer.address.county,
        address_postcode: customer.address.postcode,
        email: customer.email,
        phone: customer.phone
      })
    })
  }
  
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    let { 
      first_name,
      last_name,
      address_line_one,
      address_line_two,
      address_city,
      address_county,
      address_postcode,
      email,
      phone
    } = this.state

    return (
      <>
        <Alert variant='info'>This form is currently locked.</Alert>
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' value={first_name} name='first_name' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' value={last_name} name='last_name' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <hr className='separator d-block my-4' />
          <Form.Row className='mb-4'>
            <Col>
              <Form.Label>Address Line One</Form.Label>
              <Form.Control type='text' value={address_line_one} name='address_line_one' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Address Line Two</Form.Label>
              <Form.Control type='text' value={address_line_two} name='address_line_two' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' value={address_city} name='address_city' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>County</Form.Label>
              <Form.Control type='text' value={address_county} name='address_county' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Postcode</Form.Label>
              <Form.Control type='text' value={address_postcode} name='address_postcode' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <hr className='separator d-block my-4' />
          <Form.Row className='mb-4'>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' value={email} name='email' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control type='text' value={phone} name='phone' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <Button variant='primary' type='submit'>Update user</Button>
          <DeleteCustomerButton customerId={this.props.customerId} className='float-right' />
        </Form>
      </>
    )
  }
}