import React from 'react'

import Axios from 'axios'

import { Button, Container, Form } from 'react-bootstrap'

export default class Register extends React.Component {
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

    Axios.post('http://localhost:8080/auth/register', this.state)
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' name='email' onChange={this.handleChange} />
          <Form.Label>Password</Form.Label>
          <Form.Control type='text' name='password' onChange={this.handleChange} />
          <Button type='submit' variant='success'>Register</Button>
        </Form>
      </Container>
    )
  }
}