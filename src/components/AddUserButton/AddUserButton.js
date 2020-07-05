import React from 'react'

import { Button, Modal } from 'react-bootstrap'

import AddUserForm from '../AddUserForm/AddUserForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'

export default class AddUserButton extends React.Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }
  }

  handleClose = () => this.setState({ showModal: false })

  handleShow = () => this.setState({ showModal: true })
  
  render() {
    let { showModal } = this.state 

    return (
      <>
        <Button variant='success' className={this.props.className} onClick={this.handleShow}>Add User<FontAwesomeIcon icon={faPlus} className='ml-2 small' /></Button>

        <Modal centered size='lg' animation={false} show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Add User
          </Modal.Header>
          <Modal.Body>
            <AddUserForm />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}