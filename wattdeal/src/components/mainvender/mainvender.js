import React from 'react';

const VendorPrograms = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <h1>WattDeal Vendor Programs</h1>
          <p>Choose the vendor program that best suits your business needs and join our growing marketplace</p>
        </div>
        <div className="card-grid">
          <div className="card">
            <div className="icon-container">
              <div className="icon-circle green">
                <i className="fas fa-store fa-2x"></i>
              </div>
            </div>
            <h2>Retail Vendor</h2>
            <p>Join our network of retail vendors and showcase your products to a wider audience. Perfect for established businesses looking to expand their reach.</p>
            <a href="/vendor" className="button">Click Here</a>
          </div>
          <div className="card">
            <div className="icon-container">
              <div className="icon-circle blue">
                <i className="fas fa-gavel fa-2x"></i>
              </div>
            </div>
            <h2>Bid Vendor</h2>
            <p>Participate in our bidding system to compete for valuable contracts. Ideal for suppliers and contractors seeking new business opportunities.</p>
            <a href="/bidvendor" className="button">Click Here</a>
          </div>
          <div className="card">
            <div className="icon-container">
              <div className="icon-circle purple">
                <i className="fas fa-map-marker-alt fa-2x"></i>
              </div>
            </div>
            <h2>Locator Vendor</h2>
            <p>Register as a locator vendor to help customers find specific products and services in their area. Great for local businesses and service providers.</p>
            <a href="/locatorvendor" className="button">Click Here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles combined directly
const styles = `

/* Base Styles */
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f3f4f6;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
  
  /* Header Styles */
  .header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .header h1 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }
  
  .header p {
    font-size: 1rem;
    color: #6b7280;
  }
  
  /* Card Grid Layout */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .card-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Card Styles */
  .card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  /* Icon Container */
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: white;
  }
  
  .icon-circle.green {
    background-color: #10b981;
  }
  
  .icon-circle.blue {
    background-color: #3b82f6;
  }
  
  .icon-circle.purple {
    background-color: #8b5cf6;
  }
  
  /* Card Content */
  .card h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #111827;
  }
  
  .card p {
    color: #6b7280;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  /* Button Styles */
  .button {
    display: inline-block;
    background-color: #9333ea;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #7e22ce;
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default VendorPrograms;