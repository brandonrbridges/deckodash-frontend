import React from 'react'

import { Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faUser } from '@fortawesome/pro-solid-svg-icons'

import './CustomerTable.scss'

export default class CustomerTable extends React.Component {
  render() {
    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Date Added</th>
            <th>Value</th>
            <th>Last Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width='50px'><FontAwesomeIcon icon={faUser} className='text-center text-muted' /></td>
            <td>DK12398-1237</td>
            <td>John Doe</td>
            <td>24th June 2020</td>
            <td>£3,120</td>
            <td>1st July 2020</td>
            <td className='text-center' width='50px'><FontAwesomeIcon icon={faLongArrowRight} /></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}