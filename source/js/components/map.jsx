import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet'
import fetch from 'isomorphic-fetch'

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

      this.props.getCartodbData('bfriedly', 'SELECT * FROM table_2005_2012_data_sheet1')

      // instantiate our geojson layer, will add data to layer in api request callback (data needs to be present first)
      let waterQualityLayer = L.geoJson().addTo(map_object);

      // add the data to the waterquality layer.
      // QUESTION: will geojson be available as props by the time this component mounts?  if yes, just pass {this.props.geojson}.  if no, then we would pass the getCartodbData(username, query) action here
      // waterQualityLayer.addData(this.props.getCartodbData('bfriedly', 'SELECT * FROM table_2005_2012_data_sheet1'));

  },


  render () {
    return (
      <div className='layout-map cf'></div>
    )
  }
})

// Map.propTypes = {
//   //redux state --> component props
//   // cartodbData: PropTypes.object,
//   // selectedFeature: PropTypes.integer,
//   // // redux action creators --> component props
//   // selectFeature: PropTypes.func.isRequired,
//   // getCartodbData: PropTypes.func.isRequired
// }
export default Map
