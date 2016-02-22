import { featureClick, switchMode } from 'actions/actions'

console.log(store.getState())

// Every time the state changes, log it
// note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
)

// Dispatch some actions

store.dispatch(switchMode('STORY'))
store.dispatch(switchMode('EXPLORE'))

// Stop listening to updates
unsubscribe()
