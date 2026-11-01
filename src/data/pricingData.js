/**
 * Centralized Pricing & Packages Data
 * =========================================================================
 * Demonstration values in Indian Rupees (₹).
 * Clear disclaimers that final quotations vary by destination, duration,
 * team scale, and deliverables. Easily customizable by the photographer.
 * =========================================================================
 */

export const pricingTabs = [
  { id: "wedding", label: "Wedding Collections" },
  { id: "pre-wedding", label: "Pre-Wedding & Cinema" },
  { id: "portraits", label: "Portraits & Maternity" },
  { id: "editing", label: "Post-Production" }
];

export const pricingPackages = [
  // Wedding Collections
  {
    id: "pkg-wed-1",
    tab: "wedding",
    name: "Basic Collection",
    price: "₹25,000",
    serviceName: "Wedding Photography",
    duration: "Single Day / Up to 8 Hours Coverage",
    badge: "Most Popular for Intimate Ceremonies",
    isFeatured: false,
    features: [
      "1 Traditional Photographer + 1 Traditional Videographer ",
      "Full Video coverage of wedding rituals",
      "20 Sheets Premium Glossy/Matte Photobook",
      "100+ High-Resolution Master Edited Photos",
      "Comprehensive ritual and family portrait coverage",
      "Data will be uploaded to a secure HardDrive for download (HardDrive not included)",
      "Delivery within 3–4 weeks",
      "Travel within base city included"
    ]
  },
  {
    id: "pkg-wed-2",
    tab: "wedding",
    name: "Signature Collection",
    price: "₹60,000",
    serviceName: "Wedding Photography & Cinema",
    duration: "Single Day / Up to 8 Hours Coverage",
    badge: "Studio Signature Choice",
    isFeatured: true,
    features: [
      "1 Traditional Photographer + 1 Candid Photographer + 1 Traditional Videographer + 1 Cinematographer",
      "3–5 Minute 4K Cinematic Wedding Teaser",
      "Full Traditional Ceremony Multi-Cam Video Edit",
      "1 Handcrafted 30-Page Archival Photobook"
    ]
  },

  // Pre-Wedding & Cinema
  {
    id: "pkg-pw-1",
    tab: "pre-wedding",
    name: "Golden Hour Session",
    tagline: "Relaxed couple portraits at a scenic natural location",
    price: "₹25,000",
    serviceName: "Pre-Wedding Photography",
    duration: "4 Hours / Sunrise or Sunset",
    badge: "Half Day",
    isFeatured: false,
    features: [
      "1 Lead Candid Photographer",
      "2 Outfit looks / changes",
      "40 Master Color Graded Digital Photos",
      "Web-ready high-resolution download link"
    ]
  },
  {
    id: "pkg-pw-2",
    tab: "pre-wedding",
    name: "Cinematic Pre-Wedding Film",
    tagline: "Full day of movie-like photography & film",
    price: "₹45,000",
    serviceName: "Pre-Wedding Cinema & Stills",
    duration: "Full Day (Sunrise to Night Lights)",
    badge: "Bestseller",
    isFeatured: true,
    features: [
      "1 Lead Candid Photographer + 1 Dedicated Cinematographer",
      "2 Scenic Locations / 4 Outfit Changes",
      "80 Master Retouched Photos",
      "2–3 Minute 4K Narrative Couple Film"
    ]
  },

  // Portraits & Maternity
  {
    id: "pkg-port-1",
    tab: "portraits",
    name: "Editorial Solo / Maternity",
    tagline: "Fine-art lighting for expectant mothers & individuals",
    price: "₹10,000",
    serviceName: "Maternity / Portrait Session",
    duration: "2 Hours in Studio or Golden Hour",
    badge: "Studio Classic",
    isFeatured: false,
    features: [
      "2 Outfit styling variations",
      "20 Magazine-grade retouched photos",
      "Partner / spouse included",
      "High-res print release included"
    ]
  },
  {
    id: "pkg-port-2",
    tab: "portraits",
    name: "Generations Family Session",
    tagline: "Celebrating parents, children, and legacy",
    price: "₹20,000",
    serviceName: "Family Heirloom Photography",
    duration: "6 Hours at Home or Garden Location",
    badge: "Family Legacy",
    isFeatured: true,
    features: [
      "Coverage for up to 10 family members",
      "50 Hand-curated color graded images",
      "Large group groupings and candid interactions",
    ]
  },

  // Post-Production
  {
    id: "pkg-edit-1",
    tab: "editing",
    name: "Pro Skin & Color Suite",
    tagline: "High-end frequency separation and film color grading",
    price: "₹5,000",
    serviceName: "Photo Retouching",
    duration: "Batch of 25 Images",
    badge: "Commercial Grade",
    isFeatured: false,
    features: [
      "Texture preservation frequency separation",
      "Color harmony & cinematic grade",
      "Background object removal and cleanup",
      "Color-calibrated TIFF & JPEG files",
      "2 Revision rounds included"
    ]
  },
  {
    id: "pkg-edit-2",
    tab: "editing",
    name: "Custom Bespoke Production",
    tagline: "Large wedding batches, album design or editorial series",
    price: "Request a Quote",
    serviceName: "Custom Post-Production & Album",
    duration: "Custom Scale",
    badge: "Bespoke Scale",
    isFeatured: false,
    features: [
      "Full event cull and exposure match",
      "Proprietary film look customization",
      "Custom Italian album layout design",
      "Print proofing and color matching",
      "Direct consultation with lead retoucher"
    ]
  }
];
