import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet'
import GJV from 'geojson-validation'

import config from 'constants/mapConfig';

const Map = React.createClass({
  render() {
    return (
      <div className='layout-map'></div>
    )
  },
  getInitialState() {
      return {
        map: {},
        geojsonLayer: null,
        tileLayer: null
      }
  },
  componentDidMount() {
    //  runs after map is added to the DOM
    //  find out what dom element this component is mounted on, and instantiate our leaflet map onto that node
    const map_node = ReactDOM.findDOMNode(this)
    this.state.map = L.map(map_node, config.leaflet)

    const baselayers = {
      Canvas: config.grayscale,
      Satellite: config.satellite
    };

    //  add Baselayer to Component State
    this.state.tileLayer = config.grayscale
      .addTo(this.state.map)

    //  add custom zoom control manually to specify its position
    L.control.zoom({position:'topright'}).addTo(this.state.map);

    //  add layer controller for basemaps
    L.control.layers(baselayers).addTo(this.state.map);

    //  redux's connect() method allows us to call action creators as component props
    //  this is equivalent to calling  dispatch(getCartodbData())
    this.props.getCartodbData('bfriedly', 'SELECT * FROM cascobay_2005_2012_waterquality')
  },
  componentWillReceiveProps(nextProps) {
    //  if the new props.cartodbData is a valid geojson object and is different than the current props.cartodbData, then run our _addGeoJson method
    if (nextProps.cartodbData.geojson !== this.props.cartodbData.geojson && GJV.valid(nextProps.cartodbData.geojson)) {
      this._addGeojson(nextProps.cartodbData.geojson, this.props)
    }
  },
  _addGeojson(geojson) {
    //if geojson is valid, add to map object
    if(GJV.valid(geojson)){
      console.log('cartodbData.geojson is a Valid geojson: ', geojson)

      //  Use Leaflet's GeoJSON method to add our CartoDB data onto our leaflet map object, using the map component's custom methods
      this.state.geojsonLayer = L.geoJson(geojson, {
        onEachFeature: this._onEachFeature,
        pointToLayer: this._pointToLayer,
        style: this._geojsonStyle
      }).addTo(this.state.map)
    }
    else {
      console.log('cartodbData.geojson is not a valid GeoJSON: ', geojson)
    }
  },
  _onEachFeature(feature, layer) {
    layer.on({
      click: this._onClick,
      mouseover: this._highlightFeature,
      mouseout: this._resetHighlight
    })
  },
  _pointToLayer(feature, latlng){
    return L.circleMarker(latlng).on('click', function(){})
  },
  _geojsonStyle(feature) {
    if(feature.properties.index<70){
      return {fillColor: "#fc8d59", fillOpacity: 1}
    } else if (feature.properties.index<85) {
      return {fillColor: "#ffffbf", fillOpacity: 1}
    }
    else {
      return {fillColor: "#99d594", fillOpacity: 1}
    }
  },
  _onClick(event) {
    const layer = event.target

    // zoom to clicked feature
    this._zoomToFeature(layer)

    // this is a redux action that puts the current feature into the global redux state object
    this.props.clickFeature(layer.feature.properties)

  },
  _highlightFeature(event){
    const layer = event.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
  },
  _resetHighlight(event){
    const layer = event.target
    this.state.geojsonLayer.resetStyle(layer)
  },
  _zoomToFeature: function(target) {
    const center = target._latlng
    this.state.map.setView(center, 15);
  }
})
export default Map
