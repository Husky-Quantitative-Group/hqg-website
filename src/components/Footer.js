import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Husky Quantitative Group</h3>
          <p>University of Connecticut</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:contact@hqg.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Husky Quantitative Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
