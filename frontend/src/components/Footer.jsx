import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import config from '../config';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          {/* Brand Section */}
          <div style={styles.footerSection}>
            <h3 style={styles.brandName}>{config.company.name}</h3>
            <p style={styles.tagline}>{config.company.tagline}</p>
            <p style={styles.description}>
              {config.company.description}
            </p>
            <div style={styles.socialIcons}>
              <a href={config.socialMedia.facebook} style={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href={config.socialMedia.instagram} style={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href={config.socialMedia.twitter} style={styles.socialIcon} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li>
                <button onClick={() => scrollToSection('home')} style={styles.link}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} style={styles.link}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} style={styles.link}>
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('benefits')} style={styles.link}>
                  Benefits
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} style={styles.link}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Our Products</h4>
            <ul style={styles.linkList}>
              <li style={styles.productItem}>Cold Pressed Mustard Oil</li>
              <li style={styles.productItem}>Pure Desi Ghee</li>
              <li style={styles.productItem}>Traditional Kachi Ghani</li>
              <li style={styles.productItem}>Bilona Method Ghee</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Contact Us</h4>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                <Phone size={16} />
                <a href={config.contact.phoneLink} style={styles.contactLink}>
                  {config.contact.phoneFormatted}
                </a>
              </li>
              <li style={styles.contactItem}>
                <Mail size={16} />
                <a href={config.contact.emailLink} style={styles.contactLink}>
                  {config.contact.email}
                </a>
              </li>
              <li style={styles.contactItem}>
                <MapPin size={16} />
                <span style={styles.contactText}>{config.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {config.company.foundedYear} {config.company.name}. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bottomLink}>
              Privacy Policy
            </a>
            <span style={styles.divider}>|</span>
            <a href="#" style={styles.bottomLink}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'var(--text-primary)',
    color: 'white',
    padding: '4rem 1.2rem 2rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '0.9375rem',
    fontStyle: 'italic',
    opacity: 0.9,
  },
  description: {
    fontSize: '0.875rem',
    lineHeight: '1.6',
    opacity: 0.8,
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    transition: 'background 0.2s ease',
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '0.875rem',
    opacity: 0.8,
    cursor: 'pointer',
    textAlign: 'left',
    padding: 0,
    transition: 'opacity 0.2s ease',
  },
  productItem: {
    fontSize: '0.875rem',
    opacity: 0.8,
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    opacity: 0.8,
  },
  contactLink: {
    color: 'white',
    textDecoration: 'none',
  },
  contactText: {
    color: 'white',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    fontSize: '0.875rem',
    opacity: 0.7,
  },
  bottomLinks: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  bottomLink: {
    color: 'white',
    fontSize: '0.875rem',
    textDecoration: 'none',
    opacity: 0.7,
  },
  divider: {
    opacity: 0.3,
  },
};

export default Footer;
