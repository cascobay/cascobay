// ACTIONS
import fetch from 'isomorphic-fetch'

import {
  ENTER_MAP,
  EXPLORE_MAP,
  ENTER_LANDING_PAGE,
  LANDING_PAGE,
  REQUEST_DATA,
  RECEIVE_DATA,
  SELECT_FEATURE,
  SELECT_VIEW,
  NEXT_SLIDE,
  PREVIOUS_SLIDE,
  SELECT_WINDOW
} from '../constants'


// Action Creators

export function enterMap() {
  return {
    type: ENTER_MAP,
    mode: EXPLORE_MAP
  }
}

export function enterLandingPage() {
  return {
    type: ENTER_LANDING_PAGE,
    mode: LANDING_PAGE
  }
}

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

export function clickFeature(feature) {
  return function(dispatch) {
    dispatch(enterMap())

    console.log('Selected Feature', feature)
    dispatch(selectFeature(feature))
  }
}

export function selectView(view) {
  return {
    type: SELECT_VIEW,
    view
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
