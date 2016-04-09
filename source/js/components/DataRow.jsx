import React, { PropTypes } from 'react'

import InfoIcon from './InfoIcon'

const DataRow = React.createClass({
  render () {

    let content;
    if (this.props.dataValue < 70) {
      content = (
        <div className='data-row value-poor'>
          <div className='data-field'>{this.props.dataField}</div>
          <InfoIcon src='./assets/info-icon.svg' />
          <div className='data-value'>{this.props.dataValue}</div>
        </div>
      )} else if (this.props.dataValue < 85) {
        content = (
          <div className='data-row value-fair'>
            <div className='data-field'>{this.props.dataField}</div>
            <InfoIcon src='./assets/info-icon.svg' />
            <div className='data-value'>{this.props.dataValue}</div>
          </div>
        )
      } else if (this.props.dataValue <= 100) {
        content = (
          <div className='data-row value-good'>
            <div className='data-field'>{this.props.dataField}</div>
            <InfoIcon src='./assets/info-icon.svg' />
            <div className='data-value'>{this.props.dataValue}</div>
          </div>
        )
      }

    return (
      <div>
        {content}
      </div>
    )
  }
})

export default DataRow
