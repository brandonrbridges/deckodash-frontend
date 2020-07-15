/** React & React Router */
import React from 'react'
import { Link } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios' 

/** Modukles */
import moment from 'moment'

/** React Bootstrap */
import { Button, Table } from 'react-bootstrap'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

export default class UserTable extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    Axios.get('users', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ users: response.data.users }))
  }
  
  render() {
    let { users } = this.state

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
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
        <td>
          <Link to={`/dashboard/users/${this.props.userId}`}>
            {this.props.firstName} {this.props.lastName}
          </Link>
        </td>
        <td>{this.props.email}</td>
        <td>{this.props.role}</td>
        <td>{moment(this.props.dateJoined).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.dateJoined).fromNow()})</span></td>
        <td className='text-right'>
          <Link to='/dashboard' className='btn btn-primary btn-sm'>View</Link>
          <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button>
        </td>
      </tr>
    )
  }
}