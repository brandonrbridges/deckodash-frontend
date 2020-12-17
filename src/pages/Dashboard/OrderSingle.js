/** React & Router */
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios'

/** Helpers */
import { isAuthenticated } from '../../helpers/Authentication'

/** React Bootstrap */
import { Badge, Col, Container, Row } from 'react-bootstrap'

/** Layouts */
import DashboardLayout from '../../layouts/DashboardLayout'

/** Components */
import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardOrderSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true,
      customer: null,
      order: null,
      user: null
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) this.setState({ auth: false })
    
    const { match: { params } } = this.props
    
    Axios.get(`orders/${ params.id }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ 
      customer: response.data.customer,
      order: response.data.order,
      user: response.data.user 
    }))
  }

  render() {
    let { 
      auth,
      customer,
      order,
      user
    } = this.state

    if(!auth) return <Redirect to='/login' />

    if(!order) return <p>loading..</p>

    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <Link to='/dashboard/orders' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to orders</Link>
          <Badge variant={order.status} className='badge-large mb-2'>{order.status}</Badge>
          <h1>{order.order_id}</h1>
          <p className='mb-0'>Order created by {user.first_name} {user.last_name}</p>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <DashboardWidget title='Items'>
                {JSON.stringify(order.products)}
              </DashboardWidget>
              <DashboardWidget title='Tools'>
                <Link to={`/${order.status}/${order._id}`}>View Public Link</Link>
              </DashboardWidget>
              <DashboardWidget title='Delivery Map'>
                {(order.status == 'pending-delivery' ? <DeliveryMap address={customer.address} /> : '')}
              </DashboardWidget>
            </Col>
            <Col>
              <DashboardWidget title='Total'>
                <h2>£1000</h2>
              </DashboardWidget>
              <DashboardWidget title='Customer Information'>
                <p className='font-weight-bold mb-0'>{customer.first_name} {customer.last_name}</p>
                <p className='mb-0'>
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
              </DashboardWidget>
              <DashboardWidget title='Recent Activity'>

              </DashboardWidget>
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    )
  }
}

class DeliveryMap extends React.Component {
  render() {
    return (
      <div className='bg-light p-5'>Map</div>
    )
  }
}