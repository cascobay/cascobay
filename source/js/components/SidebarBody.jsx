import React, { PropTypes } from 'react'

import DataWindow from './DataWindow'

const SidebarBody = React.createClass({
  render () {
    const imageStyle = {
      backgroundImage: 'url(' + this.props.currentFeature.photo_url + ')'
    }

    return (
      <div className='sidebar-body'>
        <figure className='sidebar-figure'>
          <img
            className="sidebar-picture"
            src={this.props.currentFeature.photo_url}
            alt="Site Image">
          </img>
          <div className='sidebar-figure-caption'>
            { this.props.currentFeature.sitedescription}
          </div>
        </figure>
        <DataWindow {...this.props} />

      </div>
    )
  }
})

export default SidebarBody
