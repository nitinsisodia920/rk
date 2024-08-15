import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Checkout from './screens/Checkout';
import LivingRoom from './screens/LivingRoom';
import Dining from './screens/Dining';
import BedRoom from './screens/BedRoom';
import ProductScreen from './screens/PrdouctScreen';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moodboard from './screens/moodboard';
import Profile from './screens/Profile';
import Final from './screens/Final';
import Aboutus from './Aboutus';

import Sectional from './screens/Sectional';
import Cooler from './screens/Cooler';
import Contact from './Contact';
import Woodentemple from './screens/Woodentemple';
import Table from './screens/Table';
import Chair from './screens/Chair';
import Office from './screens/Office';
import Mattress from './screens/Mattress';
import Wardrobe from './screens/Wardrobe';
import Centertable from './screens/Centertable';
import Shoerack from './screens/Shoerack';
import Cabinate from './screens/Cabinet';
import Luxurious from './screens/Luxurious';
// import Chair from './screens/Chair';
import CartPage from './CartPage';
import Wishlist from './Wishlist';



function App() {
  
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
    <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignupScreen/>} />
          <Route path="/checkout" element={<Checkout/>} />
          
          <Route path="/livingroom" element={<LivingRoom/>} />
          
          <Route path="/dining" element={<Dining/>} />
          <Route path="/officechair" element={<Office/>} />
          <Route path="/mattress" element={<Mattress/>} />
          <Route path="/wardrobe" element={<Wardrobe/>} />
          <Route path="/centertable" element={<Centertable/>} />
          <Route path="/shoerack" element={<Shoerack/>} />
          <Route path="/cabinate" element={<Cabinate/>} />
          <Route path="/luxurious" element={<Luxurious/>} />
          
          <Route path="/bedroom" element={<BedRoom/>} />
          <Route path="/sectional" element={<Sectional/>} />
          <Route path="/cooler" element={<Cooler/>} />
         <Route path="/woodentemple" element={<Woodentemple/>}/>
         <Route path="/table" element={<Table/>}/>
         <Route path="/chair" element={<Chair/>}/>
         {/* <React path="/chair" element={<Chair/>}/> */}
          <Route path="/product/:id" element={<ProductScreen/>}/>

     
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/wishlist" element={<Wishlist/>} />

          
          
          <Route path="/moodboard" element={<Moodboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/final" element={<Final/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
