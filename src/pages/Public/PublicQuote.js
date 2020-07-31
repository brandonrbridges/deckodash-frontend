/** React & Router */
import React from 'react'
import { Redirect } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios'

/** React Bootstrap */
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

/** Components */
import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

export default class PublicQuote extends React.Component {
  constructor() {
    super()

    this.state = {
      customer: null,
      order: null,
      user: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`public/${ params.id }`)
    .then(response => this.setState({ 
      customer: response.data.customer,
      order: response.data.order,
      user: response.data.user
    }))
  }

  handleInput = (accepted) => {
    const { match: { params } } = this.props 

    Axios.put(`public/${ params.id }/update?quote_accepted=${ accepted }`)
    .then(response => this.setState({ order: response.data.order }))
  }

  render() {
    let { 
      customer,
      order,
      user
    } = this.state

    if(!customer) return <p>No customer found with this order..</p>
    
    if(!order) return <p>No order found with this ID..</p>

    if(order.status === 'accepted') return <p>This quote has been accepted</p>
    
    if (order.status === 'declined') return <p>This quote has been declined</p>

    if(order.status === 'invoice') return <Redirect to={`/invoice/${ order._id}`} />

    return (
      <>
        <Container fluid className='bg-dark mb-5'>
          <Container className='py-5'>
            <Row>
              <Col>
                <Badge variant={order.status} className='badge-large mb-4'>{order.status}</Badge>
                <h1 className='text-white'>{order.order_id}</h1>
                <h6 className='mb-0 text-muted'>Quote generated by {user.first_name} {user.last_name}</h6>
              </Col>
              <Col className='border-left pl-5'>
                <h5 className='mb-0 text-muted'>Deckorum Composite Decking,</h5>
                <p className='mb-0 text-muted'>
                  Technology Centre,
                  <br />
                  Church,
                  <br />
                  BB5 4HU
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <DashboardWidget title='Quote Details'>
            <Row>
              <Col>
                <h6 className='text-muted'>Quote for</h6>
                <h3>{customer.first_name} {customer.last_name}</h3>
                <Row>
                  <Col>
                    <p className='mb-0 text-muted'>
                      {customer.address.line_one},
                      <br />
                      {customer.address.line_two},
                      <br />
                      {customer.address.city},
                      <br />
                      {customer.address.county},
                      <br />
                      {customer.address.postcode}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className='border-left pl-5'>
                <h6 className='text-muted'>Total Quote</h6>
                <h3 className='mb-5'>£1,000</h3>
                <h6 className='text-muted'>Customer Response</h6>
                <Button variant='success' className='mr-4' onClick={() => { this.handleInput(true) }}>Accept Quote</Button>
                <Button variant='danger' onClick={() => { this.handleInput(false) }}>Decline Quote</Button>
              </Col>
            </Row>
          </DashboardWidget>
          <DashboardWidget title='Items on Quote'>
            <p>Item #1</p>
          </DashboardWidget>
        </Container>
      </>
    )
  }
}