import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardCustomerSingle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: null,
      first_name: null,
      last_name: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/customers/${ params.id }`)
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
      customer,
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

    if(!customer ) {
      return <p>loading..</p>
    } else {
      return (
        <DashboardLayout>
          <Container fluid className='bg-white mb-4 py-5'>
            <Link to='/dashboard/customers' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to orders</Link>
            <h1>{first_name + ' ' + last_name}</h1>
          </Container>
          <Container fluid>
            <Row>
              <Col>
                <DashboardWidget title='Customer Notes' className='mb-4'>
                  This is the area to enter customer notes
                </DashboardWidget>
                <DashboardWidget title='Quotes' className='mb-4'>
                  No quotes found for this user
                </DashboardWidget>
                <DashboardWidget title='Invoices' className='mb-4'>
                  No invoices found for this user
                </DashboardWidget>
                <DashboardWidget title='Deliveries'>
                  No deliveries found for this user
                </DashboardWidget>
              </Col>
              <Col>
                <DashboardWidget title={`Edit ${customer.first_name} ${customer.last_name}'s details`}>
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
                  </Form>
                </DashboardWidget>
              </Col>
            </Row>
          </Container>
        </DashboardLayout>
      )
    }
  }
}