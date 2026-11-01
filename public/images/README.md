# 📸 Images Folder Guide

This folder (`public/images/`) is where you can store all your custom photographs, videos, and graphics for your website.

---

## 📁 Suggested Organization

You can place your photos directly here or into any of these categorized subfolders:

- `public/images/uploads/` — Quick drop-in folder for any new photos
- `public/images/hero/` — Hero slider background images or videos
- `public/images/portfolio/` — Category & project showcase images
  - `weddings/`
  - `portraits/`
- `public/images/about/` — Photographer profile photo and studio pictures

*(Note: You can also create any new subfolder you want!)*

---

## 🚀 How to Use Your Images in the Code

Because this folder is inside `public/`, Vite automatically serves any file placed here from the root path (`/images/...`).

### Example 1: Use in Hero Slider (`src/data/siteConfig.js`)
If you save an image at:
`public/images/hero/my-hero-slide.jpg`

In `src/data/siteConfig.js`, set:
```javascript
fallbackImage: "/images/hero/my-hero-slide.jpg"
```

---

### Example 2: Use in Portfolio Galleries (`src/data/portfolioData.js`)
If you save an image at:
`public/images/portfolio/weddings/royal-wedding-01.jpg`

In `src/data/portfolioData.js`, set:
```javascript
coverImage: "/images/portfolio/weddings/royal-wedding-01.jpg"
```
Or in project image lists:
```javascript
{
  id: "img-1",
  url: "/images/portfolio/weddings/royal-wedding-01.jpg",
  caption: "Grand Mandap Entry",
  alt: "Royal wedding ceremony",
  aspect: "wide"
}
```

---

### Example 3: Quick Drop (`public/images/uploads/`)
If you just drop `my-photo.jpg` into `public/images/uploads/my-photo.jpg`:
Simply reference it anywhere as:
```javascript
"/images/uploads/my-photo.jpg"
```

---

## 💡 Quick Tips:
1. **Supported Formats:** JPG, JPEG, PNG, WEBP, SVG, MP4 (for hero video).
2. **File Naming:** Use simple names without spaces (e.g. `wedding-ceremony-1.jpg` rather than `wedding ceremony 1 (copy).jpg`).
3. **Instant Preview:** When you run `npm run dev`, your changes will appear instantly in your browser at `http://localhost:3000`.
