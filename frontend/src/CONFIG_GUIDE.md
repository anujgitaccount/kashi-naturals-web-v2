# 🎯 Quick Configuration Guide

## 📝 How to Update Your Website in One Place

All your website content, images, and contact details are centralized in **`src/config.js`**

### 🔧 What You Can Change:

#### 1️⃣ **Contact Information** (Most Common)
```javascript
contact: {
  phone: "8707310827",              // ← Change your phone number
  phoneFormatted: "+91 87073 10827", // ← Change formatted phone
  whatsapp: "918707310827",         // ← Change WhatsApp (with country code)
  email: "info@kashinaturals.com",  // ← Change email
  address: "Varanasi, Uttar Pradesh, India", // ← Change address
}
```

#### 2️⃣ **Company Information**
```javascript
company: {
  name: "Kashi Naturals",           // ← Change company name
  tagline: "Pure by Tradition...",   // ← Change tagline
  description: "Traditional cold...", // ← Change description
}
```

#### 3️⃣ **Social Media Links**
```javascript
socialMedia: {
  facebook: "https://facebook.com/kashinaturals",   // ← Your Facebook
  instagram: "https://instagram.com/kashinaturals",  // ← Your Instagram
  twitter: "https://twitter.com/kashinaturals",      // ← Your Twitter
}
```

#### 4️⃣ **All Images**
```javascript
images: {
  hero: {
    mustardSeeds: "https://...",     // ← Hero section images
    desiGhee: "https://...",
  },
  products: {
    mustardOil: "https://...",       // ← Product images
    desiGhee: "https://...",
  },
  // ... and more
}
```

#### 5️⃣ **Products**
```javascript
products: [
  {
    name: "Cold Pressed Mustard Oil",  // ← Product name
    subtitle: "Traditional Kachi...",   // ← Product subtitle
    description: "Our premium...",      // ← Product description
    benefits: [...],                    // ← Product benefits
    sizes: ["500ml", "1 Liter", ...],  // ← Available sizes
  },
  // Add more products here
]
```

#### 6️⃣ **Testimonials**
```javascript
testimonials: [
  {
    name: "Priya Sharma",        // ← Customer name
    location: "Delhi",           // ← Location
    rating: 5,                   // ← Rating (1-5)
    text: "The mustard oil...",  // ← Review text
  },
  // Add more testimonials here
]
```

---

## 🚀 How to Make Changes:

### Step 1: Open the config file
```bash
# In VS Code
Open: src/config.js
```

### Step 2: Edit the values
- Change phone number? Update `contact.phone`
- Change email? Update `contact.email`
- Change images? Update image URLs in `images` section
- Add new product? Add to `products` array

### Step 3: Save the file
```bash
Press: Ctrl + S (Windows) or Cmd + S (Mac)
```

### Step 4: See changes instantly
Your website will auto-reload with new changes!

---

## ✅ Example: Change Contact Number

**Before:**
```javascript
contact: {
  phone: "8707310827",
  phoneFormatted: "+91 87073 10827",
  whatsapp: "918707310827",
}
```

**After:**
```javascript
contact: {
  phone: "9876543210",              // ← New number
  phoneFormatted: "+91 98765 43210", // ← New formatted
  whatsapp: "919876543210",          // ← New WhatsApp
}
```

**Result:** Phone number updates in:
- ✅ Header button
- ✅ Contact page (all places)
- ✅ Footer
- ✅ WhatsApp links

---

## 📸 Example: Change Product Images

**Before:**
```javascript
images: {
  products: {
    mustardOil: "https://images.unsplash.com/photo-xyz",
    desiGhee: "https://images.unsplash.com/photo-abc",
  }
}
```

**After:**
```javascript
images: {
  products: {
    mustardOil: "https://your-domain.com/images/oil.jpg",    // ← Your image
    desiGhee: "https://your-domain.com/images/ghee.jpg",     // ← Your image
  }
}
```

**Result:** Product images update on:
- ✅ Products page
- ✅ Hero section
- ✅ All product displays

---

## 🎨 Example: Add New Product

```javascript
products: [
  // Existing products...
  {
    id: 3,                                    // ← Unique ID
    name: "Organic Honey",                    // ← Product name
    subtitle: "Pure Forest Honey",            // ← Subtitle
    description: "Natural honey collected...", // ← Description
    benefits: [
      "Rich in antioxidants",
      "Natural energy booster",
      "Supports immunity",
    ],
    sizes: ["250g", "500g", "1 Kg"],
  }
]
```

Then add the image:
```javascript
images: {
  products: {
    mustardOil: "...",
    desiGhee: "...",
    honey: "https://your-image-url.jpg",  // ← Add new image
  }
}
```

---

## 💡 Pro Tips:

1. **Always keep backup** before making changes
2. **Test locally first** before deploying
3. **Use high-quality images** (recommended: 800x800px minimum)
4. **Keep phone numbers consistent** across all fields
5. **Update WhatsApp number** with country code (no +)

---

## 🆘 Common Issues:

**Q: I changed the config but don't see updates?**
- A: Make sure you saved the file (Ctrl+S)
- Try refreshing browser (Ctrl+R)
- Check browser console for errors (F12)

**Q: WhatsApp button not working?**
- A: Check `whatsapp` field has country code (918707310827)
- No spaces or special characters
- Don't include the + symbol

**Q: Images not showing?**
- A: Check image URL is accessible
- Test URL in browser first
- Use HTTPS URLs, not HTTP

---

## 📞 Need Help?

All website data is now centralized in **one file**:
```
src/config.js
```

Change once → Updates everywhere! 🎉
