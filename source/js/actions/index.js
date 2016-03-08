require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

import {
  REQUEST_DATA,
  RECEIVE_DATA,
  SELECT_FEATURE,
  VIEW_STORY,
  VIEW_EXPLORE,
  NEXT_SLIDE,
  PREVIOUS_SLIDE,
  INTERPRETATION_FILTER,
  DATA_FILTER,
  STORY_MODE,
  EXPLORE_MODE
} from '../constants'


// Action Creators

export function requestData(query) {
  return {
    type: REQUEST_DATA,
    query
  }
}

// sync action creator that is dispached by async thunk getCartodbData
export function receiveData(username, query, geojson) {
  return {
    type: RECEIVE_DATA,
    username,
    query,
    geojson
  }
}

export function getCartodbData(username, query) {
  return function(dispatch) {
    console.log('getting cartodb data')

    // changes the state to isFetching: true until api call returns our data
    dispatch(requestData(query))

    fetch(
      'https://' +
      username + '.cartodb.com/api/v2/sql?format=GeoJSON&q=' +
      query)
      .then(function(response){return response.json()})
      .then(function(geojson){
        dispatch(receiveData(username, query, geojson))
      })
  }
}
// 'THUNK'- async action (action creator that returns a function)
// export function getCartodbData(username, query) {
//     return dispatch => {
//       console.log('Getting CartoDB Data')
//       // dispatch action to update let state know of pending network request
//       // dispatch(requestData(query))
//        fetch('https://bfriedly.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM table_2005_2012_data_sheet1')
//         .then(response => response.json())
//         .then(json =>
//           dispatch(receiveData(query, json))
//         )
//     }
// }

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
