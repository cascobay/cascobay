import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import cascoApp from 'reducers'

const loggerMiddleware = createLogger()
// Making our store from our reducer!
export default function configureStore(initialState) {
  return createStore(
    cascoApp,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

// // Immediately get our CartoDB data
// store.dispatch(
//   getCartodbData(
//     'bfriedly',
//     'SELECT * FROM table_2005_2012_data_sheet1'
//   )
// )
