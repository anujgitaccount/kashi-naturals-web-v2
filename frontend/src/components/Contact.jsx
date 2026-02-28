import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import config from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open WhatsApp with form data
    const message = encodeURIComponent(
      `Hi! I'm ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    window.open(`${config.contact.whatsappLink}?text=${message}`, '_blank');
  };

  const openWhatsApp = () => {
    window.open(config.contact.whatsappLink, '_blank');
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>Get In Touch</h2>
          <p className="body-large" style={styles.subtitle}>
            We'd love to hear from you. Reach out for orders or inquiries.
          </p>
        </div>

        <div style={styles.contactContainer}>
          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <h3 className="heading-2" style={styles.infoTitle}>Contact Information</h3>
            <p style={styles.infoDescription}>
              Feel free to reach out to us through any of the following channels:
            </p>

            <div style={styles.infoCards}>
              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <Phone size={24} color="var(--mustard-yellow)" />
                </div>
                <div>
                  <h4 style={styles.infoCardTitle}>Phone</h4>
                  <a href={config.contact.phoneLink} style={styles.infoCardText}>
                    {config.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <MessageCircle size={24} color="var(--natural-green)" />
                </div>
                <div>
                  <h4 style={styles.infoCardTitle}>WhatsApp</h4>
                  <button onClick={openWhatsApp} style={styles.infoCardLink}>
                    Chat with us
                  </button>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <Mail size={24} color="var(--earth-brown)" />
                </div>
                <div>
                  <h4 style={styles.infoCardTitle}>Email</h4>
                  <a href={config.contact.emailLink} style={styles.infoCardText}>
                    {config.contact.email}
                  </a>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <MapPin size={24} color="var(--mustard-yellow)" />
                </div>
                <div>
                  <h4 style={styles.infoCardTitle}>Location</h4>
                  <p style={styles.infoCardText}>{config.contact.address}</p>
                </div>
              </div>
            </div>

            <button onClick={openWhatsApp} className="btn-primary" style={styles.whatsappBtn}>
              <MessageCircle size={18} />
              Order on WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={styles.textarea}
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button type="submit" className="btn-primary" style={styles.submitBtn}>
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
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
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoTitle: {
    marginBottom: '0.5rem',
  },
  infoDescription: {
    fontSize: '0.9375rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    marginBottom: '1rem',
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  infoCard: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'start',
    background: 'var(--bg-card)',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
  },
  infoIcon: {
    flexShrink: 0,
  },
  infoCardTitle: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  infoCardText: {
    fontSize: '0.9375rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
  },
  infoCardLink: {
    fontSize: '0.9375rem',
    color: 'var(--natural-green)',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  whatsappBtn: {
    marginTop: '1rem',
  },
  formContainer: {
    background: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
  },
  input: {
    padding: '0.75rem 1rem',
    fontSize: '0.9375rem',
    border: '1px solid var(--border-input)',
    borderRadius: '0.5rem',
    background: 'var(--bg-page)',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  textarea: {
    padding: '0.75rem 1rem',
    fontSize: '0.9375rem',
    border: '1px solid var(--border-input)',
    borderRadius: '0.5rem',
    background: 'var(--bg-page)',
    color: 'var(--text-primary)',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease',
  },
  submitBtn: {
    marginTop: '0.5rem',
  },
};

export default Contact;
