import expect from 'expect'
import * as actions from '../source/js/actions'
import * as reducers from '../source/js/reducers'


// Actions
describe('Switch Mode', () => {
  it('Should create an action called SWITCH_MODE', () => {
    const expectedAction = {
      type: actions.SWITCH_MODE,
    }
    expect(actions.switchMode()).toEqual(expectedAction)
  })
})


describe('mode reducer', () => {
  it('should return the initial mode state', () => {
    expect(
      reducers.mode(undefined, {})
    ).toEqual(actions.AppModes.STORY)
  })
})
