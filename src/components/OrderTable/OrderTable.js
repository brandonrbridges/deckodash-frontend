/** React & React Router */
import React from 'react'
import { Link } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios'

/** Moment */
import moment from 'moment'

/** React Bootstrap */
import { Badge, Button, Form, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './OrderTable.scss'

export default class OrderTable extends React.Component {
  constructor() {
    super() 

    this.state = {
      orders: []
    }
  }
  
  componentDidMount() {
    Axios.get('orders?status=accepted', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ orders: response.data.orders }))
  }

  render() {
    let { orders } = this.state

    if(orders.length === 0) {
      return <p className='text-muted'>No orders were found..</p>
    }

    return (
      <>
        <Table borderless responsive>
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Value</th>
              <th>Product Count</th>
              <th>Status</th>
              <th>Order Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(x => <OrderRow orderId={x.order_id} customer={x.customer} productCount={x.products.length} status={x.status} orderDate={x.date_created} />)}
          </tbody>
        </Table>
      </>
    )
  }
}

class OrderRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faFileAlt} className='text-center text-muted' /></td>
        <td>
          <Link to={`/dashboard/orders/${this.props.orderId}`}>{this.props.orderId}</Link>
        </td>
        <td>
          <Link to={`/dashboard/customers/${this.props.customer._id}`}>
            {this.props.customer.first_name} {this.props.customer.last_name}
          </Link>
        </td>
        <td>£{this.props.value}</td>
        <td>{this.props.productCount}</td>
        <td><Badge variant={this.props.status}>{this.props.status}</Badge></td>
        <td>{moment(this.props.orderDate).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.orderDate).fromNow()})</span></td>
        <td className='text-right'>
          <Link to={`/dashboard/orders/${this.props.orderId}`} className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}