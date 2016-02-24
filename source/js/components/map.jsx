import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import L from 'leaflet'
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
      var map = this.map = L.map(ReactDOM.findDOMNode(this), config.leafet);

      this.state.tileLayer = L.tileLayer(config.mapboxUrl, config.grayscale).addTo(map);


    this.setState({
      tileLayer: this.state.tileLayer
    });
  },
  // init (id) {
  //   // Called after component mounts
  //   let map_object = L.map(id, config.leaflet);
  //
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
