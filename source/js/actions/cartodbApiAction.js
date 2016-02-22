/*
 * At least 3 kinds of actions
 *
 * 1.  Action informing reducers that the request began
 * 2.  Action informing reducers that the request finished successfully
 * 3.  Action informing reducers that the request failed
 * http://redux.js.org/docs/advanced/AsyncActions.html
*/


/*
 *  ACTION TYPES
 *  Here we're just defiining all the types of api actions
 */

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DATA_SUCESS = 'REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_FAILURE = 'REQUEST_DATA_FAILURE'
export const RECEIVE_DATA = 'RECEIVE_DATA'

/*
 *  OTHER CONSTANTS
 */


 /*
  *  ACTION CREATORS
  *  And here we define what the actions are
  *  The actual dispatch behavior (API Call) happens elsewhere TODO: where is it?
  */


export function requestData(featureId) {
  return {
    type: REQUEST_DATA,
    featureId
  }
}

export function receiveData(featureId, json) {
  return {
    type: RECEIVE_DATA,
    feature: featureId,
    data: json.data.children.map(child => child.data),
    receivedAt: Data.now()
  }
}

// check out https://github.com/reactjs/redux/blob/master/examples/async/actions/index.js
function fetchPosts(featureId) {
  return dispatch => {
    dispatch(requestData(featureId))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}
