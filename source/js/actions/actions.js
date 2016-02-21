/*
 *  ACTION TYPES
 */

export const FEATURE_CLICK = 'FEATURE_CLICK'
export const SWITCH_MODE = 'SWITCH_MODE'

/*
 *  OTHER CONSTANTS
 */

export const appModes = {
  STORY: 'STORY',
  EXPLORE: 'EXPLORE'
}
 /*
  *  ACTION CREATORS
  */

  export function featureClick(featureId) {
    return {
      type: FEATURE_CLICK,
      featureId
    }
  }

  export function switchMode(mode) {
    return {
      type: SWITCH_MODE,
      mode
    }
  }
