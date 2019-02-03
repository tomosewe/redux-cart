import {ADD_TO_CART, REMOVE_FROM_CART} from './actions';
const initialState = {
  cart: []
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
     const existingItem = state.cart.find(item => item.name === action.item.name)
     if (existingItem) {
      return Object.assign({}, state, {
        cart: state.cart.map((item, index) => {
          const currentItem = state.cart[index]
          if (state.cart[index].name === action.item.name) {
            return Object.assign({}, item, {
              quantity: currentItem.quantity + 1
            })
          }
          return item
        })
      })
    } else {
      return Object.assign({}, state, {
        cart: [
          ...state.cart,
          {
            name: action.item.name,
            quantity: 1
          }
        ]
      })
    }
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        cart: state.cart.map((item, index) => {
          const currentItem = state.cart[index]
          if (state.cart[index].name === action.item.name) {
            if (state.cart[index].quantity === 1) {
              return null;
            }
            return Object.assign({}, item, {
              quantity: currentItem.quantity - 1
            })
          }
          return item
        }).filter(item => item !== null)
      })
    default:
      return state
  }
}