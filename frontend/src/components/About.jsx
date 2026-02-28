import React from 'react';
import { Heart, Leaf, Award } from 'lucide-react';
import config from '../config';

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div className="container">
        <div style={styles.aboutHeader}>
          <h2 className="heading-1" style={styles.sectionTitle}>About {config.company.name}</h2>
          <p className="body-large" style={styles.subtitle}>
            Bringing Traditional Purity to Modern Kitchens
          </p>
        </div>

        <div style={styles.aboutContent}>
          <div style={styles.storySection}>
            <img
              src={config.images.about.traditionalCooking}
              alt="Traditional Indian Cooking"
              style={styles.aboutImage}
            />
          </div>

          <div style={styles.textSection}>
            <h3 className="heading-2" style={styles.aboutHeading}>Our Story</h3>
            <p style={styles.aboutText}>
              Rooted in the ancient city of {config.contact.address.split(',')[0]}, {config.company.name} carries forward centuries-old 
              traditions of producing the purest, most authentic natural food products. Our journey 
              began with a simple belief: food in its most natural form is the healthiest.
            </p>

            <div style={styles.valuesGrid}>
              <div style={styles.valueCard}>
                <div style={styles.iconWrapper}>
                  <Leaf size={28} color="var(--natural-green)" />
                </div>
                <h4 style={styles.valueTitle}>100% Natural</h4>
                <p style={styles.valueText}>
                  No chemicals, no preservatives, just pure nature
                </p>
              </div>

              <div style={styles.valueCard}>
                <div style={styles.iconWrapper}>
                  <Heart size={28} color="var(--mustard-yellow)" />
                </div>
                <h4 style={styles.valueTitle}>Traditional Methods</h4>
                <p style={styles.valueText}>
                  Age-old cold-pressed extraction techniques
                </p>
              </div>

              <div style={styles.valueCard}>
                <div style={styles.iconWrapper}>
                  <Award size={28} color="var(--earth-brown)" />
                </div>
                <h4 style={styles.valueTitle}>Quality Promise</h4>
                <p style={styles.valueText}>
                  Direct from source to your kitchen
                </p>
              </div>
            </div>

            <div style={styles.processBox}>
              <h4 style={styles.processTitle}>Our Cold-Pressed Method</h4>
              <p style={styles.processText}>
                We use the traditional "kachi ghani" (wood-pressed) method where seeds are crushed 
                at low temperatures, preserving all natural nutrients, flavor, and aroma. Unlike 
                industrial processing, this ensures zero chemical intervention and maximum health benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '5rem 1.2rem',
    background: 'var(--bg-page)',
  },
  aboutHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start',
  },
  storySection: {
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  aboutHeading: {
    marginBottom: '0.5rem',
  },
  aboutText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  valueCard: {
    textAlign: 'center',
  },
  iconWrapper: {
    marginBottom: '0.75rem',
  },
  valueTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  valueText: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  processBox: {
    background: 'var(--warm-cream)',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border-light)',
  },
  processTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
  },
  processText: {
    fontSize: '0.9375rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
};

export default About;
