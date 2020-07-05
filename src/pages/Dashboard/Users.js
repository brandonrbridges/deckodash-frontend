import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import AddUserButton from '../../components/AddUserButton/AddUserButton'
import UserTable from '../../components/UserTable/UserTable'

export default class DashboardUsers extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Users</h1>
        </Container>
        <Container fluid>
          <AddUserButton className='d-block mb-4' />
          <UserTable />
          <AddUserButton className='d-block mt-4 ml-auto' />
        </Container>
      </DashboardLayout>
    )
  }
}