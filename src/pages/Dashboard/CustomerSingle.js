import React from 'react'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import EditCustomerForm from '../../components/EditCustomerForm/EditCustomerForm'
import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardCustomerSingle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: null,
      first_name: null,
      last_name: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    
    Axios.get(`http://localhost:8080/api/customers/${ params.id }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => {
      let { customer } = response.data

      this.setState({ customer })
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { 
      customer,
    } = this.state

    if(!customer ) {
      return <p>loading..</p>
    } else {
      return (
        <DashboardLayout>
          <Container fluid className='bg-white pt-5 pb-4'>
            <Link to='/dashboard/customers' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to orders</Link>
            <h1>{customer.first_name + ' ' + customer.last_name}</h1>
          </Container>

          <Tab.Container defaultActiveKey='first'>
            <Container fluid className='bg-white mb-4'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Edit Profile</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <Container fluid>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  <Col>
                    <DashboardWidget title='Orders' className='mb-4'>
                      Display here: quotes, invoices, deliveries and complete orders
                    </DashboardWidget>
                  </Col>
                  <Col>
                    <DashboardWidget title='Customer Details' className='mb-4'>
                      This is the area to display customer details
                    </DashboardWidget>
                    <DashboardWidget title='Customer Notes'>
                      This is the area to enter customer notes
                    </DashboardWidget>
                  </Col>
                </Row>
                
                
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <DashboardWidget title={`Edit ${customer.first_name} ${customer.last_name}'s details`}>
                  <EditCustomerForm customerId={customer._id} />
                </DashboardWidget>
              </Tab.Pane>
            </Tab.Content>
            </Container>
          </Tab.Container>  
        </DashboardLayout>
      )
    }
  }
}