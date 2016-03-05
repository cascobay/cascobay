import initialState from './initialState'

// Handle the data actions

export function cartodbData(state = {
  isFetching: false,
  features: []
}, action) {
  switch (action.type)
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        features: action.features
      })
    default:
      return state
}

export function selectedFeature(state = [], action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return action.feature
    default:
      return state
  }
}
