import React, { PropTypes } from 'react'

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
    console.log('SIDEBAR RENDERED: ', this.props.selectedFeature)
    return (
      <section className="sidebar layout-sidebar">
        <div className="sidebar-header">
          <div className="layout-sidebar-title">
            <h1 className="sidebar-name" id="sitename">{this.props.currentFeature.sitename}</h1>
            <h3 className="sidebar-location" id="sitelocation"> {this.props.currentFeature.sitelocation}</h3>
          </div>
          {/*TODO: Dynamic Graphic, top right corner of .site-content, next to site-name */}
          <div id="index-graphic"></div>
          <img className="sidebar-picture" src={this.props.currentFeature.photo_url} alt="Placeholder">
          </img>
        </div>
        <div className="sidebar-body">
          <p className="sidebar-description" id="sitedescription">{this.props.currentFeature.indexinterpretation}</p>
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
  // name (props) {
  //   if (props) {
  //     console.log('name method rendered, with props: ', props);
  //     return props
  //   }
  //   else {console.log('name method props are falsy: ', props); return 'No props yet!'}
  // }
})

export default Sidebar
