import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { orderToy } from '../api';

const Order = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({ name: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!orderDetails.name || !orderDetails.address) {
      setError('Both fields are required!');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await orderToy(id, orderDetails);
      alert('Order placed successfully!');
      setOrderDetails({ name: '', address: '' }); // Reset the form
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Order Toy</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={orderDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={orderDetails.address}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Order;
