var React = require('react');
var PropTypes = React.PropTypes;

var SidebarHeader = React.createClass({

  render: function() {
    return (
       <div className='sidebar-header'>
         <h1 className="sidebar-name" id="sitename">{this.props.currentFeature.sitename}</h1>
         <h3 className="sidebar-location" id="sitelocation"> {this.props.currentFeature.sitelocation}</h3>
       </div>
    );
  }

});

module.exports = SidebarHeader;
