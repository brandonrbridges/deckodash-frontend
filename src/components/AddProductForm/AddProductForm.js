import React from 'react'

import Axios from 'axios'

import { Button, Col, Form, InputGroup } from 'react-bootstrap'

export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      sku: null,
      price: null,
      sale_price: null,
      height: null,
      width: null,
      depth: null,
      description: null
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

    Axios.post('http://localhost:8080/api/products/new', this.state, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => console.log(response))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='name' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>SKU</Form.Label>
            <Form.Control type='text' name='sku' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>£</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='number' name='price' onChange={this.handleChange} />
            </InputGroup>
          </Col>
          <Col>
            <Form.Label>Sale Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>£</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='number' name='sale_price' onChange={this.handleChange} />
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Height</Form.Label>
            <Form.Control type='number' name='height' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Width</Form.Label>
            <Form.Control type='number' name='width' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>Depth</Form.Label>
            <Form.Control type='number' name='depth' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' name='description' rows='4' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Button type='submit' variant='success' className='d-block ml-auto'>Add Product</Button>
      </Form>
    )
  }
}