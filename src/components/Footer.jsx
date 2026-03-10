import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div>
          <span className="site-footer__brand font-display">HQG</span>
          <p className="site-footer__copy">
            Husky Quantitative Group, UConn&apos;s student-run quantitative trading organization.
          </p>
        </div>

        <div>
          <p className="site-footer__label">Links</p>
          <div className="site-footer__links">
            <a href="/#about">About Us</a>
            <a href="/research">Research</a>
            <a href="/engineering">Engineering</a>
            <a href="/#apply">Apply</a>
          </div>
        </div>

        <div>
          <p className="site-footer__label">Connect</p>
          <div className="site-footer__links">
            <a
              href="https://github.com/Husky-Quantitative-Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/uconnquant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:connect@uconnquant.com">connect@uconnquant.com</a>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Husky Quantitative Group. All rights reserved.</p>
        <p className="site-footer__school">University of Connecticut</p>
      </div>
    </footer>
  );
}

export default Footer;
