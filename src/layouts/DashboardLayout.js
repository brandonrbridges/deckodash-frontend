import React from 'react'

import Navigation from '../components/Navigation/Navigation'

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        {this.props.children}
      </div>
    )
  }
}