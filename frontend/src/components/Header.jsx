import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import config from '../config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerContent}>
        <div style={styles.logo}>
          <h2 style={styles.logoText}>{config.company.name}</h2>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          <button onClick={() => scrollToSection('home')} style={styles.navLink}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} style={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection('products')} style={styles.navLink}>
            Products
          </button>
          <button onClick={() => scrollToSection('benefits')} style={styles.navLink}>
            Benefits
          </button>
          <button onClick={() => scrollToSection('testimonials')} style={styles.navLink}>
            Testimonials
          </button>
          <button onClick={() => scrollToSection('contact')} style={styles.navLink}>
            Contact
          </button>
        </nav>

        <div style={styles.headerActions}>
          <a href={config.contact.phoneLink} className="btn-primary" style={styles.phoneBtn}>
            <Phone size={16} />
            <span style={styles.phoneNumber}>{config.contact.phone}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={styles.mobileNav}>
          <button onClick={() => scrollToSection('home')} style={styles.mobileNavLink}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} style={styles.mobileNavLink}>
            About
          </button>
          <button onClick={() => scrollToSection('products')} style={styles.mobileNavLink}>
            Products
          </button>
          <button onClick={() => scrollToSection('benefits')} style={styles.mobileNavLink}>
            Benefits
          </button>
          <button onClick={() => scrollToSection('testimonials')} style={styles.mobileNavLink}>
            Testimonials
          </button>
          <button onClick={() => scrollToSection('contact')} style={styles.mobileNavLink}>
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    background: 'var(--bg-overlay)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border-light)',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0,
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '0.5rem 0',
    transition: 'color 0.2s ease',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  phoneBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  phoneNumber: {
    display: 'inline-block',
  },
  menuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    color: 'var(--text-primary)',
  },
  mobileNav: {
    display: 'none',
    flexDirection: 'column',
    background: 'var(--bg-card)',
    padding: '1rem',
    borderTop: '1px solid var(--border-light)',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '1rem',
    textAlign: 'left',
    cursor: 'pointer',
    borderBottom: '1px solid var(--border-light)',
  },
};

// Responsive styles
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  styles.desktopNav.display = 'none';
  styles.phoneNumber.display = 'none';
  styles.menuToggle.display = 'block';
  styles.mobileNav.display = 'flex';
}

export default Header;
