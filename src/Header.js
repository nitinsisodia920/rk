// import React, { useContext } from 'react'
// import "./Header.css"
// /* import IconButton from '@mui/material/IconButton'; */
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';
// import {  Nav, NavDropdown } from 'react-bootstrap';
// /* import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'; */
// import logo from './screens/logo1.png'

// import { Store } from './Store';

// function Header() {
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const {userInfo } = state;

//   const signoutHandler = () => {
//     ctxDispatch({ type: 'USER_SIGNOUT' });
//     localStorage.removeItem('userInfo');
//     // localStorage.removeItem('shippingAddress');
//     // localStorage.removeItem('paymentMethod');
//     window.location.href = '/login';
//   };

//   return (
//     <div name='header'>
//       <Navbar>
//           <Container>

//             <LinkContainer to="/">
//               <Navbar.Brand><img className="header_logo" src={logo} alt=""/></Navbar.Brand>
//             </LinkContainer>
//             <Nav>
//             <Nav.Item>
//               <Nav.Link href="/" className='Home'>Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//             <NavDropdown title=" Products" id="nav-dropdown">
//                 <NavDropdown.Item href="/livingroom">Sofa</NavDropdown.Item>
//                 <NavDropdown.Item  href="/dining">Dining Table</NavDropdown.Item>
//                 <NavDropdown.Item href="/sectional"> Sectional Sofa</NavDropdown.Item>
//                 <NavDropdown.Item href="/cooler"> Coolers</NavDropdown.Item>
//                 <NavDropdown.Item href="/woodentemple">Wooden Temple</NavDropdown.Item>
//                 <NavDropdown.Item  href="/table">Table</NavDropdown.Item>
//                 <NavDropdown.Item  href="/chair">Chairs</NavDropdown.Item>
//                 <NavDropdown.Item  href="/officechair">Office Chairs</NavDropdown.Item>
//                 <NavDropdown.Item href="/bedroom">Bed</NavDropdown.Item>
//                 <NavDropdown.Item href="/mattress">Mattress</NavDropdown.Item>
//                 <NavDropdown.Item href="/wardrobe">Wardrobes</NavDropdown.Item>
//                 <NavDropdown.Item href="/centertable">Center Table</NavDropdown.Item>
//                 <NavDropdown.Item href="/shoerack">Shoe Rack</NavDropdown.Item>
//                 <NavDropdown.Item href="/cabinate">Cabinates & sideboards</NavDropdown.Item>
//                 <NavDropdown.Item href="/luxurious">Luxurious collection</NavDropdown.Item>
//               </NavDropdown>
//             </Nav.Item>
           
//             <Nav.Item>
//               <Nav.Link href="/Aboutus" className='About'>About us</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/Contact" className='Contact'>Contact</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/moodboard" className='nav-link'>Collection</Nav.Link>
//             </Nav.Item>
//             </Nav>
          
 
//             {/* <Nav>
//             <Link to="/moodboard" className="nav-link">
//                 <IconButton id="icon">Collection
//                   <AutoAwesomeMosaicIcon/>
//                 </IconButton>
//               </Link>
//             </Nav> */}
           
//             <Nav>
//             <Nav.Item>
//               <Nav.Link href="/Cart" className='Cart'> <i class="ri-shopping-cart-line"></i></Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/Wishlist" className='wishlist'><i class="ri-heart-line"></i></Nav.Link>
//             </Nav.Item>

//               {
//               userInfo ? 
//                 (
//                     <NavDropdown title={userInfo.name} id="nav-dropdown">

//                       <LinkContainer to="/profile">
//                         <NavDropdown.Item>User Profile</NavDropdown.Item>
//                       </LinkContainer>

//                       <NavDropdown.Divider />

//                       <Link className="dropdown-item" to="#signout" onClick={signoutHandler}>
//                         Sign Out
//                       </Link>

//                     </NavDropdown>
//                 ) : 
                
//                 (
//                     <Link className="nav-link" to="/login">
//                      <i class="ri-user-line"></i>Login
//                     </Link>
//                 )
              
//               }

//             </Nav>
            
//           </Container>
//       </Navbar> 
      
//     </div>
//   )
// }

