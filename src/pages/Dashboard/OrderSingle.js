/** React & Router */
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

/** Axios */
import Axios from 'axios'

/** Helpers */
import { isAuthenticated } from '../../helpers/Authentication'

/** React Bootstrap */
import { Container } from 'react-bootstrap'

/** Layouts */
import DashboardLayout from '../../layouts/DashboardLayout'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardOrderSingle extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true,
      order: null
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) this.setState({ auth: false })
    
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/orders/${ params.id }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ order: response.data.order }))
  }

  render() {
    let { 
      auth,
      order 
    } = this.state

    if(!auth) return <Redirect to='/login' />

    if(!order) return <p>loading..</p>

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