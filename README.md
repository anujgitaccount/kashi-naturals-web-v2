# Kashi Naturals Website - Final Version

## ✨ What's Special About This Version?

### 🎯 **LOCAL IMAGE STORAGE**
- ✅ All images stored in `public/images/` folder
- ✅ No external dependencies
- ✅ Change images anytime by replacing files
- ✅ Instant reflection of changes

### 🎯 **CENTRALIZED CONFIGURATION**
- ✅ Single config file: `src/config.js`
- ✅ Update contact, products, testimonials in one place
- ✅ Easy to maintain

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── images/              ← 📸 ALL YOUR IMAGES HERE
│       ├── hero/
│       │   ├── mustard-seeds.jpg
│       │   └── desi-ghee.jpg
│       ├── products/
│       │   ├── mustard-oil.jpg
│       │   └── desi-ghee.jpg
│       ├── about/
│       │   └── traditional-cooking.jpg
│       ├── benefits/
│       │   ├── mustard-oil-bottle.jpg
│       │   └── ghee-jar.jpg
│       └── process/
│           └── cold-press.jpg
├── src/
│   ├── config.js           ← 🎯 EDIT THIS for all changes
│   ├── CONFIG_GUIDE.md     ← 📖 Configuration help
│   ├── IMAGES_GUIDE.md     ← 📖 Images help
│   └── components/
└── package.json
```

---

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Add Your Images
1. **Navigate to** `public/images/` folders
2. **Add your images** with the names shown in README files
3. **Or use different names** and update `src/config.js`

### Step 3: Update Configuration
Edit `src/config.js` to update:
- Contact number (phone, WhatsApp)
- Email and address
- Company information
- Products and prices
- Testimonials

### Step 4: Run Website
```bash
npm start
```

Website opens at `http://localhost:3000` 🎉

---

## 📸 How to Manage Images

### Quick Image Change:

1. **Go to the folder:**
   ```
   public/images/products/
   ```

2. **Replace the file:**
   ```
   mustard-oil.jpg  ← Replace with your image (keep same name)
   ```

3. **Refresh browser** → Done! ✅

### Add New Image:

1. **Add image file:**
   ```
   public/images/products/new-product.jpg
   ```

2. **Update config.js:**
   ```javascript
   images: {
     products: {
       mustardOil: "/images/products/mustard-oil.jpg",
       desiGhee: "/images/products/desi-ghee.jpg",
       newProduct: "/images/products/new-product.jpg",  // Add this
     }
   }
   ```

3. **Save and refresh** → Image appears! ✅

---

## 🎯 Common Tasks

### Change WhatsApp Number:
Edit `src/config.js`:
```javascript
contact: {
  phone: "YOUR_NUMBER",
  whatsapp: "91YOUR_NUMBER",  // With country code, no +
}
```

### Update Product:
Edit `src/config.js`:
```javascript
products: [
  {
    name: "Your Product Name",
    description: "Your description",
    benefits: ["Benefit 1", "Benefit 2"],
    sizes: ["500ml", "1L"],
    price: "₹150",  // Optional
  }
]
```

### Replace Product Image:
```bash
# Simply replace the file
public/images/products/mustard-oil.jpg
```

---

## 📖 Detailed Guides

1. **CONFIG_GUIDE.md** - How to update configuration
2. **IMAGES_GUIDE.md** - Complete image management guide
3. **README files** in image folders - What images go where

---

## 🌐 Deployment

### Build for Production:
```bash
npm run build
```

All images in `public/images/` are automatically included!

### Deploy to:
- **Netlify:** Upload `build` folder
- **Vercel:** Connect GitHub repo
- **cPanel:** Upload `build` folder contents

---

## ✅ Features

- ✅ **Local image storage** - Full control over images
- ✅ **Instant changes** - Replace files and refresh
- ✅ **Centralized config** - One file for all settings
- ✅ **WhatsApp integration** - Direct ordering
- ✅ **Responsive design** - Works on all devices
- ✅ **SEO friendly** - Optimized for search engines
- ✅ **Easy maintenance** - Non-technical users can update

---

## 📝 Image Requirements

| Location | Size | Format |
|----------|------|--------|
| Hero | 800x800px | JPG |
| Products | 800x800px | JPG |
| About | 1200x800px | JPG |
| Benefits | 400x400px | JPG |
| Process | 1200x600px | JPG |

**Tip:** Compress images before adding (use TinyPNG.com)

---

## 🆘 Need Help?

### Read the guides:
1. `CONFIG_GUIDE.md` - Configuration help
2. `IMAGES_GUIDE.md` - Image management help
3. `README.md` (this file) - General setup

### Quick Troubleshooting:
- **Images not showing?** Check file paths in config.js
- **Changes not reflecting?** Hard refresh (Ctrl+Shift+R)
- **Build errors?** Run `npm install` again

---

## 📞 Support

- **Phone:** +91 87073 10827
- **Email:** info@kashinaturals.com
- **Location:** Varanasi, India

---

## 🛠️ Tech Stack

- React 19
- Tailwind CSS
- Local Image Storage
- Centralized Configuration
- WhatsApp Integration

---

**Perfect for small businesses who want:**
✅ Easy image management
✅ Simple content updates
✅ No external dependencies
✅ Full control over assets

**Built with ❤️ for Kashi Naturals**
