import React, { PropTypes } from 'react'

const InfoIcon = React.createClass({
  render () {
    return (
      <a href='#' className='information-icon' onHover={ this._handleHover } >
        <img src={ this.props.src }></img>
      </a>
    )
  },

  _handleHover () {
      //TODO: how to render another component on an event?
      // Probably should be a redux action
  }
})

export default InfoIcon
