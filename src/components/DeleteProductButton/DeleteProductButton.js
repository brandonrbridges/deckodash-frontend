import React from 'react'

import { Redirect } from 'react-router-dom'

import Axios from 'axios'

import { Button, Modal } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/pro-solid-svg-icons'

export default class DeleteProductButton extends React.Component {
  constructor() {
    super()

    this.state = {
      deleted: false,
      showModal: false
    }
  }

  handleClose = () => this.setState({ showModal: false })

  handleDelete = (_id) => {
    Axios.delete('http://localhost:8080/api/products/delete', { data: { _id }, headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    this.setState({ deleted: true })
  }

  handleShow = () => this.setState({ showModal: true })

  render() {
    let { deleted, showModal } = this.state 

    if(deleted) {
      return <Redirect to='/dashboard/products' />
    }

    return (
      <>
        <Button variant='danger' className={this.props.className} onClick={this.handleShow}>Delete Product<FontAwesomeIcon icon={faTrashAlt} className='ml-2 small' /></Button>

        <Modal centered animation={false} show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Are you sure you want to delete this product?
          </Modal.Header>
          <Modal.Body>
            <Button variant='danger' onClick={() => this.handleDelete(this.props.productId)}>Delete Product</Button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}