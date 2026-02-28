import React from 'react';
import { Shield, Leaf, Heart, Award, MapPin, Droplet } from 'lucide-react';
import config from '../config';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Pure & Natural',
      description: 'No chemicals, preservatives, or artificial additives. Just pure, natural goodness.',
    },
    {
      icon: Leaf,
      title: 'Traditional Extraction',
      description: 'Cold-pressed and wood-pressed methods that preserve all nutrients and natural flavor.',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Rich in essential nutrients, vitamins, and minerals for your overall well-being.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Carefully sourced ingredients and traditional methods ensure superior quality.',
    },
    {
      icon: MapPin,
      title: 'Locally Produced',
      description: 'Made in Varanasi with locally sourced ingredients, supporting local farmers.',
    },
    {
      icon: Droplet,
      title: 'No Preservatives',
      description: 'Pure products with no chemical preservatives. Natural shelf life maintained through traditional methods.',
    },
  ];

  return (
    <section id="why-choose-us" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>Why Choose {config.company.name}?</h2>
          <p className="body-large" style={styles.subtitle}>
            Commitment to Purity, Quality, and Tradition
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card" style={styles.featureCard}>
                <div style={styles.iconWrapper}>
                  <Icon size={36} color="var(--mustard-yellow)" strokeWidth={1.5} />
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
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
    maxWidth: '700px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureCard: {
    background: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  iconWrapper: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
  },
  featureDescription: {
    fontSize: '0.9375rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
};

export default WhyChooseUs;
