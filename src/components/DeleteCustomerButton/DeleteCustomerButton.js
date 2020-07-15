import React from 'react'

import { Redirect } from 'react-router-dom'

import Axios from '../../config/axios'

import { Button, Modal } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/pro-solid-svg-icons'

export default class DeleteCustomerButton extends React.Component {
  constructor() {
    super()

    this.state = {
      deleted: false,
      showModal: false
    }
  }

  handleClose = () => this.setState({ showModal: false })

  handleDelete = (_id) => {
    Axios.delete('customers/delete', { data: { _id }, headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    this.setState({ deleted: true })
  }

  handleShow = () => this.setState({ showModal: true })

  render() {
    let { deleted, showModal } = this.state 

    if(deleted) {
      return <Redirect to='/dashboard/customers' />
    }

    return (
      <>
        <Button variant='danger' className={this.props.className} onClick={this.handleShow}>Delete Customer<FontAwesomeIcon icon={faTrashAlt} className='ml-2 small' /></Button>

        <Modal centered animation={false} show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Are you sure you want to delete this customer?
          </Modal.Header>
          <Modal.Body>
            <Button variant='danger' onClick={() => this.handleDelete(this.props.customerId)}>Delete Customer</Button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}