import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios' 

import { Button, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

// import './StaffTable.scss'

export default class UserTable extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/users', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ users: response.data.users }))
  }
  
  render() {
    let { users } = this.state

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Staff ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date Joined</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(x => <UserRow userId={x._id} firstName={x.first_name} lastName={x.last_name} email={x.email} role={x.role} dateJoined={x.date_created} />)}
        </tbody>
      </Table>
    )
  }
}

class UserRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faKey} className='text-center text-muted' /></td>
        <td>{this.props.userId}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
        <td>{this.props.role}</td>
        <td>{this.props.dateJoined}</td>
        <td className='text-right'>
          <Link to='/dashboard' className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}