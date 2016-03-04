/*
 *  ACTION TYPES
*/

export const SWITCH_MODE = 'SWITCH_MODE'


/*
 *  OTHER CONSTANTS
*/

export const AppMode = {
  STORY: 'STORY',
  EXPLORE: 'EXPLORE'
}
export const SidebarFilters = {
  INTERPRETATION: 'INTERPRETATION',
  DATA: 'DATA'
}



/*
 *  ACTION CREATORS
*/

export function switchMode(mode) {
  return {
    type: SWITCH_MODE,
    mode //TODO: where do we specify the mode should be the opposite of the current state.mode?
  }
}
