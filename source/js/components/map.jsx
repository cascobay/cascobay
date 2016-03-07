import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
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
      const map_node = ReactDOM.findDOMNode(this)
      const map_object = L.map(map_node, config.leaflet)

      console.log('Leaflet Instance mounted on: ', ReactDOM.findDOMNode(this))
      console.log('state at beginning of componentDidMount: ', this.state)
      console.log('props: ', this.props)

      // Add Baselayer to Component State
      this.state.tileLayer = config.grayscale
      .addTo(map_object)

      // instantiate our geojson layer, will add data to layer in api request callback (data needs to be present first)
      let waterQualityLayer = L.geoJson().addTo(map_object);


      // Did dataLayer get added to state? Nope.
      console.log('State at end of componentDidMount: ', this.state)
  },


  render () {
    return (
      <div className='layout-map cf'></div>
    )
  }
})

Map.propTypes = {
  selectFeature: PropTypes.func.isRequired,
  cartodbData: PropTypes.object,
  selectedFeature: PropTypes.integer
}
export default Map
