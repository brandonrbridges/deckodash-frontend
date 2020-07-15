/** React */
import React from 'react'

/** Axios */
import Axios from 'axios'

/** React Bootstrap */
import { Alert, Button, Col, Form } from 'react-bootstrap'

/** Components */
import DeleteProductButton from '../DeleteProductButton/DeleteProductButton'

export default class EditProductForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      name: null,
      sku: null,
      description: null,
      price: null,
      sale_price: null,
      dimensions_height: null,
      dimensions_width: null,
      dimensions_depth: null,
      // category_id: null
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/api/v1/products/${ this.props.productId }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => {
      let { product } = response.data

      this.setState({
        product,
        name: product.name,
        sku: product.sku,
        description: product.description,
        price: product.price,
        sale_price: product.sale_price,
        dimensions_height: product.dimensions.height,
        dimensions_width: product.dimensions.width,
        dimensions_depth: product.dimensions.depth,
        // category_id: product.category_id
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
      name,
      sku,
      description,
      price,
      sale_price,
      dimensions_height,
      dimensions_width,
      dimensions_depth,
      // category_id
    } = this.state

    return (
      <>
        <Alert variant='info'>This form is currently locked.</Alert>
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' value={name} name='name' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>SKU</Form.Label>
              <Form.Control type='text' value={sku} name='sku' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <hr className='separator d-block my-4' />
          <Form.Row className='mb-4'>
            <Col>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" value={description} name='description' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <hr className='separator d-block my-4' />
          <Form.Row>
            <Col>
              <Form.Label>Height</Form.Label>
              <Form.Control type='text' value={dimensions_height} name='dimensions_height' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Width</Form.Label>
              <Form.Control type='text' value={dimensions_width} name='dimensions_width' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Depth</Form.Label>
              <Form.Control type='text' value={dimensions_depth} name='dimensions_depth' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <hr className='separator d-block my-4' />
          <Form.Row className='mb-4'>
            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Control type='text' value={price} name='price' onChange={this.handleChange} disabled />
            </Col>
            <Col>
              <Form.Label>Sale Price</Form.Label>
              <Form.Control type='text' value={sale_price} name='sale_price' onChange={this.handleChange} disabled />
            </Col>
          </Form.Row>
          <Button variant='primary' type='submit'>Update product</Button>
          <DeleteProductButton productId={this.props.productId} className='float-right' />
        </Form>
      </>
    )
  }
}