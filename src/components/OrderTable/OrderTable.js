import React from 'react'

import { Link } from 'react-router-dom'

import { Button, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './OrderTable.scss'

export default class OrderTable extends React.Component {
  render() {
    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Value</th>
            <th>Stage</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <OrderRow
            orderId='DK12324-123'
            name='John Doe'
            value='243'
            stage='Quote'
            orderDate='1st July 2020'
          />
          <OrderRow
            orderId='DK12324-123'
            name='John Doe'
            value='243'
            stage='Quote'
            orderDate='1st July 2020'
          />
        </tbody>
      </Table>
    )
  }
}

class OrderRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faFileAlt} className='text-center text-muted' /></td>
        <td>{this.props.orderId}</td>
        <td>{this.props.name}</td>
        <td>£{this.props.value}</td>
        <td>{this.props.stage}</td>
        <td>{this.props.orderDate}</td>
        <td className='text-right'>
          <Link to='/dashboard' className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}