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
    console.log('Getting CartoDB data... ...')

    // changes the state to isFetching: true until api call returns our data
    dispatch(requestData(query))

    fetch(
      'https://' +
      username +
      '.cartodb.com/api/v2/sql?format=GeoJSON&q=' +
      query
    )
      .then(response => response.json())
      .then(geojson => dispatch(receiveData(username, query, geojson)))
  }
}
export function selectFeature(feature) {
  return {
    type: SELECT_FEATURE,
    feature
  }
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