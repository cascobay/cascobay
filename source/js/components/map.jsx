import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet'
import GJV from 'geojson-validation'

import config from './mapConfig';

const Map = React.createClass({
  getInitialState() {
      return {
        map: {},
        tileLayer: null,
        waterQualityLayer: null
      }
  },
  componentDidMount() {
    //runs after map is added to the DOM
    // find out what dom element this component is mounted on, and instantiate our leaflet map onto that node
    const map_node = ReactDOM.findDOMNode(this)
    this.state.map = L.map(map_node, config.leaflet)

    // Add Baselayer to Component State
    this.state.tileLayer = config.grayscale
      .addTo(this.state.map)

    //redux's connect() method allows us to call action creators as component props
    //this is equivalent to calling  dispatch(getCartodbData())
    this.props.getCartodbData('bfriedly', 'SELECT * FROM cascobay_2005_2012_waterquality')
  },
  componentWillReceiveProps(nextProps) {
    console.log('MAP NEXT PROPS: ', nextProps)
    //if the new props are a valid geojson object, add them to our leaflet map
    if (nextProps.cartodbData.geojson !== this.props.cartodbData.geojson && GJV.valid(nextProps.cartodbData.geojson)) {
      this.addGeojson(nextProps.cartodbData.geojson, this.props)
    }
  },
  addGeojson(geojson, props) {
    function onClick(event){
      const layer = event.target

      console.log('ONCLICK PROPS', props)
      props.selectFeature(layer.feature.properties)
    }

    //if geojson is valid, add to map object
    if(GJV.valid(geojson)){
      console.log('cartodbData.geojson is a Valid geojson: ', geojson)

      this.state.waterQualityLayer = L.geoJson(geojson, {
        onEachFeature: function(feature, layer) {
          layer.on({
            click: onClick
          })
        },
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng)
        },
        style: function(feature) {
          if(feature.properties.index<75){
            return {fillColor: "#fc8d59", fillOpacity: 1}
          } else if (feature.properties.index<85) {
            return {fillColor: "#ffffbf", fillOpacity: 1}
          }
          else {
            return {fillColor: "#99d594", fillOpacity: 1}
          }
        }
      }).addTo(this.state.map)
    }
    else {
      console.log('cartodbData.geojson is an Invalid geojson: ', geojson)
    }
  },
  render() {
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