// export default Header

import React, { useContext, useState, useEffect } from 'react'
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavDropdown, Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import logo from './screens/logo1.png'

import { Store } from './Store';

// Sample product data (replace with your actual product data or API call)
const products = [
  { id: 1, name: ' Sofa', category: 'Sofa', href: '/livingroom' },
  { id: 2, name: 'Sectional Sofa', category: 'Sofa', href: '/sectional' },
  { id: 3, name: 'Dining Table', category: 'Table', href: '/dining' },
  { id: 4, name: 'Office Chair', category: 'Chair', href: '/officechair' },
  { id: 5, name: 'Wardrobe', category: 'Wardrobe', href: '/wardrobe' },
  { id: 6, name: 'Wooden Temple', category: 'wooden temple', href: '/woodentemple' },
  { id: 7, name: 'Chair', category: 'Chair', href: '/chair' },
  { id: 8, name: 'Cabinate & sideboards', category: 'cabinate & sideboards', href: '/cabinate' },
  { id: 9, name: 'Bed', category: 'Bed', href: '/BedRoom' },
  { id: 10, name: 'Mattress', category: 'Mattress', href: '/mattress' },
  { id: 11, name: 'Luxurious collection', category: 'luxurious collection', href: '/luxurious' },
  { id: 12, name: 'Shoerack', category: 'shoerack', href: '/shoerack' },
  { id: 13, name: 'Cooler', category: 'Cooler', href: '/cooler' },
  // Add more products as needed, matching your NavDropdown items
];

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    // You might want to redirect to a search results page or filter products
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (product) => {
    setSearchTerm('');
    setSuggestions([]);
    // Redirect to the product page
    navigate(product.href);
  };

  return (
    <div name='header'>
      <Navbar expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><img className="header_logo" src={logo} alt=""/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/" className='Home'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Products" id="nav-dropdown">
                  <NavDropdown.Item href="/livingroom">Sofa</NavDropdown.Item>
                  <NavDropdown.Item href="/dining">Dining Table</NavDropdown.Item>
                  <NavDropdown.Item href="/sectional">Sectional Sofa</NavDropdown.Item>
                  <NavDropdown.Item href="/cooler">Coolers</NavDropdown.Item>
                  <NavDropdown.Item href="/woodentemple">Wooden Temple</NavDropdown.Item>
                  <NavDropdown.Item href="/table">Table</NavDropdown.Item>
                  <NavDropdown.Item href="/chair">Chairs</NavDropdown.Item>
                  <NavDropdown.Item href="/officechair">Office Chairs</NavDropdown.Item>
                  <NavDropdown.Item href="/bedroom">Bed</NavDropdown.Item>
                  <NavDropdown.Item href="/mattress">Mattress</NavDropdown.Item>
                  <NavDropdown.Item href="/wardrobe">Wardrobes</NavDropdown.Item>
                  <NavDropdown.Item href="/centertable">Center Table</NavDropdown.Item>
                  <NavDropdown.Item href="/shoerack">Shoe Rack</NavDropdown.Item>
                  <NavDropdown.Item href="/cabinate">Cabinates & sideboards</NavDropdown.Item>
                  <NavDropdown.Item href="/luxurious">Luxurious collection</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Aboutus" className='About'>About us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Contact" className='Contact'>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/moodboard" className='nav-link'>Collection</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex position-relative" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search products..."
                className="mr-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-success" type="submit"><i class="ri-search-line"></i></Button>
              {suggestions.length > 0 && (
                <ListGroup className="position-absolute mt-1 w-100" style={{ top: '100%', zIndex: 1000 }}>
                  {suggestions.map((product) => (
                    <ListGroup.Item 
                      key={product.id} 
                      action 
                      onClick={() => handleSuggestionClick(product)}
                    >
                      {product.name} ({product.category})
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form>



            
            <Nav>
              <Nav.Item>
                <Nav.Link href="/Cart" className='Cart'> <i className="ri-shopping-cart-line"></i></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Wishlist" className='wishlist'><i className="ri-heart-line"></i></Nav.Link>
              </Nav.Item>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/login">
                  <i className="ri-user-line"></i>Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header