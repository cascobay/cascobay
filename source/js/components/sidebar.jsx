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
  componentDidMount() {
    console.log('SIDEBAR MOUNTED WITH: ', this.props)
  },
  componentWillReceiveProps(nextProps) {
    console.log('SIDEBAR RECEIVED PROPS: ', nextProps.currentFeature.index)
  },


  render () {
    console.log('SIDEBAR RENDERED: ', this.props.currentFeature)

    // const footerStyle = {
    //   height: '300px',
    //   backgroundColor: 'blue'
    // }

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
