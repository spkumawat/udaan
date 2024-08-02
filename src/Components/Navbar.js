import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img  className="imageoflogo" src="https://lh5.googleusercontent.com/qUKWqDBrAmabeTlSCDUqNt6jKeMLE3ok3WevMBnvB0Xoxm7hxacqeIE8o1eOYcpVwkM=w2400"/>
      </div>
      <div className="navbar-menu">
        <a href="#about" className="navbar-item">ABOUT US</a>
        <a href="#counts" className="navbar-item">COUNTS</a>
        <a href="#past-events" className="navbar-item">EVENTS</a>
        <a href="#team" className="navbar-item">TEAM</a>
        <a href="#gallery" className="navbar-item">GALLARY</a>
     
      </div>
    </nav>
    
  );
};

export default Navbar;
