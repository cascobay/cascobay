import { sidebarView, appState } from './uiReducers'
import { cartodbData, selectedFeature } from './dataReducer'

// The reducer defines our state tree and dictates how an action creates the next state of the app.


// Root Reducer brings together all the individual reducers to form the single state tree
// This is exported and used by createStore
const cascoApp = function(state={}, action) {
  return {
    appState: appState(state.appState, action),
    sidebarView: sidebarView(state.sidebarView, action),
    selectedFeature: selectedFeature(state.selectedFeature, action),
    cartodbData: cartodbData(state.cartodbData, action)
  }
}

export default cascoApp
