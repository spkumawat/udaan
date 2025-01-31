import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
          
          <div className="navbar-brand">
            <img className="imageoflogo" src="./ngo-logo.png" alt="company-logo" />
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link
              to="/"
              className={`navbar-item ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              HOME
            </Link>
            <Link
              to="/aboutus"
              className={`navbar-item ${activeLink === '/aboutus' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/aboutus')}
            >
              ABOUT US
            </Link>
            <Link
              to="/counts"
              className={`navbar-item ${activeLink === '/counts' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/counts')}
            >
              COUNTS
            </Link>
            <Link
              to="/events"
              className={`navbar-item ${activeLink === '/events' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/events')}
            >
              EVENTS
            </Link>
            <Link
              to="/team"
              className={`navbar-item ${activeLink === '/team' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/team')}
            >
              TEAM
            </Link>
            <Link
              to="/gallary"
              className={`navbar-item ${activeLink === '/gallary' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/gallary')}
            >
              GALLARY
            </Link>
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

    
    
    </nav>
  );
};

export default Navbar;
