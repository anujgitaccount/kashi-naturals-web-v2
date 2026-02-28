import React from 'react';
import { Heart, Brain, Bone, Activity } from 'lucide-react';
import config from '../config';

const Benefits = () => {
  const mustardBenefits = [
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Rich in monounsaturated and polyunsaturated fats that help reduce bad cholesterol.',
    },
    {
      icon: Brain,
      title: 'Brain Function',
      description: 'Contains omega-3 fatty acids essential for cognitive function and memory.',
    },
    {
      icon: Activity,
      title: 'Anti-inflammatory',
      description: 'Natural anti-inflammatory properties help reduce joint pain and inflammation.',
    },
    {
      icon: Heart,
      title: 'Immunity Booster',
      description: 'Natural antibacterial and antifungal properties strengthen immune system.',
    },
  ];

  const gheeBenefits = [
    {
      icon: Activity,
      title: 'Digestive Health',
      description: 'Contains butyric acid that supports healthy digestion and gut health.',
    },
    {
      icon: Bone,
      title: 'Bone Strength',
      description: 'Rich in vitamin K2 that helps in calcium absorption for stronger bones.',
    },
    {
      icon: Brain,
      title: 'Brain Health',
      description: 'Contains healthy fats that support brain function and nervous system.',
    },
    {
      icon: Heart,
      title: 'Energy Source',
      description: 'Provides quick energy and helps in absorption of fat-soluble vitamins.',
    },
  ];

  return (
    <section id="benefits" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>Health Benefits</h2>
          <p className="body-large" style={styles.subtitle}>
            Nature's Gift for Your Well-being
          </p>
        </div>

        <div style={styles.benefitsContainer}>
          {/* Mustard Oil Benefits */}
          <div style={styles.benefitSection}>
            <div style={styles.benefitHeader}>
              <img
                src={config.images.benefits.mustardOilBottle}
                alt="Mustard Oil"
                style={styles.benefitImage}
              />
              <h3 className="heading-2" style={styles.benefitTitle}>
                Cold Pressed Mustard Oil Benefits
              </h3>
            </div>
            <div style={styles.benefitsGrid}>
              {mustardBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} style={styles.benefitCard}>
                    <Icon size={28} color="var(--mustard-yellow)" strokeWidth={1.5} />
                    <div>
                      <h4 style={styles.cardTitle}>{benefit.title}</h4>
                      <p style={styles.cardDescription}>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desi Ghee Benefits */}
          <div style={styles.benefitSection}>
            <div style={styles.benefitHeader}>
              <img
                src={config.images.benefits.gheeJar}
                alt="Desi Ghee"
                style={styles.benefitImage}
              />
              <h3 className="heading-2" style={styles.benefitTitle}>
                Pure Desi Ghee Benefits
              </h3>
            </div>
            <div style={styles.benefitsGrid}>
              {gheeBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} style={styles.benefitCard}>
                    <Icon size={28} color="var(--natural-green)" strokeWidth={1.5} />
                    <div>
                      <h4 style={styles.cardTitle}>{benefit.title}</h4>
                      <p style={styles.cardDescription}>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 1.2rem',
    background: 'var(--bg-section)',
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
  benefitsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  benefitSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  benefitHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  benefitImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  benefitTitle: {
    marginBottom: '0',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  benefitCard: {
    background: 'var(--bg-card)',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    gap: '1rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  cardDescription: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
  },
};

export default Benefits;
