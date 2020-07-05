import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LoginForm from '../components/LoginForm/LoginForm'

import WoodGrainBG from '../assets/svgs/wood-grain.svg'

export default class Login extends React.Component {
  render() {
    return (
      <Container fluid style={maxHeight}>
        <Row style={maxHeight}>
          <Col className='px-5' style={maxHeight}>
            <Container className='d-flex flex-column justify-content-center px-5' style={maxHeight}>
              <div className='px-5'>
              <h2>Login to Deckodash</h2>
              <p className='text-muted'>Please enter your account details below to login.</p>
              <LoginForm />
              <p className='mb-0 mt-4 small text-muted'>Can't login? Please contact a Manager.</p>
              </div>
            </Container>  
          </Col>
          <Col className='bg-dark' style={woodgrain}>
            <Container className='d-flex align-items-center flex-column justify-content-center px-5' style={maxHeight}>
              <h1 className='text-white'>Deckodash</h1>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

let maxHeight = {
  height: '100vh'
}

let woodgrain = {
  backgroundImage: `linear-gradient(to bottom, rgba(36, 47, 105, 1), rgba(36, 47, 105, .75), rgba(36, 47, 105, .25)), url(${ WoodGrainBG })`,
  height: '100vh'
}