import React from 'react'

/**
 * React Router
 */
import { Link } from 'react-router-dom'

import Axios from 'axios'

/**
 * React Bootstrap
 */
import { Col, Container, Row, Table } from 'react-bootstrap'

/**
 * Imports
 */
import moment from 'moment'

/**
 * Layout
 */
import DashboardLayout from '../layouts/DashboardLayout'

/**
 * Component
 */
import DashboardWidget from '../components/DashboardWidget/DashboardWidget'
import IconBubble from '../components/IconBubble/IconBubble'

/**
 * Font Awesome
 */
import { faFile, faFileAlt, faUser, faUsers } from '@fortawesome/pro-solid-svg-icons'

export default class Dashboard extends React.Component {
  constructor() {
    super() 

    this.state = {
      customers: [],
      orders: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/customers', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ customers: response.data.customers }))

    Axios.get('http://localhost:8080/api/orders', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ orders: response.data.orders }))
  }
  
  render() {
    let { 
      customers,
      orders 
    } = this.state

    let open_quotes = 0

    return (
      <DashboardLayout id='Dashboard'>
        <Container fluid className='bg-dark dashboard-overview mb-4 py-5'>
          <h4 className='mb-5 text-white'>Welcome, {this.props.user} 👋🏻</h4>
          <Row>
            <Col>
              <p className='h6 text-muted'>Total Revenue in {moment(new Date()).format('MMMM')}</p>
              <p className='h1 text-white'>£0</p>
            </Col>
            <Col>
              <p className='h6 text-muted'>Total Orders in {moment(new Date()).format('MMMM')}</p>
              <p className='h1 text-white'>0</p>
            </Col>
            <Col>
              <p className='h6 text-muted'>Today's Revenue</p>
              <p className='h1 text-white'>£0</p>
            </Col>
            <Col>
              <p className='h6 text-muted'>Today's Orders</p>
              <p className='h1 text-white'>0</p>
            </Col>
            <Col>
              <p className='h6 text-muted'>Open Quotes</p>
              <p className='h1 text-white'>
                {
                  orders.forEach(x => {
                    if(x.status === 'quote') return open_quotes++
                  })
                }
                {open_quotes}
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className='mb-4'>
            <Col>
              <DashboardWidget title='Sales To Date (This Year)'>
                Sales
              </DashboardWidget>
            </Col>
            <Col>
              <DashboardWidget title='Top Selling Products'>
                Sales
              </DashboardWidget>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <DashboardWidget title='New Customers'>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(x => <CustomerRow customerId={x._id} firstName={x.first_name} lastName={x.last_name} key={x._id} />)}
                  </tbody>
                </Table>
              </DashboardWidget>
            </Col>
            <Col>
              <DashboardWidget title='Pending Quotes'>
                {
                  orders
                  .filter(x => {
                    return x.status === 'quote'
                  })
                  .map(y => {
                    return <p key={y.id}><a href={`/dashboard/orders/${y._id}`}>{y._id}</a></p>
                  })
                }
              </DashboardWidget>
            </Col>
            <Col>
              <DashboardWidget title='Pending Invoices'>
                {
                  orders
                  .filter(x => {
                    return x.status === 'invoice'
                  })
                  .map(y => {
                    return <p key={y.id}><a href={`/dashboard/orders/${y._id}`}>{y._id}</a></p>
                  })
                }
              </DashboardWidget>
            </Col>
            <Col>
              <DashboardWidget title='Pending Delivery'>
                {
                  orders
                  .filter(x => {
                    return x.status === 'pending-delivery'
                  })
                  .map(y => {
                    return <p key={y.id}><a href={`/dashboard/orders/${y._id}`}>{y._id}</a></p>
                  })
                }
              </DashboardWidget>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconBubble icon={faUser} className='mb-3' />
              <h6>Customer Lookup</h6>
              <Link to='/dashboard/customers'>Lookup customers</Link>
            </Col>
            <Col>
              <IconBubble icon={faFileAlt} className='mb-3' />
              <h6>Order Lookup</h6>
              <Link to='/dashboard/orders'>Lookup orders</Link>
            </Col>
            <Col>
              <IconBubble icon={faUsers} className='mb-3' />
              <h6>Manage Users</h6>
              <Link to='/dashboard/users'>Add or update users</Link>
            </Col>
            <Col>
              <IconBubble icon={faFile} className='mb-3' />
              <h6>Recent Activity</h6>
              <Link to='/dashboard'>Review recent activity</Link>
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    )
  }
}

class CustomerRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='small'>
          <Link to={`/dashboard/customers/${this.props.customerId}`}>{this.props.firstName}</Link>
        </td>
        <td className='small'>
          <Link to={`/dashboard/customers/${this.props.customerId}`}>
            {this.props.lastName}
          </Link>
        </td>
      </tr>
    )
  }
}