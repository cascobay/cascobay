import expect from 'expect'
import {
  SWITCH_MODE, AppModes, SidebarFilters, switchMode
} from '../source/js/actions'
import {
  initialState, mode, cascoApp
} from '../source/js/reducers'


// Actions
describe('Switch Mode', () => {
  it('Should create an action called SWITCH_MODE', () => {
    const expectedAction = {
      type: SWITCH_MODE,
    }
    expect(switchMode()).toEqual(expectedAction)
  })
})



// Reducers
describe('mode reducer', () => {
  it('should return the initial mode state', () => {
    expect(
      mode(undefined, {type: SWITCH_MODE})
    ).toEqual(AppModes.STORY)
  })
})

// mode reducer should return EXPLORE mode if given a state of STORY and an action of SWITCH_MODE
describe('mode reducer', () => {
  it('should return the alternate state', () => {
    expect(
      mode(AppModes.STORY, {type: SWITCH_MODE})
    ).toEqual(AppModes.EXPLORE)
  })
})
