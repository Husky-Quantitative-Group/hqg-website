import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/software">Software</Link></li>
            <li><Link to="/apply">Apply</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/Husky-Quantitative-Group" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/company/h-q-g/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://discord.gg/3KcdBwdyAm" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://www.instagram.com/huskyquantitativegroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="mailto:connect@uconnquant.com">Email</a></li>
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
