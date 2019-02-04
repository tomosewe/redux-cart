import React from 'react'

const Nav = ({cart, onRemoveItemFromCart}) => {
  console.log('Cart from Nav: ', cart);

  return (
    <div className="nav-wrapper">
      <div className="nav">
        <h1>ReduxCart</h1>
        <div>
          <p>Cart</p>
          {cart.map((item, index) => (
            <div key={item.name}>
              {item.name} x{item.quantity}{' '}
              <button onClick={() => onRemoveItemFromCart(item)}>-</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Nav