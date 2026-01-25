import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/alt_logo_no_bg.png" alt="HQG Logo" className="nav-logo-img" />
        </Link>
        <button 
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/research" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Research
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/software" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Software
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
