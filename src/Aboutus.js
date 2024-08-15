import React, { useState } from 'react';
import './Aboutus.css';
import bed from './screens/bed1.jpg';
import pic from './screens/front.jpg';
import pic1 from './screens/dining.jpg';

const Aboutus = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="about-page">
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>RK TRADER</h1>
            <p>Redefining Spaces, One Piece at a Time</p>
          </div>
          <div className="hero-image" style={{backgroundImage: `url(${pic})`}}></div>
        </section>

        <section className="tab-section">
          <div className="tab-buttons">
            <button 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => setActiveSection('about')}
            >
              About Us
            </button>
            <button 
              className={activeSection === 'beliefs' ? 'active' : ''} 
              onClick={() => setActiveSection('beliefs')}
            >
              Our Beliefs
            </button>
            <button 
              className={activeSection === 'visit' ? 'active' : ''} 
              onClick={() => setActiveSection('visit')}
            >
              Visit Us
            </button>
          </div>

          <div className="tab-content">
            {activeSection === 'about' && (
              <div className="about-content">
                <h2>About RK TRADER</h2>
                <p>
                  At RK TRADER, we believe that furniture is the heart of home decoration. 
                  We offer luxurious furniture accessories with beneficial properties and unique designs, 
                  carefully chosen to enhance your living spaces.
                </p>
                <div className="image-gallery">
                  <img src={bed} alt="Bedroom" />
                  <img src={pic1} alt="Dining Room" />
                </div>
              </div>
            )}

            {activeSection === 'beliefs' && (
              <div className="beliefs-content">
                <h2>Our Core Beliefs</h2>
                <ul className="belief-list">
                  <li>Quality is non-negotiable</li>
                  <li>Design should inspire</li>
                  <li>Comfort is key</li>
                  <li>Sustainability matters</li>
                </ul>
              </div>
            )}

            {activeSection === 'visit' && (
              <div className="visit-content">
                <h2>Experience RK TRADER</h2>
                <p>
                  Visit our showroom to explore a wide range of affordable, high-quality furniture. 
                  With discounts of up to 70% off, we provide a seamless shopping experience.
                </p>
                <button className="cta-button" onClick={toggleMap}>
                  {showMap ? 'Hide Map' : 'Find a Store'}
                </button>
                {showMap && (
                  <div className="map-container">
                    <iframe
                      title="RK TRADER Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.8302672489856!2d77.09967921505752!3d28.81527798234921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9b33e161d3d%3A0x17f3d2ec6d02131c!2s1995-A%2C%20Railway%20Rd%2C%20Block%20A%2C%20Swatantra%20Nagar%2C%20Narela%2C%20Delhi%2C%20110040!5e0!3m2!1sen!2sin!4v1628787283339!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{border:0}}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose RK TRADER?</h2>
          <div className="features-grid">
            {['Tailored Spaces', 'Quality Sleep', 'Versatile Decor', 'Effortless Shopping'].map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature}</h3>
                <p>Experience the best in furniture design and comfort with our {feature.toLowerCase()} solutions.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Aboutus;