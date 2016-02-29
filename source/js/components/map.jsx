import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet'
import $ from 'axios'

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

      const map_node = ReactDOM.findDOMNode(this)

      const map_object = L.map(map_node, config.leaflet)

      console.log(this.state)

      // Add Baselayer to Component State
      this.state.tileLayer = config.grayscale
      .addTo(map_object)

      const query = 'SELECT * FROM ' + config.cartodb.table
      $.get(config.cartodb.endpoint(config.cartodb.user, query))
        .then(
          function(response) {
            const geojson = response.data
            console.log(geojson)
            this.setState({
              dataLayer: geojson
            })
          }.bind(this)
        )

      // execute component method defined below
      // this.getCdb();

      // Did dataLayer get added to state? Nope.
      console.log(this.state)
  },

  // TODO: hook this into a redux action, store data in the Redux Store
    //This will let us perform one API Request on load, then refer to the Store for all other actions
  getCdb() {
    const query = 'SELECT * FROM ' + config.cartodb.table

    $.get(config.cartodb.endpoint(config.cartodb.user, query))
      .then(
        function(res){
          const geojson = res.data
          console.log(geojson)
          this.setState({
            dataLayer: geojson
          })
          console.log(this.state)
        }
      )
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
