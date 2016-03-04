import { AppModes, SidebarFilters } from '../actions'
// The reducer defines our state tree and dictates how an action creates the next state of the app.

const initialState = {
  mode: AppModes.STORY,
  sidebarFilter: '',

  selectedFeature: [],
  cartodbData: {}
  // TODO: Story mode will be implemented with states
}

// Note, there is one immutable state tree.  Each reducer will control a specific part of the state tree.  The cascoApp is the rootReducer, meaning it composes the state tree out of the individual reducers

/*
 * HANDLE UI ACTIONS
*/

export const mode = function(state=initialState.mode, action) {
  return state
}

/*
 * HANDLE DATA ACTIONS
*/

function cascoApp(state=initialState, action) {
  return state
}
export default cascoApp
