/** React */
import React from 'react'

/** Axios */
import Axios from 'axios'

/** Helpers */
import { fetchUser } from '../../helpers/Authentication'

/** React Bootstrap */
import { Button, Col, Form } from 'react-bootstrap'

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      customer_id: null,
      products: [],
      staff_id: null,
      status: 'quote',
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/v1/customers', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ customers: response.data.customers }))

    if(fetchUser()) {
      let jwtUser = fetchUser()

      this.setState({ staff_id: jwtUser._id })
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

    Axios.post('http://localhost:8080/api/v1/orders/new', this.state, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => console.log(response))
  }

  render() {
    let { customers } = this.state
    
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
        <Button type='submit' variant='success' className='d-block ml-auto'>Add Order</Button>
      </Form>
    )
  }
}