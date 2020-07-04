import React from 'react'

import { Redirect } from 'react-router-dom'

import { isAuthenticated } from '../helpers/Authentication'

import Navigation from '../components/Navigation/Navigation'

export default class DashboardLayout extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: true
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) {
      this.setState({ auth: false })
    }
  }

  render() {
    let { auth } = this.state

    return (
      <>
        {((auth) ? '' : <Redirect to='/login' />)}
        
        <Navigation />

        {this.props.children}
      </>
    )
  }
}