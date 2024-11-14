// Categories.js
import React, { useState } from 'react';
import useCart from '../context/useCart';
import './Categories.css';

const Categories = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  const handleOrderNow = (item) => {
    const cartItem = {
      name: item.name,
      price: item.price || 0,
      imageUrl: item.imageUrl || 'default-image-url.png' // Ensure imageUrl is set correctly
    };
    addToCart(cartItem);
    alert(`${item.name} has been added to your cart!`);
  };
  

  return (
    <div className="categories-section">
      <h2>Categories</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className="category-button"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="category-items">
        {selectedCategory &&
          categories
            .filter((category) => category.name === selectedCategory)
            .map((category) => (
              <div key={category.name} className="category">
                <h3>{category.name}</h3>
                <div className="items">
                  {category.items.map((item) => (
                    <div key={item.id} className="item-card">
                      <h4>{item.name}</h4>
                      <button onClick={() => handleOrderNow(item)}>Order Now</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Categories;
