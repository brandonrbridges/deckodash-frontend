import React from 'react'

import './DashboardWidget.scss'

export default class DashboardWidget extends React.Component {
  render() {
    return (
      <div className={`widget ${this.props.className}`}>
        <h6 className='title'>{this.props.title}</h6>
        {this.props.children}
      </div>
    )
  }
}