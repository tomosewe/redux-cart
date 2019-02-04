import React from 'react';
import { connect } from 'react-redux'
import {removeFromCart} from '../../redux/cart/actions';
import Nav from '../components/Nav'

const Header = ({cart, onRemoveItemFromCart}) => {
  return (
    <div>
      <Nav cart={cart} onRemoveItemFromCart={onRemoveItemFromCart}/>
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
    onRemoveItemFromCart: (item) => {
      dispatch(removeFromCart(item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
