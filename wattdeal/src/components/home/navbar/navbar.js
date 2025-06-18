import React from 'react';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="nav-search-form">
          <input type="search" placeholder="Search..." />
          <button><i className="fa fa-search"></i></button>
        </div>
        <div className="navigation">
          <div className="navigation-items">
            <a href="/home">Home</a>
            <a href="/category">Retail</a>
            <a href="/wholesale">Wholesale</a>
            <a href="/locator">Locator</a>
            <a href="/mainvendor">Vendor</a>
            <a href="/blog">Blog</a>
            <a href="/cart">Cart</a>
            <a href="/signup" className="signup-button">Sign Up</a>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* General Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%; /* Circle the logo as requested */
        }
        
        .logo:hover {
          filter: drop-shadow(1px 0px 2px #03f35b);
        }
        
        header {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          z-index: 999;
          position: fixed;
          top: 0;
          left: 0;
          height: 80px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.5s ease;
          padding: 10px 100px;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
          backdrop-filter: blur(6px);
          background-color: rgb(102, 102, 102);
        }
        
        header:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        
        header .navigation {
          position: relative;
        }
        
        header .navigation .navigation-items a {
          position: relative;
          color: #fff;
          font-size: 1.1em;
          font-weight: 700;
          text-decoration: none;
          margin-left: 40px;
          transition: 0.3s ease;
        }
        
        header .navigation .navigation-items a:hover {
          color: #01fe87;
        }
        
        header .navigation .navigation-items a:before {
          content: '';
          position: absolute;
          background: #000;
          width: 0;
          height: 3px;
          bottom: 0;
          left: 0;
          transition: 0.3s ease;
        }
        
        header .navigation .navigation-items a:hover:before {
          width: 100%;
          background: #01fe87;
        }
        
        header.bgColor {
          background-color: rgba(0, 0, 0, 0.8);
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
        }
        
        .signup-button {
          background-color: #007bff;
          color: white !important;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          margin-left: 10px;
          cursor: pointer;
        }
        
        .signup-button:hover {
          background-color: #0056b3;
        }
        
        .nav-search-form {
          display: inline-block;
          vertical-align: middle;
          margin: 0 10px;
        }
        
        .nav-search-form input[type="search"] {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 200px;
        }
        
        .nav-search-form button {
          padding: 8px 12px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          margin-left: -4px;
        }
        
        .nav-search-form button i {
          margin-right: 5px;
        }
      `}</style>
    </>
  );
}