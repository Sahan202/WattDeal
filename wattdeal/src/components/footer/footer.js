import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-footer-container">
        <div className="ft-footer-top">
          <div className="ft-footer-logo">
            <h2>WattDeal</h2>
            <p className="ft-footer-tagline">Quality products for everyone</p>
          </div>
          
          <div className="ft-footer-newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <div className="ft-newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="ft-footer-content">
          <div className="ft-footer-section">
            <h3>Contact Us</h3>
            <div className="ft-contact-info">
              <div className="ft-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p>340/24, Medahena Road, Welegoda, Matara</p>
              </div>
              <div className="ft-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <p>(+94) 76 6428 635 / (+94) 72 8766 082</p>
              </div>
              <div className="ft-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <p>Hours: 10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>

          <div className="ft-footer-section">
            <h3>About</h3>
            <ul className="ft-footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="ft-footer-section">
            <h3>My Account</h3>
            <ul className="ft-footer-links">
              <li><a href="/login">Sign In</a></li>
              <li><a href="/cart">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="ft-footer-section">
            <h3>Install App</h3>
            <p>Shop on the go with our mobile app</p>
            <div className="ft-app-buttons">
              <a href="#" className="ft-app-button">
                <img src="https://static8.depositphotos.com/1000128/1006/i/450/depositphotos_10062530-stock-photo-smartphone-with-cloud-of-application.jpg" alt="Get it on Google Play"/>
              </a>
            </div>
            <div className="ft-payment-section">
              <p>Secured Payment Options</p>
              <div className="ft-payment-options">
                <img src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png" alt="Visa"/>
                <img src="https://static.vecteezy.com/system/resources/previews/000/064/474/non_2x/mastercard-vector.jpg" alt="MasterCard"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ft-footer-bottom">
          <div className="ft-social-icons">
            <a href="#" className="ft-social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="ft-social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="ft-social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="ft-social-icon" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
          <div className="ft-copyright">
            <p>&copy; {new Date().getFullYear()} ReFab. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Updated styles
const styles = `
/* Footer Styles */
.ft-footer {
  background: linear-gradient(135deg, #1a2980, #26d0ce);
  color: #fff;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.ft-footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer Top Section with Logo and Newsletter */
.ft-footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 30px;
}

.ft-footer-logo h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
}

.ft-footer-tagline {
  font-size: 14px;
  opacity: 0.8;
}

.ft-footer-newsletter {
  max-width: 400px;
}

.ft-footer-newsletter h3 {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
}

.ft-newsletter-form {
  display: flex;
}

.ft-newsletter-form input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;
}

.ft-newsletter-form button {
  background-color: #ffdd00;
  color: #333;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
}

.ft-newsletter-form button:hover {
  background-color: #ffd000;
  transform: translateY(-2px);
}

/* Main Content Area */
.ft-footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0 30px;
  gap: 30px;
}

.ft-footer-section {
  flex: 1;
  min-width: 200px;
}

.ft-footer-section h3 {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.ft-footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background-color: #ffdd00;
  border-radius: 10px;
}

/* Contact Section */
.ft-contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ft-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.ft-contact-item svg {
  margin-top: 3px;
  color: #ffdd00;
}

.ft-contact-item p {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* Links Styling */
.ft-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ft-footer-links li {
  margin-bottom: 12px;
}

.ft-footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.ft-footer-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #ffdd00;
  transition: width 0.3s ease;
}

.ft-footer-links a:hover {
  color: #fff;
  transform: translateX(5px);
}

.ft-footer-links a:hover::after {
  width: 100%;
}

/* App Download Section */
.ft-app-buttons {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.ft-app-button img {
  height: 35px;
  border-radius: 5px;
  transition: transform 0.3s;
}

.ft-app-button:hover img {
  transform: translateY(-3px);
}

/* Payment Section */
.ft-payment-section {
  margin-top: 20px;
}

.ft-payment-section p {
  font-size: 14px;
  margin-bottom: 10px;
}

.ft-payment-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ft-payment-options img {
  height: 25px;
  background-color: #fff;
  padding: 3px;
  border-radius: 4px;
}

/* Footer Bottom */
.ft-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 20px;
}

.ft-social-icons {
  display: flex;
  gap: 15px;
}

.ft-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
}

.ft-social-icon:hover {
  background-color: #ffdd00;
  color: #333;
  transform: translateY(-3px);
}

.ft-copyright p {
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 992px) {
  .ft-footer-section {
    flex-basis: calc(50% - 30px);
  }
  
  .ft-footer-top {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .ft-footer-content {
    flex-direction: column;
  }
  
  .ft-footer-section {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
  
  .ft-footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .ft-social-icons {
    justify-content: center;
    margin-bottom: 15px;
  }
}
`;

// Add the styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);