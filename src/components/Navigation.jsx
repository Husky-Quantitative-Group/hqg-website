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

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20.76 15.26A9 9 0 0 1 8.74 3.24 9 9 0 1 0 20.76 15.26z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 1.5v3M12 19.5v3M22.5 12h-3M4.5 12h-3M19.42 4.58l-2.12 2.12M6.7 17.3l-2.12 2.12M19.42 19.42l-2.12-2.12M6.7 6.7L4.58 4.58" />
  </svg>
);

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const savedTheme = localStorage.getItem('hqg-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('hqg-theme', dark ? 'dark' : 'light');
  }, [dark]);

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
            src={dark ? '/alt_logo_no_bg.png' : '/logo.png'}
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

          <button
            type="button"
            className="site-nav__theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <div className="site-nav__mobile-controls">
          <button
            type="button"
            className="site-nav__theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
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
