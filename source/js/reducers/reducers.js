import { FEATURE_CLICK, SWITCH_MODE, appModes } from 'actions/actions';

// Defines how app state should change from a given action

// Reducer is a pure function that takes previousState and action and returns newState
// (previousState, action) => {newState}

const initialState = {
  appMode: appModes.STORY,
  dataWindow: [],
  currentFeature: {}
}

//FIXME: what is a better name for this function?
// Reducer to set the state of the current cartodb feature
function feature(state={}, action) {
  switch (action.type) {
    case FEATURE_CLICK:
      return Object.assign({}, state, {
        currentFeature: {featureId}
      })
    default:
      return state
  }
}

// Reducer handling the two app modes
function appMode(state=appModes.STORY, action) {
  switch (action.type) {
    case SWITCH_MODE:
      return Object.assign({}, state, {
        appmode: action.mode
    default:
      return state
      })
  }
}

//TODO: write dataWindow reducer
// "Root Reducer", brings together the separate reducers that manage particular parts of our app state
function cascoApp(state = {}, action) {
  return {
    appmode: appMode(state.appMode, action),
    dataWindow: dataWindow(state.dataWindow, action),
    currentFeature: feature(state.currentFeature, action)
  }
}

export default  cascoApp
