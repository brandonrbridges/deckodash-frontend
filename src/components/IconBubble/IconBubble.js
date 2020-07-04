import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './IconBubble.scss'

export default class IconBubble extends React.Component {
  render() {
    return (
      <div className={`icon-bubble ${this.props.className}`}>
        <FontAwesomeIcon icon={this.props.icon} />
      </div>
    )
  }
}