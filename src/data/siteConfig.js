/**
 * Centralized Studio Configuration
 * =========================================================================
 * Modify this single file to update all studio branding, contact details,
 * WhatsApp number, social handles, hero slides, and studio biography.
 *
 * 📸 USING YOUR OWN LOCAL IMAGES:
 * Put your images in `public/images/` and reference them as `/images/...`
 * (e.g., fallbackImage: "/images/hero/hero-1.jpg")
 * =========================================================================
 */

export const siteConfig = {
  // Studio & Photographer Identity
  studio: {
    name: "STORIES BY SAI ADABALA",
    tagline: "Fine Art Wedding Photography & Cinematic Films",
    photographerName: "SAI ADABALA", // Customize with your real name
    title: "Lead Photographer & Visual Storyteller",
    location: "HYDERABAD, INDIA",
    shortBio: "Crafting timeless, emotive visual heirlooms for discerning couples, brands, and families across the globe.",
    
    // Direct Contact Details (Edit these with your actual contact information)
    email: "storiesbysaiadabala@gmail.com", // [REPLACE WITH YOUR EMAIL]
    phone: "+91 9381255395",          // [REPLACE WITH YOUR PHONE NUMBER]
    whatsappNumber: "919381255395",    // [REPLACE WITH YOUR WHATSAPP NUMBER]
    
    // Operating Hours & Booking
    availability: "Available for destination weddings across India & worldwide...",
    studioHours: "Mon – Sat: 10:00 AM – 7:30 PM (By Appointment Only)",
    address: "#2nd Floor, Divya Diamonds building, Kavuri Hills, Madhapur, Hyderabad, Telangana, India",
  },

  // Social Media Channels
  social: {
    instagram: "https://www.instagram.com/storiesby_saiadabala",
    whatsapp: "https://wa.me/919381255395",
  },

  // Stats Counters
  stats: [
    { label: "Years of Experience", value: "8+", detail: "In luxury weddings & editorial portraiture" },
    { label: "Weddings & Events Captured", value: "99+", detail: "Across Andhra Pradesh & Telangana and destinations" },
    { label: "Heirloom Photos Delivered", value: "250K+", detail: "Masterfully hand-edited & color graded" },
    { label: "Happy Couples & Clients", value: "99%", detail: "Five-star client satisfaction rate" },
  ],

  // Skills & Creative Proficiencies
  skills: [
    { name: "Wedding Photography", level: 98, description: "Candid moments, grand rituals & timeless portraits" },
    { name: "Candid & Documentary", level: 95, description: "Unobtrusive capture of raw, authentic emotions" },
    { name: "Cinematic Videography", level: 92, description: "4K anamorphic camera movement & cinematic sound design" },
    { name: "Editorial & Portraiture", level: 94, description: "Bespoke lighting, fashion-forward composition" },
    { name: "Color Grading & Fine Art", level: 96, description: "Custom vintage & cinematic film looks" },
    { name: "High-End Retouching", level: 93, description: "Natural skin texture, frequency separation & cleanup" },
    { name: "Handcrafted Album Design", level: 90, description: "Italian leather & archival linen heirloom albums" },
  ],

  // Full-Screen Hero Slider (4+ Cinematic Slides)
  // Uses high-quality cinematic video clips with dependable fallback photography
  heroSlides: [
    {
      id: "portraits",
      tag: "Bride & Groom Portraits",
      title: "Elegance Captured in Every Glance",
      subtitle: "Editorial bridal portraiture crafted with dramatic natural light, intimate framing, and refined European sensibility.",
      primaryCta: "View Bridal Portraits",
      categoryTarget: "bride-groom-portraits",
      // videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-bride-posing-in-her-wedding-dress-41372-large.mp4",
      fallbackImage: "images/hero/hero_1.jpeg",
      accent: "#D4AF37",
    },
    {
      id: "wedding",
      tag: "Luxury Weddings",
      title: "Timeless Celebrations, Eternal Love",
      subtitle: "Every wedding is an unrepeatable epic. We preserve the laughter, the sacred rituals, and the quiet glances in cinematic poetry.",
      primaryCta: "Explore Wedding Stories",
      categoryTarget: "wedding-photography",
      // High-quality cinematic wedding video & fallback image
      // videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-forest-42898-large.mp4",
      fallbackImage: "images/hero/hero_2.jpeg",
      accent: "#C5A880",
    },
    {
      id: "pre-wedding",
      tag: "Pre-Wedding Cinema",
      title: "Cinematic Romances Under Golden Horizons",
      subtitle: "From palace courtyards to rugged coastlines, your love story filmed like a feature film.",
      primaryCta: "Discover Pre-Wedding Film",
      categoryTarget: "pre-wedding-photography",
      // videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-the-beach-at-sunset-42897-large.mp4",
      fallbackImage: "images/hero/hero_3.jpeg",
      accent: "#E5C392",
    },
    {
      id: "fashion-lifestyle",
      tag: "Fashion & Lifestyle",
      title: "Artistic Vision & Bold Perspective",
      subtitle: "High-fashion editorials, modern couple styling, and bespoke magazine-grade portraits that elevate personality into art.",
      primaryCta: "Explore Editorial Works",
      categoryTarget: "portrait-lifestyle",
      // videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-holding-a-bouquet-of-flowers-42899-large.mp4",
      fallbackImage: "images/hero/hero_4.jpeg",
      accent: "#D8B48D",
    },
  ],

  // Studio Philosophy & Story
  aboutStory: {
    heading: "Behind the Lens",
    quote: "“Photography is not about mere recording; it is an emotional preservation of light, feeling, and soul that outlives time.”",
    paragraphs: [
      "Founded with an obsessive dedication to visual storytelling, STORIES BY SAI ADABALA brings together cinematic scale and intimate documentary sensitivity. Over the past 8+ years, we have had the privilege of capturing extraordinary weddings, heritage celebrations, and bespoke portraits across India and international destinations.",
      "Our style balances classic European editorial aesthetics with the vibrant, emotional energy of cultural celebrations. We believe the most powerful images happen when people are completely immersed in their moments — unposed, genuine, and luminous.",
      "From state-of-the-art Sony FX & Alpha cinema rigs to custom hand-crafted color palettes, every single frame is treated with meticulous artistry, ensuring your heirlooms look as breathtaking fifty years from now as they do today."
    ],
    signatureName: "SAI ADABALA",
    signatureTitle: "Founder & Creative Director",
    featuredImage: "images/portfolio/self/sai_1.jpeg",
    studioDetailImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80"
    ]
  },

  // Why Choose Us Points
  whyChooseUs: [
    {
      title: "Personalized Photography Experience",
      description: "We take on a limited number of commissions each year to ensure every couple and project receives our undivided attention and creative vision.",
      icon: "Sparkles"
    },
    {
      title: "Cinematic & Emotional Storytelling",
      description: "Balancing unobtrusive photojournalism with magazine-worthy editorial portraits for an authentic, breathtaking record of your day.",
      icon: "Film"
    },
    {
      title: "Masterful Color Grading & Retouching",
      description: "Proprietary film emulation profiles and organic skin-tone processing that feel warm, timeless, and free from passing filters.",
      icon: "Palette"
    },
    {
      title: "Obsessive Attention to Detail",
      description: "From morning heirloom jewelry and fleeting family glances to night revelry, no nuance escapes our calibrated lenses.",
      icon: "Eye"
    },
    {
      title: "Archival Heirloom Deliverables",
      description: "Full-resolution master galleries, handcrafted Italian leather albums, and 4K master video cuts delivered on custom wooden drives.",
      icon: "Award"
    },
    {
      title: "Seamless & Transparent Communication",
      description: "Clear timelines, pre-event moodboarding, prompt WhatsApp coordination, and zero hidden costs from initial inquiry to final delivery.",
      icon: "MessageSquare"
    }
  ],

  // Instagram / Social Showcase Grid
  instagramFeed: [
    {
      id: "ig-1",
      image: "images/uploads/u1.jpeg",
      caption: "Golden hour promises and cinematic vows 🌅",
      likes: "1.4k",
      comments: "84"
    },
    {
      id: "ig-2",
      image: "images/uploads/u2.jpeg",
      caption: "Bridal majesty in handcrafted zardozi 👑",
      likes: "2.1k",
      comments: "142"
    },
    {
      id: "ig-3",
      image: "images/uploads/u3.jpeg",
      caption: "Candid laughter during the Haldi rituals 💛",
      likes: "1.8k",
      comments: "96"
    },
    {
      id: "ig-4",
      image: "images/uploads/u5.jpeg",
      caption: "Editorial portraiture for Vogue Runway preview",
      likes: "940",
      comments: "51"
    },
    {
      id: "ig-5",
      image: "images/uploads/u6.jpeg",
      caption: "Sunset silhouetted under Tuscan arches 🍷",
      likes: "2.8k",
      comments: "188"
    },
    {
      id: "ig-6",
      image: "images/uploads/u4.jpeg",
      caption: "Fine-art black & white bridal preparations 🖤",
      likes: "1.2k",
      comments: "63"
    }
  ]
};
