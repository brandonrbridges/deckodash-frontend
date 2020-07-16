import React from 'react'

import Axios from '../../config/axios'

import { Button, Col, Form } from 'react-bootstrap'

export default class AddUserForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      first_name: null,
      last_name: null,
      role: null
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

    Axios.post('users/new', this.state, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => console.log(response))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' name='email' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control type='text' name='password' onChange={this.handleChange} />
          </Col>
        </Form.Row>
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
            <Form.Label>Role</Form.Label>
            <Form.Control as='select' name='role' custom onChange={this.handleChange}>
              <option value='sales'>Sales Team</option>              
              <option value='delivery'>Delivery Team</option>
              <option value='manager'>Manager</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Button type='submit' variant='success' className='d-block ml-auto'>Add User</Button>
      </Form>
    )
  }
}