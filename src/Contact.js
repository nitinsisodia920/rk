// import React from 'react'
// import './Contact.css'
// /*  import { useLocation, useNavigate } from "react-router-dom"
// import { useContext, useEffect, useState } from "react"

// import Axios from 'axios'
// // import "./LoginScreen.css"
// import { Store } from './Store';
// import { toast } from "react-toastify";
// import { getError } from "./utils";  */
// import location from  './screens/location-removebg-preview.png'
// import mail from './screens/email-removebg-preview.png'
// import call from './screens/call-removebg-preview.png'


// const Contact=()=> {
  

  
    
//   return (
//     <>
  
//     <div className="container1" id="l_c">
//     <div className='theory'>
//     <h1>GET IN TOUCH</h1>
//     <div>
//     <img  className='location'src={location} alt='' />ADDRESS
//     <h4>RK TRADER</h4>
//     <p>1995-A Railway Road Mangla Chowk Narela Delhi - 110040</p>
//     </div>
//     <div>
//     <img   className='mail' src={mail} alt='' /><span>EMAIL</span>
//     <h4>Request To Proposal</h4>
//     <p>mangladhruv123@gmail.com</p>
//     </div><div></div>
//     <img  className='call' src={call} alt='' />PHONE
//     <h4>Request To Proposal</h4>
//     <p>9560512462</p>

//     </div>
            
          

//                 <div class="card-contact">
//                     <div className="contact-form" class="form-contact">

//                         <h3 className="form-title-contact">Contact Us</h3><br/>

//                         <form className="register-form">
//                             <div className="form-group">
//                                 <div class="md-form md-outline">
//                                 <div class="form-floating mb-3" >
//                                         <input type="name" class="form-control" id="floatingInput" placeholder="username" required/>
//                                         <label for="floatingInput">Username</label>
//                                     </div>

//                                     <div class="form-floating mb-3">
//                                         <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
//                                         <label for="floatingInput">Email address</label>
//                                     </div>

//                                     <div class="form-floating" >
//                                         <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
//                                         <label for="floatingPassword">Password</label>
//                                     </div>
//                                     <div class="form-floating " className='textarea'>
//                                     <label for="w3review"></label>
//                                     <textarea id="w3review" name="w3review" rows="4" cols="55" placeholder='Message'>
                                  
//                                         </textarea>
//                                     </div>
//                                     <br/>

//                          <button class="lgnbtn-contact">send</button>

//                                 </div> 
//                             </div>
//                         </form>

//                         <br/>
                       

//                     </div>
//                 </div>
//             </div>      
           
//     </>
//   )
// }

// export default Contact;

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const address = "1995-A Railway Road Mangla Chowk Narela Delhi - 110040";
  const email = "mangladhruv123@gmail.com";
  const phone = "9560512462";
  const whatsappNumber = "919560512462";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.022702889378!2d77.09093431508684!3d28.85079098233569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0x7f6e0b5c0f45c29a!2sMangla%20Chowk%2C%20Narela%2C%20Delhi%2C%20110040!5e0!3m2!1sen!2sin!4v1628692991054!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <h1 className="contact-title">GET IN TOUCH</h1>
        <div className="info-grid">
          <div className="info-item fade-in">
            <FaMapMarkerAlt className="icon" />
            <h3>Our Location</h3>
            <p>{address}</p>
          </div>
          <div className="info-item fade-in" onClick={handleEmailClick}>
            <FaEnvelope className="icon" />
            <h3>Email Us</h3>
            <p>{email}</p>
          </div>
          <div className="info-item fade-in">
            <FaPhone className="icon" />
            <h3>Call Us</h3>
            <p>{phone}</p>
          </div>
          <div className="info-item fade-in" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <p>Chat with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;