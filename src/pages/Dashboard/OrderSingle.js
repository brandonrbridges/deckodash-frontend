import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardOrderSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      order: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/orders/${ params.id }`)
    .then(response => this.setState({ order: response.data.order }))
  }

  render() {
    let { order } = this.state

    if(!order ) {
      return <p>loading..</p>
    } else {
      return (
        <DashboardLayout>
          <Container fluid className='bg-white mb-4 py-5'>
            <Link to='/dashboard/orders' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to orders</Link>
            <h1>{order._id}</h1>
          </Container>
          <Container fluid>

          </Container>
        </DashboardLayout>
      )
    }
  }
}