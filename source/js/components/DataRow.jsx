import React, { PropTypes } from 'react'
import classNames from 'classnames'

const DataRow = React.createClass({
  render () {
    // conditionally set row className based on conditional props
    const value = this.props.dataValue
    let rowClass = classNames({
      'data-row': true,
      'health-index': this.props.rowType === 'health-index',
      'value-good': value > 85 && value <=100,
      'value-fair':  value > 75 && value <=85,
      'value-poor':  value >= 0 && value <=75
    })

    return (
      <div>
        <div className={rowClass}>
          <div className='data-field'>{this.props.dataField}</div>
          <div className='data-value'>{this.props.dataValue}</div>
        </div>
      </div>
    )
  }
})

export default DataRow
