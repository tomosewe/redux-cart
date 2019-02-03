import {
  addToCart,
  removeFromCart
} from '../actions'

import { createStore } from 'redux'
import cart from '../reducers'

test('loads the store', () => {
  const store = createStore(cart)

  // Log the initial state
  console.log(store.getState())
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  
  // Dispatch some actions
  store.dispatch(addToCart({name:'chicken'}))
  store.dispatch(addToCart({name:'fish'}))
  store.dispatch(addToCart({name:'turkey'}))
  store.dispatch(removeFromCart({name:'turkey'}))
  store.dispatch(removeFromCart({name:'fish'}))
  store.dispatch(removeFromCart({name:'chicken'}))
  
  // Stop listening to state updates
  unsubscribe()
})