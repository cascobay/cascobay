import { mode, sidebarFilter } from './uiReducers'
import { cartodbData, selectedFeature } from './dataReducer'
import { slide } from './slideReducer'

// The reducer defines our state tree and dictates how an action creates the next state of the app.


// Root Reducer brings together all the individual reducers to form the single state tree
// This is exported and used by createStore
const cascoApp = function(state={}, action) {
  return {
    mode: mode(state.mode, action),
    sidebarFilter: sidebarFilter(state.sidebarFilter, action),
    selectedFeature: selectedFeature(state.selectedFeature, action),
    cartodbData: cartodbData(state.cartodbData, action),
    slide: slide(state.slide, action)
  }
}

export default cascoApp
