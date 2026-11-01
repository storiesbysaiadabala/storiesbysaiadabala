# AURA Studios — Premium Photography & Cinema Portfolio

A complete, modern, fully responsive static photography portfolio website built with **React.js**, **Vite**, **HTML5**, **CSS3**, and **Lucide React**.

---

## 📸 Website Highlights & Features

- **Full-Screen Cinematic Hero Slider (~100vh):** Crossfading 4K video clips & high-res fallback photography with dark vignette overlay, slide counter (`01 / 04`), pagination progress bars, and manual/auto transitions.
- **Top Navigation Bar:** Transparent over the hero, transitioning into a frosted-glass background (`backdrop-filter: blur(16px)`) with active scroll spy, mobile drawer navigation, and WhatsApp booking action.
- **Curated Category Portfolio & Filters:** Interactive filter pills covering all 9 photography categories:
  1. *Wedding Photography*
  2. *Bride & Groom Portraits*
  3. *Pre-Wedding Photography*
  4. *Engagement Photography*
  5. *Maternity Photography*
  6. *Baby & Family Photography*
  7. *Portrait & Lifestyle Photography*
  8. *Event Photography*
  9. *Photo Editing & Retouching*
- **Category Details & Previous Work Modal:** Interactive showcase displaying sample pricing structures (in ₹), inclusions, and project galleries.
- **Fullscreen Lightbox:** Keyboard accessible (`Esc`, `ArrowLeft`, `ArrowRight`), aspect-ratio adaptive masonry, and body scroll lock.
- **10 Bespoke Services:** Comprehensive service cards featuring representative photography, deliverables checklists, "View Portfolio", and "Get a Quote" WhatsApp actions.
- **Behind the Lens (About & Skills):** Lead artist biography, philosophy, 4 milestone statistics, and 7 discipline mastery visual cards.
- **Transparent Pricing Collections:** Tiered packages for weddings, pre-weddings, portraits, and retouching with clear demonstration disclaimers.
- **Why Choose Us & Testimonials:** 6 core studio pillars and an editorial client story slider.
- **Instagram Feed Showcase:** 6-frame grid with hover interaction (likes, comments, links).
- **Two-Column Contact Section:** Styled after luxury editorial studio standards, featuring studio address, direct contact info, operating hours, and a full contact form that formats enquiries and launches WhatsApp directly.
- **Floating WhatsApp Quick Action:** Floating button with pulsing radar ring and smooth Back-to-Top button.

---

## 🚀 How to Run Locally

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser and visit: `http://localhost:3000`

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory, ready to deploy to Netlify, Vercel, GitHub Pages, or any static hosting.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Content

All personal details, contact info, photographs, videos, and packages are centralized in clean, modular files.

### 1. Studio Name, Phone, WhatsApp & Social Links
Open `src/data/siteConfig.js`:
```javascript
export const siteConfig = {
  studio: {
    name: "AURA STUDIOS",                // Your studio brand name
    photographerName: "Aarav Sharma",    // Your name
    email: "contact@aurastudios.com",    // Your email
    phone: "+91 98765 43210",             // Display phone number
    whatsappNumber: "919876543210",       // International digits only (no + or spaces)
    location: "Mumbai & Goa, India",
    address: "Studio 402, High Street Heritage, Mumbai",
    availability: "Booking 2026–2027 calendar."
  },
  social: {
    instagram: "https://instagram.com/your_handle",
    twitter: "https://twitter.com/your_handle",
    // ...
  }
}
```

### 2. Uploading & Using Your Own Images
A dedicated folder is set up at `public/images/` for your photography files:
- `public/images/uploads/` — Quick drop-in folder for any photos
- `public/images/portfolio/` — Category and project showcase photos (e.g. `weddings/`, `portraits/`)
- `public/images/hero/` — Fullscreen hero background images & videos
- `public/images/about/` — Profile photo & studio shots

**How to reference them in the code:**
Any image placed in `public/images/` is immediately available at `/images/...`:
```javascript
// Example in src/data/portfolioData.js or siteConfig.js:
coverImage: "/images/portfolio/weddings/my-photo.jpg"
// or from uploads:
url: "/images/uploads/my-photo.jpg"
```

### 3. Hero Background Videos and Fallback Photos
In `src/data/siteConfig.js`, inspect the `heroSlides` array. You can replace `videoUrl` and `fallbackImage` with your own hosted MP4 videos or local photos in `/images/hero/`.

### 4. Portfolio Categories & Projects
Open `src/data/portfolioData.js`:
- Each category has its `title`, `coverImage`, `startingPrice`, `samplePackages`, and `projects`.
- Add your own photographs under `images: [{ id, url, caption, alt, aspect: 'tall' | 'wide' | 'square' }]`. Use local paths like `url: "/images/uploads/photo1.jpg"` or external image links.

### 5. Pricing Tiers
Open `src/data/pricingData.js`:
- Modify the packages, starting prices in Indian Rupees (`₹`), duration, and deliverables.

### 6. Services
Open `src/data/servicesData.js`:
- Customize the descriptions, icons, and deliverables for each of the 10 services.

---

## 💬 WhatsApp Integration Details

All WhatsApp buttons utilize the centralized helper in `src/utils/whatsapp.js`.
- It encodes message text safely for URLs.
- It normalizes international telephone numbers into digit-only format.
- Works across both mobile WhatsApp and WhatsApp Web.
- The contact form generates a detailed breakdown including the client's name, selected photography category, preferred date, venue location, budget range, and custom message notes.
