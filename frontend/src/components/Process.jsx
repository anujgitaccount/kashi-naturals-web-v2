import React from 'react';
import { Wheat, Droplet, Package, Truck } from 'lucide-react';
import config from '../config';

const Process = () => {
  const processSteps = [
    {
      icon: Wheat,
      number: '01',
      title: 'Selection',
      description: 'We carefully select the finest quality mustard seeds and pure cow milk from trusted local farmers.',
    },
    {
      icon: Droplet,
      number: '02',
      title: 'Extraction',
      description: 'Traditional cold-pressed (kachi ghani) method for oil and bilona method for ghee - no heat, no chemicals.',
    },
    {
      icon: Package,
      number: '03',
      title: 'Quality Check',
      description: 'Rigorous quality testing to ensure purity, freshness, and authentic taste in every batch.',
    },
    {
      icon: Truck,
      number: '04',
      title: 'Delivery',
      description: 'Carefully packaged and delivered fresh from Varanasi directly to your doorstep.',
    },
  ];

  return (
    <section id="process" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>Our Production Process</h2>
          <p className="body-large" style={styles.subtitle}>
            From Farm to Your Kitchen - Pure & Traditional
          </p>
        </div>

        <div style={styles.processGrid}>
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} style={styles.processCard}>
                <div style={styles.stepNumber}>{step.number}</div>
                <div style={styles.iconCircle}>
                  <Icon size={32} color="var(--text-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            );
          })}
        </div>

        <div style={styles.imageSection}>
          <img
            src={config.images.process.coldPress}
            alt="Traditional Cold Press Process"
            style={styles.processImage}
          />
          <div style={styles.imageCaption}>
            <p style={styles.captionText}>
              Traditional cold-pressing ensures that all natural nutrients, flavor, and aroma are preserved 
              in their most authentic form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 1.2rem',
    background: 'var(--bg-page)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionTitle: {
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
    maxWidth: '1200px',
    margin: '0 auto 4rem',
  },
  processCard: {
    background: 'var(--bg-card)',
    padding: '2rem 1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
  },
  stepNumber: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'var(--warm-cream)',
    lineHeight: 1,
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'var(--warm-cream)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    border: '2px solid var(--border-light)',
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
  },
  stepDescription: {
    fontSize: '0.9375rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  imageSection: {
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  processImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imageCaption: {
    background: 'var(--warm-cream)',
    padding: '1.5rem',
    textAlign: 'center',
  },
  captionText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
  },
};

export default Process;
