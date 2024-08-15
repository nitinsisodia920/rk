/* // src/utils/cartUtils.js

// Get cart from local storage
export const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

// Save cart to local storage
export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
};

// Remove item from cart
export const removeFromCart = (productId) => {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
};

// Update item quantity
export const updateQuantity = (productId, quantity) => {
  const cart = getCart().map(item => 
    item.id === productId ? { ...item, quantity: quantity } : item
  );
  saveCart(cart);
}; */


// src/Cart.js

/* export const addToCart = (product) => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existItem = cartItems.find((item) => item.id === product.id);
  if (existItem) {
      cartItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
  } else {
      cartItems.push({ ...product, qty: 1 });
  }

  

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}; */

// src/Cart.js
export const addToCart = (product) => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existItem = cartItems.find((item) => item.id === product.id);
  if (existItem) {
      cartItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
  } else {
      cartItems.push({ ...product, qty: 1 });
  }

  

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};



