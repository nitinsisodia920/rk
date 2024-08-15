import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './screens/logo1.png';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-logo-section">
                        <Link to="/" className="footer-logo-link">
                            <img className="footer-logo" src={logo} alt="RK TRADER logo"/>
                        </Link>
                        <p className="footer-tagline">RK TRADER</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-link-column">
                            <h3>Company</h3>
                            <Link className="footer-link" to="/about">About Us</Link>
                            <Link className="footer-link" to="/careers">Careers</Link>
                            <Link className="footer-link" to="/press">Press</Link>
                        </div>
                        <div className="footer-link-column">
                            <h3>Products</h3>
                            <Link className="footer-link" to="/collection">Collection</Link>
                            <Link className="footer-link" to="/services">Services</Link>
                            <Link className="footer-link" to="/pricing">Pricing</Link>
                        </div>
                        <div className="footer-link-column">
                            <h3>Support</h3>
                            <Link className="footer-link" to="/help">Help Center</Link>
                            <Link className="footer-link" to="/contact">Contact Us</Link>
                            <Link className="footer-link" to="/faq">FAQ</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-social">
                        <a className="footer-social-icon" href="https://twitter.com/rktrader" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a className="footer-social-icon" href="https://instagram.com/rktrader" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a className="footer-social-icon" href="https://facebook.com/rktrader" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                    </div>
                    <p className="footer-copyright">© 2024 RK TRADER, Inc. All rights reserved.</p>
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        <ArrowUpwardIcon />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;