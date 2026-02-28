# 📸 Local Images Setup Guide

## 📁 Image Folder Structure

All images are stored locally in the `public/images/` folder:

```
frontend/public/images/
├── hero/
│   ├── mustard-seeds.jpg       ← Hero section mustard seeds image
│   └── desi-ghee.jpg            ← Hero section ghee image
├── products/
│   ├── mustard-oil.jpg          ← Product card mustard oil
│   └── desi-ghee.jpg            ← Product card ghee
├── about/
│   └── traditional-cooking.jpg  ← About section image
├── benefits/
│   ├── mustard-oil-bottle.jpg   ← Benefits section oil
│   └── ghee-jar.jpg             ← Benefits section ghee
└── process/
    └── cold-press.jpg           ← Process section image
```

---

## 🎯 How to Add/Change Images

### Step 1: Prepare Your Images

**Recommended specifications:**
- **Format:** JPG or PNG
- **Hero images:** 800x800px (square)
- **Product images:** 800x800px (square)
- **Process images:** 1200x600px (landscape)
- **File size:** Keep under 500KB for fast loading

### Step 2: Replace Images

1. **Navigate to the images folder:**
   ```
   frontend/public/images/
   ```

2. **Replace the image files** with your own:
   - Keep the **same file names** OR
   - Update the file name in `src/config.js`

**Example - Replace Hero Image:**
```bash
# Option 1: Keep same name
Replace: public/images/hero/mustard-seeds.jpg
With: Your new image (same name)

# Option 2: Use different name
Add: public/images/hero/my-product.jpg
Then update config.js:
  hero: {
    mustardSeeds: "/images/hero/my-product.jpg",
  }
```

### Step 3: Verify Changes

1. **Save the files**
2. **Refresh your browser** (Ctrl+R or Cmd+R)
3. **Images update immediately!** ✅

---

## 🖼️ Image Naming Guide

### Keep Names Descriptive:
✅ Good:
- `mustard-oil-500ml.jpg`
- `ghee-golden-jar.jpg`
- `traditional-press-machine.jpg`

❌ Avoid:
- `IMG_1234.jpg`
- `photo.jpg`
- `pic1.jpg`

---

## 📝 Update Image Paths in Config

If you add **new images** or change **file names**, update `src/config.js`:

```javascript
images: {
  hero: {
    mustardSeeds: "/images/hero/your-new-image.jpg",  // ← Update path
    desiGhee: "/images/hero/another-image.jpg",
  },
  products: {
    mustardOil: "/images/products/oil-bottle.jpg",
    desiGhee: "/images/products/ghee-container.jpg",
  },
}
```

**Important:** Always start paths with `/images/...`

---

## ➕ Adding New Product Images

### Step 1: Add Image File
```
public/images/products/
└── new-product.jpg  ← Add your image here
```

### Step 2: Update Config
```javascript
// In src/config.js
images: {
  products: {
    mustardOil: "/images/products/mustard-oil.jpg",
    desiGhee: "/images/products/desi-ghee.jpg",
    newProduct: "/images/products/new-product.jpg",  // ← Add this
  }
}
```

### Step 3: Add Product Data
```javascript
products: [
  // ... existing products
  {
    id: 3,
    name: "New Product",
    subtitle: "Description",
    description: "Details...",
    benefits: ["Benefit 1", "Benefit 2"],
    sizes: ["500g", "1kg"],
  }
]
```

Then use in component:
```javascript
image: config.images.products.newProduct
```

---

## 🎨 Image Optimization Tips

### 1. Compress Images Before Upload
Use online tools:
- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Advanced options
- [ImageOptim](https://imageoptim.com/) - Mac app

### 2. Recommended Sizes:
```
Hero Images:        800x800px   (max 300KB)
Product Images:     800x800px   (max 300KB)
Process Images:     1200x600px  (max 400KB)
Benefit Icons:      400x400px   (max 200KB)
```

### 3. Use Modern Formats:
- **WebP** for better compression (if browser supports)
- **JPG** for photos
- **PNG** for logos/graphics with transparency

---

## 🔄 Quick Change Examples

### Example 1: Change WhatsApp Number + Hero Image

**Step 1:** Update contact in `config.js`
```javascript
contact: {
  phone: "9876543210",
  whatsapp: "919876543210",
}
```

**Step 2:** Replace hero image
```
Replace: public/images/hero/mustard-seeds.jpg
With: Your new image
```

**Step 3:** Save and refresh ✅

---

### Example 2: Add New Product with Image

**Step 1:** Add product image
```
public/images/products/
└── organic-honey.jpg  ← Your image
```

**Step 2:** Update `config.js`
```javascript
images: {
  products: {
    // ... existing
    honey: "/images/products/organic-honey.jpg",  // Add
  }
}

products: [
  // ... existing
  {
    id: 3,
    name: "Organic Honey",
    subtitle: "Pure Forest Honey",
    description: "...",
    benefits: ["...", "..."],
    sizes: ["250g", "500g"],
  }
]
```

**Step 3:** Image automatically shows in Products section ✅

---

## 📦 Including Images in Deployment

When you build for production:
```bash
npm run build
```

All images in `public/images/` are automatically included in the build folder!

**Deploy to:**
- Netlify → Upload `build` folder
- Vercel → Auto-deploys from GitHub
- Your server → Upload entire `build` folder

Images work everywhere! 🚀

---

## 🆘 Troubleshooting

### Images not showing?

**Check 1:** Is image in correct folder?
```
✅ public/images/hero/mustard-seeds.jpg
❌ src/images/hero/mustard-seeds.jpg  (Wrong!)
```

**Check 2:** Is path correct in config?
```javascript
✅ "/images/hero/mustard-seeds.jpg"
❌ "images/hero/mustard-seeds.jpg"  (Missing /)
❌ "/public/images/hero/..."  (Don't include public)
```

**Check 3:** Is file name exact match?
- Case sensitive! `Image.jpg` ≠ `image.jpg`
- Check spelling carefully

**Check 4:** Browser cache
- Hard refresh: `Ctrl + Shift + R` (Windows)
- Or: `Cmd + Shift + R` (Mac)

### Image looks blurry?

- Use higher resolution (minimum 800x800px for products)
- Don't stretch small images
- Use original size images

---

## 💡 Pro Tips

1. **Keep backups** of original images
2. **Use consistent naming** (e.g., product-name-size.jpg)
3. **Compress before adding** to project
4. **Test locally** before deploying
5. **Keep aspect ratios consistent** for better layout

---

## 📞 Quick Reference

| Image Type | Location | Size | Format |
|------------|----------|------|--------|
| Hero | `public/images/hero/` | 800x800 | JPG |
| Products | `public/images/products/` | 800x800 | JPG |
| About | `public/images/about/` | 1200x800 | JPG |
| Benefits | `public/images/benefits/` | 400x400 | JPG/PNG |
| Process | `public/images/process/` | 1200x600 | JPG |

---

**Need to update images?**
1. Replace files in `public/images/` folders
2. Save
3. Refresh browser
4. Done! ✅

No code changes needed unless changing file names!
