import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Checkout.css';

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        paymentMethod: 'credit-card',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        saveInfo: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
        
        // Load saved info if available
        const savedInfo = JSON.parse(localStorage.getItem('savedCheckoutInfo'));
        if (savedInfo) {
            setFormData(prevState => ({...prevState, ...savedInfo}));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.1; // Assuming 10% tax
    };

    const calculateShipping = () => {
        // Simple shipping calculation
        return cartItems.length > 0 ? 5.99 : 0;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax() + calculateShipping();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.saveInfo) {
            const infoToSave = { ...formData };
            delete infoToSave.cardNumber;
            delete infoToSave.expiryDate;
            delete infoToSave.cvv;
            localStorage.setItem('savedCheckoutInfo', JSON.stringify(infoToSave));
        }

        // Initiate Razorpay payment
        await showRazorpay();

        setIsLoading(false);
    };

    async function showRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await fetch("http://localhost:2003/razorpay", {
            method: "POST",
        }).then((t) => t.json());

        console.log(data);

        const options = {
            key: "rzp_test_4W26iQdHpqmXmZ",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Order Payment",
            description: "Thank you for your purchase",
            handler: function (response) {
                toast.success('Payment successful!', { position: 'top-center' });
                localStorage.removeItem('cartItems');
                navigate('/order-confirmation');
            },
            prefill: {
                name: formData.fullName,
                email: formData.email,
                contact: "", // Add a phone number field to your form if needed
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div className="checkout-container">
                <div className="checkout-form-container">
                    <h3>Shipping Information</h3>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        
                        <label className="save-info">
                            <input
                                type="checkbox"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleInputChange}
                            />
                            Save this information for next time
                        </label>
                        <button type="submit" disabled={isLoading} className="pay-now-btn">
                            {isLoading ? 'Processing...' : 'Pay Now'}
                        </button>
                    </form>
                </div>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">Qty: {item.qty}</span>
                                </div>
                                <span className="item-price">₹{(item.price * item.qty).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-breakdown">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>₹{calculateTax().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>₹{calculateShipping().toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>₹{calculateTotal().toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;