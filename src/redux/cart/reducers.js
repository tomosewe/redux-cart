import {ADD_TO_CART, REMOVE_FROM_CART} from './actions';
const initialState = {
  cart: []
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        cart: [
          ...state.cart,
          {
            name: action.item.name,
            quantity: 1
          }
        ]
      })
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        cart: state.cart.map((item, index) => {
          if (state.cart[index].name === action.item.name) {
            return Object.assign({}, item, {
              quantity: 0
            })
          }
        return item
      })
    })
    default:
      return state
  }
}