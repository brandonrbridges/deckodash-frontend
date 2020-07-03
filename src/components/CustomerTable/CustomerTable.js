import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Button, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './CustomerTable.scss'

export default class CustomerTable extends React.Component {
  constructor() {
    super()

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/customers')
    .then(response => this.setState({ customers: response.data.customers }))
  }

  render() {
    let { customers } = this.state

    if(customers.length == 0) {
      return <p className='text-muted'>No customers found..</p>
    }

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Date Added</th>
            <th>Value</th>
            <th>Last Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {customers.map(x => <CustomerRow id={x._id} name={x.first_name + ' ' + x.last_name} key={x._id} />)}
        </tbody>
      </Table>
    )
  }
}

class CustomerRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faUser} className='text-center text-muted' /></td>
        <td>
          <Link to={`/dashboard/customers/${this.props.id}`}>{this.props.id}</Link>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.dateAdded}</td>
        <td>{this.props.value}</td>
        <td>{this.props.lastUpdated}</td>
        <td className='text-right'>
          <Link to={`/dashboard/customers/${this.props.id}`} className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}