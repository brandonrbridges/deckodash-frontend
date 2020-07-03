import React from 'react'

import { Link } from 'react-router-dom'

import { Button, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './ProductTable.scss'

export default class ProductTable extends React.Component {
  render() {
    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Date Added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <OrderRow
            productId='DK18524-432'
            name='Wood Grain Grand Oak Composite Decking'
            price='49.95'
            sku='grand-oak-decking'
            dateAdded='29th June 2019'
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
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faBox} className='text-center text-muted' /></td>
        <td>{this.props.productId}</td>
        <td>{this.props.name}</td>
        <td>£{this.props.price}</td>
        <td>{this.props.sku}</td>
        <td>{this.props.dateAdded}</td>
        <td className='text-right'>
          <Link to='/dashboard' className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}