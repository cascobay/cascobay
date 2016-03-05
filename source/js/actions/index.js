import fetch from 'isomorphic-fetch'
import * from '../constants'


// Action Creators

export function requestData(query) {
  type: REQUEST_DATA,
  query
}
export function receiveData(query, json) {
  type: RECEIVE_DATA,
  query,
  features: json.data.features.map(feature => feature.properties)
}

// 'THUNK'- async action (action creator that returns a function)
export function getCartodbData(username, query) {
    return function(dispatch) {
      // dispatch action to update let state know of pending network request
      dispatch(requestData(query))
      return axios.get('https://${ username }.cartodb.com/api/v2/sql?format=GeoJSON&q=${ query }')

      then(response => response.json())
      then(json =>
        dispatch(receiveData(query, json))
      )
    }
}

export function selectFeature(feature) {
  type: SELECT_FEATURE,
  feature
}
export function viewStory() {
  type: VIEW_STORY
}
export function viewExplore() {
  type: VIEW_EXPLORE
}
export function nextSlide() {
  type: NEXT_SLIDE
}
export function previousSlide() {
  type: PREVIOUS_SLIDE
}


// const query = 'SELECT * FROM ' + config.cartodb.table
// $.get(config.cartodb.endpoint(config.cartodb.user, query))
//   .then(
//     function(response) {
//       const geojson = response.data
//       console.log(geojson)
//       this.setState({
//         dataLayer: geojson
//       })
//
//       // add loaded Cartodb data to our leaflet geojson layer
//       waterQualityLayer.addData(geojson);
//
//       console.log(map_object)
//
//     }.bind(this)
//   )
