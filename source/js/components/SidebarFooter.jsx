import React, { PropTypes } from 'react'
import Button from './Button'

const SidebarFooter = React.createClass({
  render () {
    return (
      <div className='sidebar-footer'>
        <Button className='sidebar-footer-link' buttonType='internal' href='#' text='About' handleClick={this.props.enterLandingPage}></Button>
        <Button className='sidebar-footer-link' buttonType='external' href='http://www.cascobay.org/volunteer/' text='Join Us'></Button>
        <Button className='sidebar-footer-link' buttonType='external' href='https://donate.cascobay.org/sslpage.aspx?pid=298' text='Donate'></Button>
      </div>
    )
  }
})

export default SidebarFooter
