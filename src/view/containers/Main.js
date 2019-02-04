import React from 'react';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import cart from '../../redux/cart/reducers'
import {addToCart} from '../../redux/cart/actions';
import ItemsList from '../components/ItemsList'

const store = createStore(cart)

const Main = ({cart, onAddToCartClick}) => {
  console.log(cart)

  return (
    <div className="main">
      <ItemsList onAddToCartClick={onAddToCartClick} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartClick: (item) => {
      dispatch(addToCart(item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
