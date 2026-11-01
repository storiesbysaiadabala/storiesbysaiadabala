/**
 * Comprehensive Portfolio Data & Categories
 * =========================================================================
 * Contains all 9 photography categories, curated project galleries,
 * sample deliverables, and demonstration starting package values.
 *
 * 📸 USING YOUR OWN LOCAL IMAGES:
 * 1. Place your photos into the `public/images/` folder (or `public/images/uploads/`).
 * 2. Reference them by starting with `/images/...`.
 *    Example: coverImage: "/images/uploads/my-wedding.jpg"
 *    Or keep external URLs like "https://images.unsplash.com/..."
 * =========================================================================
 */

export const portfolioCategories = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    slug: "wedding-photography",
    coverImage: "images/portfolio/weddings/wedding_cover.jpeg",
    tagline: "Sacred vows, unfiltered tears, and timeless cultural grandeur.",
    shortDesc: "Complete documentary and fine-art coverage of pre-wedding ceremonies, wedding rituals, and reception celebrations.",
    photoCount: 42,
    startingPrice: "₹25,000",
    samplePackages: [
      {
        name: "Basic Wedding Package",
        price: "₹25,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Traditional Videographer, 100+ edited photos, 20 Sheets Premium Glossy/Matte Photobook,Full Video coverage of wedding rituals."
      },
      {
        name: "Signature Wedding Package",
        price: "₹60,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Candid Photographer + 1 Traditional Videographer + 1 Cinematographer, 3-5 min cinematic 4K Wedding teaser, 1 Handcrafted 30-Page Archival Photobook."
      }
    ],
    projects: [
      {
        id: "proj-wed-1",
        location: "Hyderabad, India",
        date: "November 2022",
        summary: "A breathtaking lakeside royal celebration blending traditional rituals with modern understated elegance.",
        // cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-w1-1",
            url: "images/portfolio/weddings/wedding_2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-2",
            url: "images/portfolio/weddings/wedding_1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-3",
            url: "images/portfolio/weddings/wedding_3.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-4",
            url: "images/portfolio/weddings/wedding_4.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-5",
            url: "images/portfolio/weddings/wedding_5.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-6",
            url: "images/portfolio/weddings/wedding_6.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-7",
            url: "images/portfolio/weddings/wedding_7.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-8",
            url: "images/portfolio/weddings/wedding_8.jpeg",
            aspect: "tall"
          },
          {
            id: "img-w1-9",
            url: "images/portfolio/weddings/wedding_9.jpeg", 
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "bride-groom-portraits",
    title: "Bride & Groom Portraits",
    slug: "bride-groom-portraits",
    coverImage: "images/portfolio/bride_groom/bride_cover.jpeg",
    tagline: "Regal silhouettes, intimate glances, and couture details.",
    shortDesc: "Dedicated bridal and groom solo sessions plus intimate couple portraiture focusing on bespoke lighting, posture, and couture.",
    photoCount: 36,
    startingPrice: "₹25,000",
    samplePackages: [
      {
        name: "Basic Bride / Groom Package",
        price: "₹25,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Traditional Videographer, 100+ edited photos, 20 Sheets Premium Glossy/Matte Photobook,Full Video coverage of bride / groom ceremonies."
      },
      {
        name: "Signature Bride / Groom Package",
        price: "₹60,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Candid Photographer + 1 Traditional Videographer + 1 Cinematographer, 3-5 min cinematic 4K Wedding teaser, 1 Handcrafted 30-Page Archival Photobook."
      }
    ],
    projects: [
      {
        id: "proj-bg-1",
        title: "The Regal Bride: Heritage & Poise",
        location: "Hyderabad, India",
        date: "January 2026",
        summary: "A study in royal bridal grace, capturing intricate polki stones, handwoven silk textures, and quiet pre-wedding contemplation.",
        cover: "images/portfolio/bride_groom/bride_4.jpeg",
        images: [
          {
            id: "img-bg1-1",
            url: "images/portfolio/bride_groom/bride_1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-bg1-2",
            url: "images/portfolio/bride_groom/bride_2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-bg1-4",
            url: "images/portfolio/bride_groom/bride_4.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "pre-wedding-photography",
    title: "Pre-Wedding Photography",
    slug: "pre-wedding-photography",
    coverImage: "images/portfolio/prewedding/pre_cover.jpeg",
    tagline: "Narrative romance filmed like an unforgettable motion picture.",
    shortDesc: "Cinematic destination shoots capturing your unique story, playful chemistry, and shared passions before your big day.",
    startingPrice: "₹30,000",
    samplePackages: [
      {
        name: "Basic Pre-Wedding Session",
        price: "₹25,000",
        duration: "Half Day (4 Hours)",
        deliverables: "1 Lead Candid Photographer,2 Outfit looks / changes,40 Master Color Graded Digital Photos,Web-ready high-resolution download link"
      },
      {
        name: "Cinematic Romance Session",
        price: "₹45,000",
        duration: "Full Day (Sunrise to Sunset)",
        deliverables:"1 Lead Candid Photographer + 1 Dedicated Cinematographer,2 Scenic Locations / 4 Outfit Changes,80 Master Retouched Photos2–3 Minute 4K Narrative Couple Film"
      }
    ],
    projects: [
      {
        id: "proj-pw-1",
        title: "Echoes of Ladakh: Tenzin & Meera",
        location: "Pangong & Nubra Valley, Ladakh",
        date: "October 2025",
        summary: "Dramatic mountain vistas, azure lake reflections, and stargazing portraits in the high Himalayas.",
        // cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-pw1-1",
            url: "images/portfolio/prewedding/pre_1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-pw1-2",
            url: "images/portfolio/prewedding/pre_2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-pw1-3",
            url: "images/portfolio/prewedding/pre_3.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "engagement-photography",
    title: "Engagement & Reception Photography",
    slug: "engagement-photography",
    coverImage: "images/portfolio/engagement/eng_cover.png",
    tagline: "The sparkle of new promises and the start of a lifetime journey.",
    shortDesc: "Documenting proposal surprises, ring ceremonies, and celebratory dinners with style and intimacy.",
    startingPrice: "₹25,000",
    samplePackages: [
       {
        name: "Basic Engagement Package",
        price: "₹25,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Traditional Videographer, 100+ edited photos, 20 Sheets Premium Glossy/Matte Photobook,Full Video coverage of wedding rituals."
      },
      {
        name: "Signature Engagement Package",
        price: "₹60,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Candid Photographer + 1 Traditional Videographer + 1 Cinematographer, 3-5 min cinematic 4K Wedding teaser, 1 Handcrafted 30-Page Archival Photobook."
      }
    ],
    projects: [
      {
        id: "proj-eng-1",
        title: "Under The Banyan: Siddharth & Tara",
        location: "Kollam, Kerala",
        date: "December 2025",
        summary: "A lantern-lit surprise proposal followed by an intimate ring ceremony on traditional backwaters.",
        // cover: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-eng-1",
            url: "images/portfolio/engagement/eng_1.jpeg",
            caption: "The diamond ring exchange framed against floral bells",
            alt: "Hands with engagement rings close up",
            aspect: "tall"
          },
          {
            id: "img-eng-2",
            url: "images/portfolio/engagement/eng_2.jpeg",
            caption: "Pure joy the instant she said yes",
            alt: "Couple cheering after proposal",
            aspect:"tall"
          },
          {
            id: "img-eng-3",
            url: "images/portfolio/engagement/eng_3.jpeg",
            caption: "Pure joy the instant she said yes",
            alt: "Couple cheering after proposal",
            aspect: "tall"
          },
          {
            id: "img-eng-4",
            url: "images/portfolio/engagement/eng_4.jpeg",
            caption: "Pure joy the instant she said yes",
            alt: "Couple cheering after proposal",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "maternity-photography",
    title: "Maternity Photography",
    slug: "maternity-photography",
    coverImage: "images/portfolio/maternity/maternity_cover.jpeg",
    tagline: "Celebrating the miraculous beauty and gentle anticipation of motherhood.",
    shortDesc: "Tender, flattering, and timeless maternity portraits captured in studio luxury or ethereal outdoor landscapes.",
    photoCount: 24,
    startingPrice: "₹10,000",
    samplePackages: [
      {
        name: "Maternity",
        price: "₹10,000",
        duration: "2 Hours in Air-conditioned Studio",
        deliverables: "2 Outfit styling variations,20 Magazine-grade retouched photos,Partner / spouse included"
      }
    ],
    projects: [
      {
        id: "proj-mat-1",
        title: "Golden Hour Glow: Pooja & Karan",
        location: "Lonavala Hills, Maharashtra",
        date: "September 2025",
        summary: "Sun-drenched silhouette portraits amidst misty hills, highlighting tenderness and love.",
        cover: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-mat-1",
            url: "images/portfolio/maternity/maternity1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-mat-2",
            url: "images/portfolio/maternity/maternity2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-mat-3",
            url: "images/portfolio/maternity/maternity3.jpeg",
            aspect: "tall"
          },
          {
            id: "img-mat-4",
            url: "images/portfolio/maternity/maternity6.jpeg",
            aspect: "tall"
          },
          {
            id: "img-mat-5",
            url: "images/portfolio/maternity/maternity7.jpeg",
            aspect: "tall"
          },
          {
            id: "img-mat-6",
            url: "images/portfolio/maternity/maternity8.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "baby-family-photography",
    title: "Baby & Family Photography",
    slug: "baby-family-photography",
    coverImage: "images/portfolio/baby/b9_cover.jpeg",
    tagline: "Preserving generational warmth, innocent smiles, and chaotic family love.",
    shortDesc: "Warm, authentic newborn and multigenerational family portrait sessions made fun, relaxed, and memorable.",
    startingPrice: "₹10,000",
    samplePackages: [
      {
        name: "Newborn Comfort Session",
        price: "₹10,000",
        duration: "Up to 3 Hours (Paced to baby's rhythm)",
        deliverables: "Sanitized home or studio props, 25 safely posed & lifestyle photos."
      },
      {
        name: "Generations Family Heirloom",
        price: "₹30,000",
        duration: "3 Hours Indoor/Outdoor Session",
        deliverables: "Grandparents, parents, children grouping, 60 edited photos."
      }
    ],
    projects: [
      {
        id: "proj-fam-1",
        title: "Three Generations of Joy: The Kapoors",
        location: "New Delhi",
        date: "November 2025",
        summary: "Warm lawn session full of giggles, playful tugs, and timeless portraits with grandparents.",
        cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-fam-1",
            url: "images/portfolio/baby/b1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-2",
            url: "images/portfolio/baby/b2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-3",
            url: "images/portfolio/baby/b9.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-4",
            url: "images/portfolio/baby/b4.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-5",
            url: "images/portfolio/baby/b5.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-6",
            url: "images/portfolio/baby/b6.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-7",
            url: "images/portfolio/baby/b7.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-8",
            url: "images/portfolio/baby/b8.jpeg",
            aspect: "tall"
          },
          {
            id: "img-fam-9",
            url: "images/portfolio/baby/b3.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "portrait-lifestyle",
    title: "Portrait & Lifestyle",
    slug: "portrait-lifestyle",
    coverImage: "images/uploads/u1.jpeg",
    tagline: "Magazine-grade aesthetics, dramatic shadow, and compelling identity.",
    shortDesc: "Individual artist profiles, fashion lookbooks, executive branding, and modern lifestyle photography.",
    photoCount: 38,
    startingPrice: "₹15,000",
    samplePackages: [
      {
        name: "Executive & Personal Branding",
        price: "₹15,000",
        duration: "4 Hours Session",
        deliverables: "Studio or Office setting, 15 magazine-ready portraits, LinkedIn & Press publication licensing."
      },
    ],
    projects: [
      {
        id: "proj-port-1",
        title: "Monochrome & Shadow: Maya Series",
        location: "Studio Bandra, Mumbai",
        date: "March 2026",
        summary: "A high-contrast black & white exploration of classical architecture, texture, and posture.",
        // cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
        images: [
          {
            id: "img-port-1",
            url: "images/uploads/u1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-port-2",
            url: "images/uploads/u3.jpeg",
            aspect: "tall"
          },
          {
            id: "img-port-3",
            url: "images/uploads/u2.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  },
  {
    id: "event-photography",
    title: "Birth Days & Events Photography",
    slug: "event-photography",
    coverImage: "images/portfolio/bday_events/event_cover.jpeg",
    tagline: "Capturing high-energy celebrations, galas, and momentous milestones.",
    shortDesc: "Comprehensive photo and video coverage for milestone birthdays, corporate galas, award nights, and concerts.",
    startingPrice: "₹25,000",
    samplePackages: [
      {
        name: "Basic BirthDay Package",
        price: "₹25,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Traditional Videographer, 100+ edited photos, 20 Sheets Premium Glossy/Matte Photobook,Full Video coverage of the event."
      },
      {
        name: "Signature BirthDay Package",
        price: "₹60,000",
        duration: "Single Day / Up to 8 Hours",
        deliverables: "1 Traditional Photographer + 1 Candid Photographer + 1 Traditional Videographer + 1 Cinematographer, 3-5 min cinematic 4K Birthday teaser, 1 Handcrafted 30-Page Archival Photobook."
      }
    ],
    projects: [
      {
        id: "proj-eve-1",
        title: "The Silver Jubilee Gala: Vivanta Grand",
        location: "Hyderabad, India",
        date: "December 2023",
        summary: "An electrifying evening of champagne toasts, live jazz, and rooftop celebrations overlooking the coast.",
        cover: "images/portfolio/bday_events/event1.jpeg",
        images: [
          {
            id: "img-eve-4",
            url: "images/portfolio/bday_events/bday1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-eve-5",
            url: "images/portfolio/bday_events/bday2.jpeg",
            aspect: "tall"
          },
          {
            id: "img-eve-6",
            url: "images/portfolio/bday_events/bday3.jpeg",
            aspect: "tall"
          },
          {
            id: "img-eve-1",
            url: "images/portfolio/bday_events/event1.jpeg",
            aspect: "tall"
          },
          {
            id: "img-eve-2",
            url: "images/portfolio/bday_events/event4.jpeg",
            aspect: "tall"
          },
          {
            id: "img-eve-3",
            url: "images/portfolio/bday_events/event5.jpeg",
            aspect: "tall"
          },
        ]
      }
    ]
  },
  {
    id: "photo-editing",
    title: "Photo Editing & Retouching",
    slug: "photo-editing",
    coverImage: "images/portfolio/Editing/editing_cover.png",
    tagline: "Archival color science, skin micro-texture, and cinematic tones.",
    shortDesc: "High-end post-production services for photographers, advertising agencies, and clients wanting master-grade images.",
    photoCount: 20,
    startingPrice: "₹8,000",
    samplePackages: [
      {
        name: "Basic Retouching",
        price: "₹8,000",
        duration: "Up to 50 Images",
        deliverables: "Exposure balancing, white balance correction, basic blemish removal, lens distortion fix."
      },
      {
        name: "Professional Editorial Retouching",
        price: "₹12,000",
        duration: "Up to 30 Premium Images",
        deliverables: "Frequency separation skin retouching, color grading, background cleanup, dodge & burn."
      }
    ],
    projects: [
      {
        id: "proj-edit-1",
        title: "Color Science: The Warm Vintage Palette",
        location: "Post-Production Suite",
        date: "Ongoing",
        summary: "Demonstrating dynamic range preservation, Kodak film simulation, and pristine skin tones.",
        images: [
          {
            id: "img-edit-1",
            url: "images/uploads/u5.jpeg",
            aspect: "tall"
          },
          {
            id: "img-edit-2",
            url: "images/uploads/u6.jpeg",
            aspect: "tall"
          }
        ]
      }
    ]
  }
];
