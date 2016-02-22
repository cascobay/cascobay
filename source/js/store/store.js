import { createStore } from 'redux'
import cascoApp from 'reducers/reducers'

// Making our store from our reducer!
let store = createStore(cascoApp)
