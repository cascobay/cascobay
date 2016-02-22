import React, { PropTypes } from 'react';
import reactDOM from 'react-dom';
import config from './mapConfig';

const Map = React.createClass({
  componentDidMount () {
      //runs after map is added to the DOM
      this.init(this.getID());
  },

  getID () {
    // get the "id" attribute of our component's DOM node
    return reactDOM.findDOMNode(this).querySelectorAll('mapDOM')[0];
  },

  init (id) {
    // Called after component mounts
    let map_object = L.map(id, config.leaflet);

    L.control.layers(configs.baselayers).addTo(map_object);

    // cdbLayer(map_object);
  },

  render () {
    return (
      <div id='mapDOM' className='layout-map'></div>
    )
  }
})

export default Map
