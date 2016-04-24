import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger'

import cascoApp from 'reducers'

const logger = createLogger()

// Making our store from our reducer!
export default function configureStore() {
  console.log('STORE IS IN DEVELOPMENT')
  return createStore(
    cascoApp,
    applyMiddleware(thunk, promise, logger)
  )
}
