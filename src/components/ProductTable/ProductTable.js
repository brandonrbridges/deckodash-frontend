import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import moment from 'moment'

import { Button, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './ProductTable.scss'

export default class ProductTable extends React.Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/products', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ products: response.data.products }))
  }
  
  render() {
    let { products } = this.state

    if(products.length === 0) {
      return <p className='text-muted'>No products found..</p>
    }

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Sale Price</th>
            <th>SKU</th>
            <th>Date Added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(x => <OrderRow productId={x._id} name={x.name} price={x.price} salePrice={x.sale_price} sku={x.sku} dateAdded={x.date_created} key={x._id} />)}
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
        <td>
          <Link to={`/dashboard/products/${this.props.productId}`}>{this.props.productId}</Link>
        </td>
        <td>{this.props.name}</td>
        <td>£{this.props.price}</td>
        <td>£{this.props.salePrice}</td>
        <td>{this.props.sku}</td>
        <td>{moment(this.props.dateAdded).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.dateAdded).fromNow()})</span></td>
        <td className='text-right'>
          <Link to={`/dashboard/products/${this.props.productId}`} className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}