import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const navLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Team', href: '/team' },
  { label: 'Research', href: '/research' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Blog', href: '/blog' },
  { label: 'GitHub', href: 'https://github.com/Husky-Quantitative-Group', external: true },
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
      <div className="container site-nav__inner">
        <Link to="/" className="site-nav__brand" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/alt_logo_no_bg.png"
            alt="HQG"
            className="site-nav__logo"
          />
          <span className="site-nav__brand-text">Husky Quantitative Group</span>
        </Link>

        <div className="site-nav__desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="site-nav__link"
            >
              {link.label}
            </a>
          ))}

          <a href="/#apply" className="site-nav__apply">
            Apply
          </a>
        </div>

        <div className="site-nav__mobile-controls">
          <button
            type="button"
            className={`site-nav__menu-button${mobileMenuOpen ? ' is-open' : ''}`}
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`site-nav__mobile-menu${mobileMenuOpen ? ' is-open' : ''}`}>
        <div className="container site-nav__mobile-menu-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="site-nav__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#apply"
            className="site-nav__mobile-apply"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply -
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
