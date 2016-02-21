import React, { PropTypes } from 'react'

const Sidebar = React.createClass({
  render () {
    return (
      <section className="sidebar layout-sidebar">
        <div className="sidebar-header">
          <div className="layout-sidebar-title">
            <h1 className="sidebar-name" id="sitename">The Basin</h1>
            <h3 className="sidebar-location" id="sitelocation">New Meadows River, Phippsburg</h3> -->
          </div>
          {/*TODO: Dynamic Graphic, top right corner of .site-content, next to site-name */}
          <div id="index-graphic"></div>
          <img className="sidebar-picture" src="https://placeimg.com/640/480/any" alt="Placeholder">
          </img>
        </div>
        <div className="sidebar-body">
          <p className="sidebar-description" id="sitedescription">This semi-enclosed rural waterbody is located just northeast of Cundys Harbor and considered one of the best hurricane shelters on the eastern seaboard.</p>
          <div className="sidebar-data-window">
            <nav className="sidebar-data-window-navbar">
              <div className="data-window-button"><a href="#">Interpretation</a></div>
              <div className="data-window-button"><a href="#">pH</a></div>
              <div className="data-window-button"><a href="#">DO</a></div>
            </nav>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-button">Get Involved!</div>
          <div className="sidebar-button">Donate</div>
        </div>
      </section>
    )
  }
})

export default Sidebar
