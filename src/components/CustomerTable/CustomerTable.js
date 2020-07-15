import React from 'react'

import { Link } from 'react-router-dom'

// import Axios from 'axios'
import Axios from '../../config/axios'

import moment from 'moment'

import { Dropdown, Table } from 'react-bootstrap'

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
    Axios.get('customers', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ customers: response.data.customers }))
  }

  render() {
    let { customers } = this.state

    if(customers.length === 0) {
      return <p className='text-muted'>No customers found..</p>
    }

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date Added</th>
            <th>Last Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {customers.map(x => <CustomerRow id={x._id} firstName={x.first_name} lastName={x.last_name} dateAdded={x.date_added} lastUpdated={x.last_updated} key={x._id} />)}
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
          <Link to={`/dashboard/customers/${this.props.id}`}>
            {this.props.firstName} {this.props.lastName}
          </Link>
        </td>
        <td>{moment(this.props.dateAdded).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.dateAdded).fromNow()})</span></td>
        <td>{moment(this.props.lastUpdated).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.lastUpdated).fromNow()})</span></td>
        <td className='text-right'>
          <Link to={`/dashboard/customers/${this.props.id}`} className='btn btn-primary btn-sm'>View</Link>
          {/* <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button> */}
          <Dropdown className='ml-3 options'>
            <Dropdown.Toggle variant='secondary' size='sm'><FontAwesomeIcon icon={faEllipsisV} /></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => console.log('clicked dropdown item')}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    )
  }
}