import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardProductSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      product: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/products/${ params.id }`)
    .then(response => this.setState({ product: response.data.product }))
  }

  render() {
    let { product } = this.state

    if(!product ) {
      return <p>loading..</p>
    } else {
      return (
        <DashboardLayout>
          <Container fluid className='bg-white mb-4 py-5'>
            <Link to='/dashboard/products' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to products</Link>
            <h1>{product.name}</h1>
          </Container>
          <Container fluid>

          </Container>
        </DashboardLayout>
      )
    }
  }
}