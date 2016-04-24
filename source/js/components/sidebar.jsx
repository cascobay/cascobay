import React, { PropTypes } from 'react'

import SidebarHeader from './SidebarHeader'
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'

const Sidebar = React.createClass({
  getDefaultProps: function() {
    return {
      currentFeature: {}
    };
  },
  render () {
    return (
      <section className="sidebar layout-sidebar">
          <SidebarHeader {...this.props}  />
          <SidebarBody {...this.props} />
          <SidebarFooter {...this.props}  />
      </section>
    )
  }
})

export default Sidebar
