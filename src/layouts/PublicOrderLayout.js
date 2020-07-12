import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

export default class PublicOrderLayout extends React.Component {
  constructor() {
    super()

    this.state = {
      order: null
    }
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <>
        <Container>
          <h1>Public View</h1>
          {this.props.children}
        </Container>
      </>
    )
  }
}