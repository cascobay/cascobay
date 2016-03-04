import expect from 'expect'
import * as actions from '../source/js/actions'


describe('Switch Mode', () => {
  it('Should create an action that returns the alternate mode', () => {
    const mode = actions.AppMode.STORY
    const expectedAction = {
      type: actions.SWITCH_MODE,
      mode: 'EXPLORE'
    }
    expect(actions.switchMode(mode)).toEqual(expectedAction)
  })
})
