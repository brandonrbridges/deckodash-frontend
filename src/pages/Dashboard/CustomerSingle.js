import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardCustomerSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      customer: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/customers/${ params.id }`)
    .then(response => this.setState({ customer: response.data.customer }))
  }

  render() {
    let { customer } = this.state

    if(!customer ) {
      return <p>loading..</p>
    } else {
      return (
        <DashboardLayout>
          <Container fluid className='bg-white mb-4 py-5'>
            <Link to='/dashboard/customers' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to orders</Link>
            <h1>{customer.first_name + ' ' + customer.last_name}</h1>
          </Container>
          <Container fluid>

          </Container>
        </DashboardLayout>
      )
    }
  }
}