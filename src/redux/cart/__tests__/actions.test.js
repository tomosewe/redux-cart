import {
  addToCart,
  removeFromCart
} from '../actions'

import { createStore } from 'redux'
import cart from '../reducers'

test('adding and removing from cart adds and removes correctly', () => {
  const store = createStore(cart)

  // Log the initial state
  console.log(store.getState())
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  
  // Dispatch some actions
  store.dispatch(addToCart({name:'chicken'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 1}])

  store.dispatch(addToCart({name:'chicken'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 2}])

  store.dispatch(addToCart({name:'fish'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 2}, {name: 'fish', quantity: 1}])

  store.dispatch(addToCart({name:'turkey'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 2}, {name: 'fish', quantity: 1}, {name: 'turkey', quantity: 1}])

  store.dispatch(removeFromCart({name:'turkey'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 2}, {name: 'fish', quantity: 1}])

  store.dispatch(removeFromCart({name:'fish'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 2}])

  store.dispatch(removeFromCart({name:'chicken'}))
  expect(store.getState().cart).toEqual([{name: 'chicken', quantity: 1}])
  
  // Stop listening to state updates
  unsubscribe()
})