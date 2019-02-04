import React from 'react';

const itemsForSale = [
  {name: 'Cat'},
  {name: 'Dog'},
  {name: 'Cow'},
  {name: 'Chicken'},
]

const ItemsList = ({onAddToCartClick}) => (
  <React.Fragment>
    {itemsForSale.map(item => (
      <div key={item.name}>
        {item.name}{' '}
        <button onClick={() => onAddToCartClick(item)}>Add to cart</button>
        <br />
        <br />
      </div>
      )
    )}
  </React.Fragment>
)

export default ItemsList