/** React & Router */
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios'

/** Modules */
import moment from 'moment'

/** Helpers */
import { isAuthenticated } from '../../helpers/Authentication'

/** React Bootstrap */
import { Badge, Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap'

/** Layouts */
import DashboardLayout from '../../layouts/DashboardLayout'

/** Components */
import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardUserSingle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: true,
      customer: null,
      first_name: null,
      last_name: null,
      order: []
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) this.setState({ auth: false })
    
    const { match: { params } } = this.props
    
    Axios.get(`users/${ params.id }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ order: response.data.order, user: response.data.user }))
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { 
      auth,
      user,
      order
    } = this.state

    if(!auth) return <Redirect to='/login' />

    if(!user ) return <p>loading..</p>

    return (
      <DashboardLayout>
        <Container fluid className='bg-white pt-5 pb-4'>
          <Link to='/dashboard/users' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to users</Link>
          <h1>{user.first_name + ' ' + user.last_name}</h1>
        </Container>

        <Tab.Container defaultActiveKey='summary'>
          <Container fluid className='bg-white mb-4'>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey='summary'>Summary</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='information'>Edit Information</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          <Container fluid>
          <Tab.Content>
            <Tab.Pane eventKey='summary'>
              <Row>
                <Col>
                  <DashboardWidget title='Orders' className='mb-4'>
                    <Table borderless>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Status</th>
                          <th>Date Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.map(x =>
                          <tr>
                            <td>
                              <Link to={`/dashboard/orders/${x.order_id}`}>
                                {x.order_id}
                              </Link>
                            </td>
                            <td>
                              <Badge variant={x.status}>{x.status}</Badge>
                            </td>
                            <td>{moment(x.date_created).format('Do MMMM YYYY')} <span className='small text-muted'>({moment(x.date_created).fromNow()})</span></td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </DashboardWidget>
                </Col>
                <Col>
                  <DashboardWidget title='User Details' className='mb-4'>
                    <p className=''><b>Role:</b> {user.role}</p>
                    <p className=''><b>Date Joined:</b> {moment(user.date_created).format('Do MMMM YYYY')} <span className='small text-muted'>({moment(user.date_created).fromNow()})</span></p>
                  </DashboardWidget>
                  <DashboardWidget title='User Notes'>
                    This is the area to enter user notes (only manager's can see this)
                  </DashboardWidget>
                </Col>
              </Row>
              
              
            </Tab.Pane>
            <Tab.Pane eventKey='information'>
              <DashboardWidget title={`Edit ${user.first_name} ${user.last_name}'s details`}>
              </DashboardWidget>
            </Tab.Pane>
          </Tab.Content>
          </Container>
        </Tab.Container>  
      </DashboardLayout>
    )
  }
}