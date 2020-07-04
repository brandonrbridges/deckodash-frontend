import React from 'react'

import { login } from '../../helpers/Authentication'

import { Button, Form } from 'react-bootstrap'

export default class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      email: null,
      password: null
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

    login(this.state)
    .then(token => window.location = '/dashboard')
    .catch(error => alert(error))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' name='email' className='mb-4' onChange={this.handleChange} />
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' className='mb-4' onChange={this.handleChange} />
        <Button type='submit' variant='primary'>Login</Button>
      </Form>
    )
  }
}