import {
  REQUEST_DATA, RECEIVE_DATA, SELECT_FEATURE
} from 'constants'

// How to handle requesting and receiving data
export function cartodbData(state = {
  isFetching: false,
  selectedFeature: [],
  geojson: {}
}, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        geojson: action.geojson
      })
    default:
      return state
  }
}

//  Add the currently selected feature to the app state
export function selectedFeature(state = {}, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return Object.assign({}, state, {
        Feature: action.feature
      })
    default:
      return state
  }
}
