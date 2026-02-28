import React from 'react';
import { ShoppingBag } from 'lucide-react';
import config from '../config';

const Products = () => {
  // Get products from config with image URLs
  const products = config.products.map(product => ({
    ...product,
    image: product.id === 1 ? config.images.products.mustardOil : config.images.products.desiGhee
  }));

  const openWhatsApp = (productName) => {
    const message = encodeURIComponent(`Hi! I'm interested in ordering ${productName} from ${config.company.name}. Please share more details.`);
    window.open(`${config.contact.whatsappLink}?text=${message}`, '_blank');
  };

  return (
    <section id="products" style={styles.products}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="heading-1" style={styles.sectionTitle}>Our Premium Products</h2>
          <p className="body-large" style={styles.subtitle}>
            Pure, Natural, and Traditionally Made
          </p>
        </div>

        <div style={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className="product-card" style={styles.productCard}>
              <div style={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
              </div>

              <div style={styles.productContent}>
                <div style={styles.productHeader}>
                  <h3 className="heading-2" style={styles.productName}>{product.name}</h3>
                  <p style={styles.productSubtitle}>{product.subtitle}</p>
                </div>

                <p style={styles.productDescription}>{product.description}</p>

                <div style={styles.benefitsSection}>
                  <h4 style={styles.benefitsTitle}>Key Benefits:</h4>
                  <ul style={styles.benefitsList}>
                    {product.benefits.map((benefit, index) => (
                      <li key={index} style={styles.benefitItem}>
                        <span style={{color: 'var(--natural-green)', marginRight: '0.5rem', fontWeight: 'bold'}}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={styles.sizesSection}>
                  <h4 style={styles.sizesTitle}>Available Sizes:</h4>
                  <div style={styles.sizeChips}>
                    {product.sizes.map((size, index) => (
                      <span key={index} style={styles.sizeChip}>{size}</span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(product.name)}
                  className="btn-primary"
                  style={styles.orderButton}
                >
                  <ShoppingBag size={18} />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  products: {
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
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  productCard: {
    background: 'var(--bg-card)',
    borderRadius: '1rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    height: '280px',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  productContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  productHeader: {
    marginBottom: '0.5rem',
  },
  productName: {
    marginBottom: '0.25rem',
  },
  productSubtitle: {
    fontSize: '0.875rem',
    color: 'var(--earth-brown)',
    fontStyle: 'italic',
  },
  productDescription: {
    fontSize: '0.9375rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  benefitsSection: {
    marginTop: '0.5rem',
  },
  benefitsTitle: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  benefitItem: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.375rem',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'start',
  },
  sizesSection: {
    marginTop: '0.5rem',
  },
  sizesTitle: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
  },
  sizeChips: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  sizeChip: {
    background: 'var(--warm-cream)',
    padding: '0.375rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
    border: '1px solid var(--border-light)',
  },
  orderButton: {
    marginTop: '1rem',
    width: '100%',
  },
};

export default Products;
