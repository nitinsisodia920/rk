/* import { Link, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from "react"; 
import axios from 'axios';
import './livingroom.css'

function Cooler() {
  const navigate = useNavigate();
  const [Cooler_products, set_Cooler_Products] = useState(false); 
  console.log(Cooler_products)
  useEffect(() => {
    let isMounted=true
    const fetchData = async () => {
      const result = await axios.get('/api/products/cooler'); //ajax request
      console.log("this is response:", result,"this is result data:", result.data)
      if(isMounted)
        set_Cooler_Products(result.data);
    };
    if(!Cooler_products)
      fetchData();
  }); 

  if(Cooler_products){
    console.log("test")


  const  BuyNow = async(e)=>{
    e.preventDefault()
   
    navigate('/login?redirect=/checkout');
  };
    return(
      <div>
    <main>
      <h2 className='living-heading'>COOLERS</h2>
      <div className="products" id="products">
        {Cooler_products.map((product) => (
          <div  className="product"  id="product" key={product.id} >
            <Link to={`/product/${product.id}`}> 
              <img src={"http://localhost:5000"+product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <div className="prod-heading"> 
              <Link to={`/product/${product.id}`}  id="prod-heading"class="link-dark text-decoration-none">
                <p>{product.name}</p>
              </Link>
              </div>
              <p>
                <strong>₹{product.price}</strong>
              </p>
              <button onClick={BuyNow} class="btn btn-dark btn-lg rounded-pill">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
  )

  }
    


}
export default Cooler ; */



import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'remixicon/fonts/remixicon.css';
import './livingroom.css'

function Table() {
  const navigate = useNavigate();
  const [TableProducts, setTableProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/products/table');
        setTableProducts(result.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };
    fetchData();
    
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToCart = async (product) => {
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

  const toggleWishlist = (product) => {
    const updatedWishlist = wishlist.some(item => item.id === product.id)
      ? wishlist.filter(item => item.id !== product.id)
      : [...wishlist, product];
    
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    toast.success(
      wishlist.some(item => item.id === product.id)
        ? `${product.name} removed from wishlist!`
        : `${product.name} added to wishlist!`,
      { position: 'top-center' }
    );
  };

  if (loading) return <div className="loader"><i className="ri-loader-4-line ri-3x ri-spin"></i></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="cooler-container">
      <main>
        <h2 className='living-heading'>TABLES</h2>
        <div className="products" id="products">
          {TableProducts.map((product) => (
            <div className="product" id="product" key={product.id}>
              <div className="product-image-container">
                <Link to={`/product/${product.id}`}>
                  <img src={`http://localhost:5000${product.image}`} alt={product.name} />
                </Link>
                <button 
                  onClick={() => toggleWishlist(product)} 
                  className={`wishlist-btn ${wishlist.some(item => item.id === product.id) ? 'active' : ''}`}
                >
                  <i className={`${wishlist.some(item => item.id === product.id) ? 'ri-heart-fill' : 'ri-heart-line'}`}></i>
                </button>
              </div>
              <div className="product-info">
                <div className="prod-heading">
                  <Link to={`/product/${product.id}`} id="prod-heading" className="link-dark text-decoration-none">
                    <p>{product.name}</p>
                  </Link>
                </div>
                <p className="product-price">
                  <strong>₹{product.price}</strong>
                </p>
                <button onClick={() => addToCart(product)} className="btn btn-dark btn-lg rounded-pill add-to-cart-btn">
                  <i className="ri-shopping-cart-line"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Table;