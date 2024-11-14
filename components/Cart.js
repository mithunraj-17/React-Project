import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from CartContext

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/">Go Back to Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => alert('Proceed to Checkout')}>Checkout</button>
    </div>
  );
};

export default Cart;
