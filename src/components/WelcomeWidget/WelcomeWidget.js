import React from 'react'

import { Container } from 'react-bootstrap'

import './WelcomeWidget.scss'

export default class WelcomeWidget extends React.Component {
  render() {
    return (
      <Container fluid className='WelcomeWidget'>
        <h1>Welcome back, {this.props.name}</h1>
      </Container>
    )
  }
}