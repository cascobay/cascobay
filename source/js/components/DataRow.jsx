import React, { PropTypes } from 'react'

import InfoIcon from './InfoIcon'

const DataRow = React.createClass({
  render () {

    let content;
    if (this.props.dataValue < this.props.dataThreshold) {
      content = (
        <div className='data-row'>
          <div className='data-field'>{this.props.dataField}</div>
          <InfoIcon src='./assets/information-icon.svg' />
          <div className='data-value below-threshold'>{this.props.dataValue}</div>
        </div>
      )} else {
        content = (
          <div className='data-row'>
            <div className='data-field'>{this.props.dataField}</div>
            <InfoIcon src='./assets/information-icon.svg' />
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
