import React, { PropTypes } from 'react'

const SidebarFooter = React.createClass({
  render () {
    return (
      <div className='sidebar-footer'>
        <a onClick={this.props.enterLandingPage} className='sidebar-footer-link' href='#'> About </a>
        <a className='sidebar-footer-link' href='http://www.cascobay.org/volunteer/'> Join Us </a>
        <a className='sidebar-footer-link' href='https://donate.cascobay.org/sslpage.aspx?pid=298'> Donate </a>
      </div>
    )
  }
})

export default SidebarFooter
