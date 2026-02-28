import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import config from '../config';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={styles.hero}>
      <div className="container" style={styles.heroContent}>
        <div style={styles.announcement}>
          <span style={styles.announcementText}>100% PURE & NATURAL</span>
        </div>

        <h1 className="heading-hero" style={styles.heroTitle}>
          {config.company.name}
        </h1>

        <p style={styles.tagline}>{config.company.tagline}</p>

        <p className="body-large" style={styles.heroDescription}>
          Discover the authentic taste of tradition with our cold-pressed mustard oil and pure desi ghee.
          Made using age-old methods, directly from {config.contact.address.split(',')[0]} to your kitchen.
        </p>

        <div style={styles.heroCTA}>
          <button onClick={scrollToProducts} className="btn-primary">
            <ShoppingCart size={18} />
            Shop Now
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            <MessageCircle size={18} />
            Contact Us
          </button>
        </div>

        <div style={styles.heroImages}>
          <div style={styles.heroImageWrapper}>
            <img
              src={config.images.hero.mustardSeeds}
              alt="Premium Mustard Seeds"
              style={styles.heroImage}
            />
          </div>
          <div style={styles.heroImageWrapper}>
            <img
              src={config.images.hero.desiGhee}
              alt="Pure Desi Ghee"
              style={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background: 'linear-gradient(135deg, rgba(254, 241, 220, 1) 0%, rgba(255, 249, 242, 0.95) 50%, rgba(254, 241, 220, 1) 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8rem 1.2rem 4rem',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  announcement: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
    marginBottom: '1.5rem',
    backdropFilter: 'blur(4px)',
  },
  announcementText: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: 'var(--text-primary)',
  },
  heroTitle: {
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '1.25rem',
    fontWeight: 500,
    color: 'var(--earth-brown)',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  heroDescription: {
    maxWidth: '700px',
    margin: '0 auto 2rem',
    color: 'var(--text-secondary)',
  },
  heroCTA: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  heroImages: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '3rem',
  },
  heroImageWrapper: {
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  heroImage: {
    width: '280px',
    height: '280px',
    objectFit: 'cover',
    display: 'block',
  },
};

export default Hero;
