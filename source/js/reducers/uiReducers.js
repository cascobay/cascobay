// UI REDUCERS
import {
  ENTER_MAP,
  ENTER_LANDING_PAGE,
  LANDING_PAGE,
  SELECT_VIEW,
  INTERPRETATION_VIEW
 } from 'constants'

export function sidebarView(state= INTERPRETATION_VIEW, action) {
  switch (action.type) {
    case SELECT_VIEW:
      return action.view
    default:
      return state
  }
}

export function appState(state= LANDING_PAGE, action) {
  switch (action.type) {
    case ENTER_MAP:
      return action.mode
    case ENTER_LANDING_PAGE:
      return action.mode
    default:
      return state
  }
}
