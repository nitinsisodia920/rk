import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'remixicon/fonts/remixicon.css';
import './Wishlist.css';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== product.id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success(`${product.name} removed from wishlist!`, { position: 'top-center' });
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].qty += 1;
    } else {
      existingCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    toast.success(`${product.name} added to cart!`, { position: 'top-center' });
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-heading">
        <i className="ri-heart-fill"></i>My Wishlist
      </h2>
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <i className="ri-heart-2-line"></i>
          <p>Your wishlist is empty.</p>
          <Link to="/" className="continue-shopping-btn">
            <i className="ri-shopping-bag-line"></i>Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <div className="wishlist-item-image">
                <Link to={`/product/${item.id}`}>
                  <img src={`http://localhost:5000${item.image}`} alt={item.name} />
                </Link>
                <button onClick={() => removeFromWishlist(item)} className="remove-btn">
                  <i className="ri-close-line"></i>
                </button>
              </div>
              <div className="wishlist-item-info">
                <h3>{item.name}</h3>
                <p className="wishlist-item-price">₹{item.price}</p>
                <button onClick={() => addToCart(item)} className="add-to-cart-btn">
                  <i className="ri-shopping-cart-line"></i>Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;