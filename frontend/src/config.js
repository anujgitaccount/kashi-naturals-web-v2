// Centralized Configuration File for Kashi Naturals Website
// Update values here and they will reflect across the entire website

const config = {
  // ==================== CONTACT INFORMATION ====================
  contact: {
    phone: "8707310827",
    phoneFormatted: "+91 87073 10827",
    phoneLink: "tel:8707310827",
    whatsapp: "918707310827", // Include country code without +
    whatsappLink: "https://wa.me/918707310827",
    email: "info@kashinaturals.com",
    emailLink: "mailto:info@kashinaturals.com",
    address: "Varanasi, Uttar Pradesh, India",
  },

  // ==================== COMPANY INFORMATION ====================
  company: {
    name: "Kashi Naturals",
    tagline: "Pure by Tradition, Healthy by Nature",
    description: "Traditional cold-pressed mustard oil and pure desi ghee from Varanasi.",
    foundedYear: "2024",
  },

  // ==================== SOCIAL MEDIA LINKS ====================
  socialMedia: {
    facebook: "https://facebook.com/kashinaturals",
    instagram: "https://instagram.com/kashinaturals",
    twitter: "https://twitter.com/kashinaturals",
  },

  // ==================== LOCAL IMAGES ====================
  // All images are stored in public/images/ folder
  // To change images: Replace files in respective folders
  images: {
    // Hero Section Images (public/images/hero/)
    hero: {
      mustardSeeds: "/images/hero/mustard-seeds.jpg",
      desiGhee: "/images/hero/desi-ghee.jpg",
    },

    // About Section Images (public/images/about/)
    about: {
      traditionalCooking: "/images/about/traditional-cooking.jpg",
    },

    // Product Images (public/images/products/)
    products: {
      mustardOil: "/images/products/mustard-oil.jpg",
      desiGhee: "/images/products/desi-ghee.jpg",
    },

    // Benefits Section Images (public/images/benefits/)
    benefits: {
      mustardOilBottle: "/images/benefits/mustard-oil-bottle.jpg",
      gheeJar: "/images/benefits/ghee-jar.jpg",
    },

    // Process Section Images (public/images/process/)
    process: {
      coldPress: "/images/process/cold-press.jpg",
    },
  },

  // ==================== PRODUCT DATA ====================
  products: [
    {
      id: 1,
      name: "Cold Pressed Mustard Oil",
      subtitle: "Traditional Kachi Ghani Method",
      description: "Our premium mustard oil is extracted using the traditional wood-pressed method, preserving all natural nutrients and the authentic pungent flavor.",
      benefits: [
        "Rich in Omega-3 fatty acids",
        "Natural antibacterial properties",
        "Boosts immunity and heart health",
        "Perfect for cooking and massage",
      ],
      sizes: ["500ml", "1 Liter", "5 Liters"],
      // Optional: Add price if needed
      // price: "₹150",
    },
    {
      id: 2,
      name: "Pure Desi Ghee",
      subtitle: "Traditional Bilona Method",
      description: "Made from pure cow milk using the traditional bilona method, our desi ghee is rich in flavor, aroma, and nutritional goodness.",
      benefits: [
        "Rich in vitamins A, D, E, K",
        "Improves digestion",
        "Boosts immunity",
        "Enhances taste and aroma of food",
      ],
      sizes: ["250g", "500g", "1 Kg", "5 Kg"],
      // Optional: Add price if needed
      // price: "₹500",
    },
  ],

  // ==================== TESTIMONIALS ====================
  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The mustard oil from Kashi Naturals is exactly like the one my grandmother used! Pure, aromatic, and healthy. I can taste the authenticity in every drop.",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Their desi ghee has transformed my cooking. The aroma is divine and you can tell it's made the traditional way. My family loves it!",
    },
    {
      id: 3,
      name: "Anita Verma",
      location: "Bangalore",
      rating: 5,
      text: "Finally found a brand that delivers pure, chemical-free products. The cold-pressed mustard oil is perfect for cooking and my hair care routine.",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      text: "Outstanding quality! The ghee tastes exactly like homemade. Kashi Naturals has earned a loyal customer. Highly recommend!",
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "I've been using their products for 6 months now. The purity and quality are consistent. Worth every rupee!",
    },
    {
      id: 6,
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Great products with excellent customer service. The traditional methods really make a difference in taste and health benefits.",
    },
  ],

  // ==================== SEO & META INFORMATION ====================
  seo: {
    title: "Kashi Naturals - Pure Cold Pressed Mustard Oil & Desi Ghee",
    description: "Traditional cold-pressed mustard oil and pure desi ghee from Varanasi. 100% pure, natural, and chemical-free products made using traditional methods.",
    keywords: "cold pressed mustard oil, desi ghee, kachi ghani, traditional oil, pure ghee, Varanasi, natural food",
  },
};

export default config;
