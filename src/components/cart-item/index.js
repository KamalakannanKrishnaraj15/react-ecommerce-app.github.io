import React from 'react';


const CartItem = ({ item: { image, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={image} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x Rs. {price}
      </span>
    </div>
  </div>
);

export default CartItem;
