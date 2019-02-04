import React from 'react';
import { connect } from 'react-redux'
import {addToCart} from '../../redux/cart/actions';
import ItemsList from '../components/ItemsList'

const Main = ({onAddToCartClick}) => {
  return (
    <div className="main">
      <ItemsList onAddToCartClick={onAddToCartClick} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartClick: (item) => {
      dispatch(addToCart(item))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
