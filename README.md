# 📸 AURA Studios — Premium Photography & Cinema Portfolio

A modern, high-end, fully responsive static photography portfolio website built with **React**, **Vite**, **HTML5**, and **CSS3** (without Tailwind CSS).

---

## 🚀 Getting Started in VS Code

### 1. Open in VS Code
Open VS Code, select **File > Open Folder...**, and choose this folder:
```text
premium-photography-portfolio
```

### 2. Install Dependencies
Open the integrated terminal in VS Code (`Ctrl + ~` or **Terminal > New Terminal**) and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:3000
```

### 4. Build for Production
To generate a static build ready for hosting (Netlify, Vercel, GitHub Pages, etc.):
```bash
npm run build
```
The output will be placed in the `dist/` directory.

---

## 🛠️ Customizing Your Content

All information is organized in clean JavaScript configuration files inside `src/data/`:

| File | What to Customize |
| :--- | :--- |
| **`src/data/siteConfig.js`** | Studio name, photographer name, WhatsApp number, phone, email, address, social media links, hero video/image slides, and bio. |
| **`src/data/portfolioData.js`** | All 9 portfolio categories, project galleries, photo URLs, aspect ratios, and sample starting package rates. |
| **`src/data/servicesData.js`** | 10 specialized photography and film services, descriptions, and deliverables. |
| **`src/data/pricingData.js`** | Tiered packages in Indian Rupees (₹) for weddings, pre-weddings, portraits, and post-production. |
| **`src/data/testimonialsData.js`** | Client reviews, locations, and ratings. |

---

## 💬 WhatsApp Integration

All WhatsApp enquiry buttons automatically format messages and open WhatsApp using:
- **`src/utils/whatsapp.js`**

Simply update `siteConfig.studio.whatsappNumber` in `src/data/siteConfig.js` with your phone number (international format digits only, e.g. `919876543210`).
