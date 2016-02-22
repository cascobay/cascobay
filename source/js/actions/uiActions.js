/*
 *  ACTION TYPES
 */

export const SWITCH_MODE = 'SWITCH_MODE'
export const TOGGLE_DATA = 'TOGGLE_DATA'

/*
 *  OTHER CONSTANTS
 */

export const appModes = {
  STORY: 'STORY',
  EXPLORE: 'EXPLORE'
}

export const dataWindows = {
  //TODO: specify possible data windows
}

 /*
  *  ACTION CREATORS
  */

export function switchMode(mode) {
    return {
      type: SWITCH_MODE,
      mode
    }
}

export function toggleData(window) {
  return {
    type: TOGGLE_DATA,
    window
  }
}
