import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet'

import config from './mapConfig';

const Map = React.createClass({
  getInitialState () {
      return {
        tileLayer: null,
        dataLayer: null
      }
  },

  componentDidMount () {
      //runs after map is added to the DOM
      console.log('Leaflet mounted on : ')
      console.log(ReactDOM.findDOMNode(this))
      console.log(config.grayscale)

      const map_node = ReactDOM.findDOMNode(this)
      const map_object = L.map(map_node, config.leaflet)

      this.state.tileLayer = config.grayscale
      .addTo(map_object)

  },

  //   //set state to include tile layer
  //   this.state.tileLayer = L.tileLayer(config.mapboxUrl, config.grayscale)
  //   .addTo(map_object)
  //   // cdbLayer(map_object);
  // },

  render () {
    return (
      <div className='layout-map cf'></div>
    )
  }
})

export default Map
