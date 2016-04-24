import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';

import cascoApp from 'reducers'

// Making our store from our reducer!
export default function configureStore() {
  return createStore(
    cascoApp,
    applyMiddleware(thunk, promise)
  )
}
