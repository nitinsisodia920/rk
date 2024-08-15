import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import './CartPage.css';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    const handleRemoveFromCart = (id) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const handleQuantityChange = (id, change) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
    };

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <FaShoppingCart className="empty-cart-icon" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items yet.</p>
                <Link to="/" className="btn-primary">
                    Start Shopping <FaArrowRight />
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-items">
                <h1>Shopping Cart</h1>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={`http://localhost:5000${item.image}`} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p className="item-price">₹{item.price.toFixed(2)}</p>
                            <div className="quantity-control">
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="btn-quantity">
                                    <FaMinus />
                                </button>
                                <span>{item.qty}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="btn-quantity">
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                        <div className="item-actions">
                            <p className="item-total">₹{(item.price * item.qty).toFixed(2)}</p>
                            <button 
                                className="btn-remove"
                                onClick={() => handleRemoveFromCart(item.id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{calculateTotal()}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                </div>
                <Link to="/checkout" className="btn-checkout">
                    Proceed to Checkout <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default CartPage;