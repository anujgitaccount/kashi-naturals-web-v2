import React from 'react';
import { Star, Quote } from 'lucide-react';
import config from '../config';

const Testimonials = () => {
  const testimonials = config.testimonials;

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <Star key={i} size={16} fill="var(--mustard-yellow)" color="var(--mustard-yellow)" />);
  };

  return (
    <section id="testimonials" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>What Our Customers Say</h2>
          <p className="body-large" style={styles.subtitle}>
            Real Reviews from Real People
          </p>
        </div>

        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={styles.testimonialCard}>
              <div style={styles.quoteIcon}>
                <Quote size={28} color="var(--mustard-yellow)" />
              </div>
              <div style={styles.rating}>{renderStars(testimonial.rating)}</div>
              <p style={styles.testimonialText}>{testimonial.text}</p>
              <div style={styles.customerInfo}>
                <h4 style={styles.customerName}>{testimonial.name}</h4>
                <p style={styles.customerLocation}>{testimonial.location}</p>
              </div>
            </div>
          ))}
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
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  testimonialCard: {
    background: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  quoteIcon: {
    marginBottom: '1rem',
    opacity: 0.3,
  },
  rating: {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '1rem',
  },
  testimonialText: {
    fontSize: '0.9375rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  customerInfo: {
    borderTop: '1px solid var(--border-light)',
    paddingTop: '1rem',
  },
  customerName: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  customerLocation: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
  },
};

export default Testimonials;
