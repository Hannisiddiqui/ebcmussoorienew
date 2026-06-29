import { bookingLink, contacts } from "@/utils/constant";

/**
 * ============================================================
 *  HOW TO ADD A NEW SERVICE PAGE  (for non-technical users)
 * ============================================================
 *
 * Step 1 — Copy this ENTIRE file and paste it into an AI tool
 *          (ChatGPT, Claude, Gemini, etc.)
 *
 * Step 2 — Send this prompt to the AI (fill in your details):
 * ----------------------------------------------------------
 * "Here is my servicesData.tsx file for EBC Mussoorie resort.
 *  Add a new service page with:
 *
 *  - Service Name: [e.g., In-Room Dining]
 *  - Slug / URL:   [e.g., in-room-dining  → page at /services/in-room-dining]
 *  - What it offers: [describe the service in plain English]
 *  - Theme: DARK (green bg, gold accents) or LIGHT (cream/white bg)
 *
 *  Match EBC Mussoorie's brand voice exactly:
 *  — Short, confident sentences. No generic hotel clichés.
 *  — Nature-immersive, honest, warm but refined tone.
 *  — Reference the forest, Hathipaon Road, bonfires, Sir George Everest
 *    where appropriate.
 *
 *  Add 4 FAQs and 3 highlight cards.
 *  Return ONLY the TypeScript object (starts { ends }) to paste into the array."
 * ----------------------------------------------------------
 *
 * Step 3 — Copy the code block the AI returns.
 *
 * Step 4 — Scroll to the bottom of this file.
 *          After the last service entry's closing `}`,
 *          add a comma `,` then paste your new block BEFORE the final `];`
 *
 * Step 5 — Save the file.
 *          The new page is immediately live at /services/your-slug
 * ============================================================
 */

export interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  metaData: {
    title: string;
    description: string;
  };
  banner: {
    title: string;       // small label (e.g. "Resort Conveniences")
    subTitle: string;    // large hero heading
    description: string;
    image: string;       // path to banner image (e.g. "/banner/bnr2.png")
  };
  intro: {
    title: string;       // supports <i>italic</i> HTML tags
    description: string[];
    image: string;
    quote?: string;      // optional pull-quote
  };
  details: {
    title: string;
    subtitle?: string;
    description: string[];
    features: string[];  // checklist items
    image: string;
    layout: "text-left" | "text-right";
    bgColor: string;     // "#0C150D" for dark, "#FCFCF9" for light/cream
  };
  highlights?: ServiceHighlight[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    subtitle: string;
    description: string[];
    actions: {
      label: string;
      href: string;
    }[];
  };
}

export const servicesData: ServiceDetail[] = [

  // ─── LAUNDRY & GARMENT CARE ─────────────────────────────────
  {
    slug: "laundry-service",
    metaData: {
      title: "Laundry & Garment Care | EBC Mussoorie",
      description:
        "Same-day laundry, dry cleaning, and steam pressing at Everest Base Camp Mussoorie. Travel light — we take care of the rest.",
    },
    banner: {
      title: "Guest Services",
      subTitle: "Laundry & Garment Care",
      description:
        "Whether you've just returned from the Hathipaon trails or need a freshly pressed outfit for the evening, our laundry service handles it quietly and quickly.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "Travel Light. <i>Stay Fresh.</i>",
      description: [
        "At EBC, we believe the best holidays are the ones where you don't have to think about the details. Our in-house laundry and garment care service is one of those details — discreet, efficient, and available every day.",
        "We use biodegradable, skin-safe detergents throughout. Everything we do on the property is shaped by our commitment to the Mussoorie forest around us — and that includes how we wash your clothes.",
      ],
      image: "/home/mountain.png",
      quote: "\u201cThe best hospitality is the kind you don\u2019t notice.\u201d",
    },
    details: {
      title: "Garment Care at EBC",
      subtitle: "Quiet, efficient, always on time",
      description: [
        "Leave your items in the laundry bag provided in every tent and cottage. Fill out the slip and notify your butler or call the front desk. Standard returns come back within 24 hours. Express service delivers in 6 hours — request before 10 AM.",
        "Delicate fabrics, woolens, trekking gear, formal wear — our housekeeping team is trained to care for all of it. Dry cleaning is available on request.",
      ],
      features: [
        "24-Hour Standard Return",
        "6-Hour Express Service (before 10 AM)",
        "Biodegradable, Skin-Safe Detergents",
        "Dry Cleaning Available",
        "Woolen & Delicate Fabric Care",
        "Steam Pressing & Ironing",
      ],
      image: "/about-us/camp-1.png",
      layout: "text-left",
      bgColor: "#0C150D",
    },
    highlights: [
      {
        icon: "♻️",
        title: "Eco-Conscious Process",
        description:
          "Biodegradable, phosphate-free detergents — kind to your skin and to the Mussoorie forest.",
      },
      {
        icon: "⚡",
        title: "Express Before Dinner",
        description:
          "Drop off by 10 AM, pick up in 6 hours. Your outfit is ready before you sit down at Park Cafe.",
      },
      {
        icon: "🧺",
        title: "Every Fabric Handled",
        description:
          "From a trekking jacket to a formal shirt — our team is experienced with all fabrics and finishes.",
      },
    ],
    faqs: [
      {
        question: "How do I request a laundry pickup?",
        answer:
          "Use the laundry bag and slip in your wardrobe. Fill in the items, select standard or express, and dial 0 to notify the front desk or tell your butler.",
      },
      {
        question: "What is the cut-off time for same-day express service?",
        answer:
          "Request before 10 AM for 6-hour express delivery. Items collected after 10 AM are returned by early next morning.",
      },
      {
        question: "Is dry cleaning available at the property?",
        answer:
          "Yes. Dry cleaning is available for suits, formal wear, and delicate fabrics. Mark this option clearly on your laundry slip.",
      },
      {
        question: "What detergents do you use?",
        answer:
          "We use only biodegradable, hypoallergenic, phosphate-free detergents — safe for sensitive skin and safe for the local environment.",
      },
    ],
    cta: {
      title: "GUEST SERVICES",
      subtitle: "Every Detail Taken Care Of",
      description: [
        "From garment care to guided treks, the small things are handled — so your time at EBC is spent exactly as it should be.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "CONTACT US", href: "/contact-us" },
      ],
    },
  },

  // ─── VALET PARKING & EV CHARGING ───────────────────────────
  {
    slug: "valet-parking",
    metaData: {
      title: "Valet Parking & EV Charging | EBC Mussoorie",
      description:
        "Complimentary 24/7 secure valet parking and high-speed EV charging for all guests at EBC Mussoorie, Hathipaon Road.",
    },
    banner: {
      title: "Guest Services",
      subTitle: "Valet Parking & EV Charging",
      description:
        "Pull up to the gate. Hand over the keys. Your holiday begins the moment you arrive — we look after the car.",
      image: "/corporate-and-mice/bnr.png",
    },
    intro: {
      title: "Arrive Effortlessly. <i>Leave Whenever You\u2019re Ready.</i>",
      description: [
        "The drive up Hathipaon Road is part of the EBC experience — winding through deodar forest, glimpses of the valley below. But once you arrive, the effort stops. Our valet team meets you at the gate.",
        "We\u2019ve also installed on-site high-speed EV charging stations, because the guests arriving in electric vehicles deserve the same seamless experience as everyone else. Charge overnight, wake to a full battery.",
      ],
      image: "/home/mountain.png",
      quote: "\u201cArrive, breathe, and let the forest take over.\u201d",
    },
    details: {
      title: "Parking & Arrival at EBC",
      subtitle: "Secure, 24/7, and fully managed",
      description: [
        "Our parking is enclosed, gated, and continuously monitored by CCTV and a dedicated security team. Your car is safe overnight, or for however long your stay.",
        "EV charging is compatible with all major Indian and international models via Type 2 AC connectors. Simply plug in on arrival and your car is fully charged by morning. Complimentary exterior wash available before departure, on request.",
      ],
      features: [
        "24/7 Gated, Covered Parking",
        "Professional Valet at Every Arrival",
        "High-Speed EV Charging (Type 2 AC)",
        "CCTV-Monitored Security",
        "Complimentary Exterior Wash on Request",
        "Full Luggage Porterage to Your Room",
      ],
      image: "/about-us/experience.png",
      layout: "text-right",
      bgColor: "#FCFCF9",
    },
    highlights: [
      {
        icon: "🔒",
        title: "24/7 Secure Parking",
        description:
          "Gated, fully lit, and watched by our security team and HD CCTV around the clock. Sleep without a second thought.",
      },
      {
        icon: "⚡",
        title: "EV Charging Overnight",
        description:
          "Plug in on arrival. Compatible with Tata, MG, Hyundai, BYD, BMW, Audi, and most major Indian and international EVs.",
      },
      {
        icon: "🧳",
        title: "Bags to Your Room",
        description:
          "Our porterage team carries everything from car to cottage — your holiday starts the moment you step out.",
      },
    ],
    faqs: [
      {
        question: "Is parking complimentary for all guests?",
        answer:
          "Yes — secure 24/7 valet parking is complimentary for all overnight guests and for day visitors to Park Cafe and The Den.",
      },
      {
        question: "Which electric vehicles can charge at EBC?",
        answer:
          "Our chargers use Type 2 AC connectors, compatible with Tata Nexon EV, MG ZS EV, Hyundai Ioniq, BYD Atto, Kia EV6, BMW iX, Audi e-tron, and most mainstream electric vehicles in India.",
      },
      {
        question: "How secure is the parking area?",
        answer:
          "It is gated, covered, fully lit, and monitored 24 hours by our security staff and CCTV. No guest has ever had an incident.",
      },
      {
        question: "Can I access my car mid-stay?",
        answer:
          "Of course. Call the front desk or tell your butler — the valet team retrieves your vehicle within a few minutes.",
      },
    ],
    cta: {
      title: "PLAN YOUR STAY",
      subtitle: "Mussoorie's Most Intimate Luxury Escape",
      description: [
        "14 unique accommodations, a private bonfire every evening, and every detail handled. Book directly for the best rates.",
      ],
      actions: [
        { label: "RESERVE YOUR ROOM", href: bookingLink },
        { label: "GET DIRECTIONS", href: contacts.addresses[0].addressUrl },
      ],
    },
  },

  // ─── GUIDED TREKKING & NATURE TRAILS ────────────────────────
  {
    slug: "guided-trekking",
    metaData: {
      title: "Guided Treks & Nature Trails | EBC Mussoorie",
      description:
        "Guided morning walks, nature trails, and full-day Himalayan treks with resident naturalist guides at EBC Mussoorie, Hathipaon Road.",
    },
    banner: {
      title: "EBC Experiences",
      subTitle: "Guided Treks & Nature Trails",
      description:
        "The forest around EBC contains leopard trails, Himalayan bird species, medicinal plants, and one of India\u2019s most significant colonial landmarks. Our guides open all of it up.",
      image: "/activities/banner-1.png",
    },
    intro: {
      title: "The Forest Is the <i>Whole Point.</i>",
      description: [
        "EBC sits within a working deodar forest at 2,160m. Leopards move through the grounds at dawn. Over 50 bird species have been recorded on the property. The George Everest House \u2014 where Sir George Everest himself lived and worked \u2014 is a short walk from our gate.",
        "Our resident naturalist guides lead morning walks and full-day treks that reveal what most Mussoorie visitors never see. These are not manufactured activities \u2014 they are simply the forest, explained by someone who knows it well.",
      ],
      image: "/home/mountain.png",
      quote: "\u201cBe quiet enough and the forest will show you everything.\u201d",
    },
    details: {
      title: "Trails & Walks at EBC",
      subtitle: "From an easy stroll to a full-day ridge trek",
      description: [
        "Morning forest walks run daily, 7\u20139 AM, led by our naturalist. The George Everest House heritage walk takes 90 minutes. For those who want more, the Bhadraj Temple day trek climbs through deodar and rhododendron forest to a historic ridge-top shrine.",
        "All treks include trekking poles and a packed lunch prepared by our Park Cafe kitchen. First-aid kit carried on every outing. We match the pace and route to your group.",
      ],
      features: [
        "Daily Guided Morning Walks (7\u20139 AM)",
        "George Everest House Heritage Walk",
        "Bhadraj Temple Full-Day Trek",
        "Resident Naturalist Guides",
        "Trekking Poles & Gear Provided",
        "Park Cafe Packed Lunch on Day Treks",
      ],
      image: "/about-us/activities.png",
      layout: "text-left",
      bgColor: "#0C150D",
    },
    highlights: [
      {
        icon: "🌲",
        title: "Deodar Forest Walks",
        description:
          "Walk through ancient deodar groves with a guide who can name every bird call, identify medicinal plants, and read pugmarks in the mud.",
      },
      {
        icon: "🏛️",
        title: "George Everest House",
        description:
          "The historic estate of Sir George Everest \u2014 the Surveyor General of India whose legacy gave Everest its name \u2014 a short walk from EBC\u2019s gate.",
      },
      {
        icon: "🐦",
        title: "50+ Bird Species",
        description:
          "Himalayan Monal, Verditer Flycatcher, Blue Whistling Thrush, Kalij Pheasant. Our naturalist knows exactly where to find them.",
      },
    ],
    faqs: [
      {
        question: "Do I need to book a guided trek in advance?",
        answer:
          "We recommend booking the evening before. Speak to our guest relations team at reception, or request it at the time of room reservation.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Comfortable walking shoes or light trekking boots, warm layers (mornings are cool at 2,160m), and a camera. We supply trekking poles, water, and packed lunch on full-day routes.",
      },
      {
        question: "Are morning walks suitable for children and older guests?",
        answer:
          "Yes. The daily forest walk and George Everest House trail are gentle and accessible for all ages. We set the pace to suit whoever is in the group.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Guest safety is the only consideration. In heavy rain or high winds we reschedule or replace the trek with a cosy in-camp experience \u2014 birding from the veranda, a fire, or a private breakfast in the meadow.",
      },
    ],
    cta: {
      title: "EBC EXPERIENCES",
      subtitle: "The Forest Is Waiting",
      description: [
        "Every stay at EBC includes the morning walk. To go further, speak to our team and we\u2019ll arrange the rest.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "VIEW ALL ACTIVITIES", href: "/activities" },
      ],
    },
  },
  // ─── SERVICE PAGE LAYOUT TEMPLATE ─────────────────────────
  {
    slug: "page-url",
    metaData: {
      title: "Service Page Layout | EBC Mussoorie",
      description:
        "A service page template that matches the EBC Mussoorie site design and is published at /services/page-url.",
    },
    banner: {
      title: "Guest Services",
      subTitle: "Service Page Layout",
      description:
        "This service entry uses the existing EBC service page template so the design stays consistent across the site.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "Built for EBC. <i>Ready to publish.</i>",
      description: [
        "Use this page as the starting layout for a new service offering at EBC Mussoorie.",
        "The site already renders it from the shared service template, so only this data object is needed.",
      ],
      image: "/home/mountain.png",
      quote: "“A single layout, ready for your next service page.”",
    },
    details: {
      title: "Service Page Template",
      subtitle: "Consistent, brand-aligned, and easy to update",
      description: [
        "The layout includes hero banner, intro, detail section, highlights, FAQ, and CTA — exactly like the rest of the service pages.",
        "Switch the text, images, and slug to create your own service page in minutes.",
      ],
      features: [
        "Hero banner and introductory story",
        "Text + image detail section with dark/light styling",
        "Highlights grid and FAQ section",
        "Automatic URL generation at /services/page-url",
      ],
      image: "/about-us/experience.png",
      layout: "text-right",
      bgColor: "#FCFCF9",
    },
    highlights: [
      {
        icon: "🛎️",
        title: "Design matched",
        description:
          "Rendered with the same service page template used across the resort site.",
      },
      {
        icon: "🌲",
        title: "Auto-generated route",
        description:
          "No new page file is required. The slug creates the URL automatically.",
      },
      {
        icon: "⚡",
        title: "Quick to customize",
        description:
          "Replace the content with your new service details and publish immediately.",
      },
    ],
    faqs: [
      {
        question: "How do I publish a new service page?",
        answer:
          "Add a new object to `servicesData` with a unique slug. The service route is generated automatically.",
      },
      {
        question: "Do I need a separate page file?",
        answer:
          "No. The shared route at `src/app/services/[slug]/page.tsx` renders all service pages from the data file.",
      },
      {
        question: "Can I use dark or light styling?",
        answer:
          "Yes. Set `details.bgColor` to `#0C150D` for dark or `#FCFCF9` for light sections.",
      },
      {
        question: "What URL will this page use?",
        answer:
          "This entry publishes at `/services/page-url`. Change `slug` to any other unique value for a new URL.",
      },
    ],
    cta: {
      title: "ADD YOUR SERVICE",
      subtitle: "Publish without creating new route files",
      description: [
        "Every service page uses the same layout. Just update the service data and the URL begins working.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "CONTACT US", href: "/contact-us" },
      ],
    },
  },
  {
    slug: "test",
    metaData: {
      title: "Test Service | EBC Mussoorie",
      description:
        "A test service page created for EBC Mussoorie. Published automatically at /services/test.",
    },
    banner: {
      title: "Guest Services",
      subTitle: "Test Service",
      description:
        "A service page created as a proof of concept for the site's shared service layout.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "This is a test service page. <i>Ready to publish.</i>",
      description: [
        "The page uses the same layout as the other service pages on the site.",
        "You can edit this entry to turn it into any new service offering.",
      ],
      image: "/home/mountain.png",
      quote: "“A new service page published from data, not a new route file.”",
    },
    details: {
      title: "Test Service Layout",
      subtitle: "Shared Service Template",
      description: [
        "This page proves that new services can be added by updating service data alone.",
        "Keep the structure and update the text, images, and slug for your real service.",
      ],
      features: [
        "Hero banner and intro section",
        "Detail section with image and features",
        "FAQs and highlights included",
        "Published at /services/test automatically",
      ],
      image: "/about-us/experience.png",
      layout: "text-right",
      bgColor: "#FCFCF9",
    },
    highlights: [
      {
        icon: "✅",
        title: "Proof of concept",
        description:
          "This page confirms the service template works for any new slug.",
      },
      {
        icon: "🌿",
        title: "Design matched",
        description:
          "The look and feel matches the rest of the EBC service section.",
      },
      {
        icon: "🔧",
        title: "Ready to customize",
        description:
          "Change the content and reuse this entry for your actual service.",
      },
    ],
    faqs: [
      {
        question: "Can this page be published automatically?",
        answer:
          "Yes. The shared service route uses the slug from `servicesData` to create `/services/test`.",
      },
      {
        question: "Do I need a new `page.tsx` file?",
        answer:
          "No. The single dynamic service page at `src/app/services/[slug]/page.tsx` renders it.",
      },
      {
        question: "Can I change this into a real service?",
        answer:
          "Yes. Replace the title, descriptions, image paths, and URL slug with your real service details.",
      },
      {
        question: "What should the slug look like?",
        answer:
          "Use lowercase words separated by hyphens, for example `/services/test` or `/services/room-service`.",
      },
    ],
    cta: {
      title: "TEST SERVICE LIVE",
      subtitle: "Your new page is published",
      description: [
        "This page now exists at /services/test. Edit it to make it a real guest service.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "CONTACT US", href: "/contact-us" },
      ],
    },
  },
  {
    slug: "forest-picnic",
    metaData: {
      title: "Forest Picnic | EBC Mussoorie",
      description:
        "A private forest picnic experience on Hathipaon Road with warm service, local flavours, and nature views.",
    },
    banner: {
      title: "Guest Experiences",
      subTitle: "Forest Picnic",
      description:
        "A quiet picnic in the deodar woods, with curated food, soft seating, and a view that belongs only to you.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "A picnic that feels both private and wild.<i></i>",
      description: [
        "Choose a forest clearing for two or a small group, and we'll set everything up with care.",
        "The team brings blankets, lanterns, and a seasonal menu inspired by local herbs and smoke.",
      ],
      image: "/home/mountain.png",
      quote: "“A pause in the forest, with food and service that feels rooted in Mussoorie.”",
    },
    details: {
      title: "What the forest picnic includes",
      subtitle: "Simple, elegant, outside",
      description: [
        "Our picnic menu is designed for the outdoors: easy, fresh, and memorable. We serve it in a secluded spot near the property.",
        "The experience includes food styling, service, and light firewood for warmth if the evening turns cool.",
      ],
      features: [
        "Private forest picnic site",
        "Seasonal snacks and plated mains",
        "Wood-fired warmth on request",
        "Dedicated service team to set up and clear away",
      ],
      image: "/about-us/experience.png",
      layout: "text-right",
      bgColor: "#FCFCF9",
    },
    highlights: [
      {
        icon: "🌲",
        title: "Forest setting",
        description:
          "A private clearing close to EBC, surrounded by deodar and Himalayan undergrowth.",
      },
      {
        icon: "🍽️",
        title: "Curated picnic menu",
        description:
          "Plates designed to travel and taste fresh outdoors, matched to the season.",
      },
      {
        icon: "🕯️",
        title: "Comfort in the open air",
        description:
          "Blankets, lanterns, and warm touches for an evening that feels intentional.",
      },
    ],
    faqs: [
      {
        question: "Can we book this for a private group?",
        answer:
          "Yes. The forest picnic is ideal for couples or small groups, and we can arrange the setting accordingly.",
      },
      {
        question: "Is the picnic location outdoors only?",
        answer:
          "Yes. It is designed as a small outdoor experience in the forest near the resort.",
      },
      {
        question: "What should we wear?",
        answer:
          "Comfortable layers are best. Mornings and evenings can be cool, so bring a light jacket.",
      },
      {
        question: "How long does the experience last?",
        answer:
          "Plan for about 90 minutes from arrival to departure, with time to relax and enjoy the setting.",
      },
    ],
    cta: {
      title: "FOREST PICNIC READY",
      subtitle: "A page live at /services/forest-picnic",
      description: [
        "This service is published instantly from the shared service layout. Change the content to make it your own.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "CONTACT US", href: "/contact-us" },
      ],
    },
  },
  {
    slug: "private-chef",
    metaData: {
      title: "Private Chef | EBC Mussoorie",
      description:
        "A private chef experience in your cottage or tent, with a menu crafted for your party and the Himalayan setting.",
    },
    banner: {
      title: "Guest Services",
      subTitle: "Private Chef",
      description:
        "Enjoy a custom dining experience in your room, prepared by our chef with local ingredients and refined presentation.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "A private meal without leaving your room.<i></i>",
      description: [
        "Our private chef service brings the resort's kitchen to your cottage or tent, with a menu made just for you.",
        "Perfect for celebrations, quiet nights, or simply when you want the full EBC table served in privacy.",
      ],
      image: "/home/mountain.png",
      quote: "“The best hospitality is the one brought to your door.”",
    },
    details: {
      title: "How private chef service works",
      subtitle: "Tailored dining, relaxed pacing",
      description: [
        "Tell us your preferences, dietary needs, and timing. We compose a menu of seasonal dishes and serve them in your space.",
        "The experience includes preparation, plating, and service, so you can stay comfortable while the team looks after everything.",
      ],
      features: [
        "Custom menu for your party",
        "Fresh local and Himalayan ingredients",
        "Table service in your cottage or tent",
        "Chef support for special requests",
      ],
      image: "/about-us/experience.png",
      layout: "text-left",
      bgColor: "#0C150D",
    },
    highlights: [
      {
        icon: "👨‍🍳",
        title: "Personalised menu",
        description:
          "A menu built around your tastes, from light bites to a full-course dinner.",
      },
      {
        icon: "🏡",
        title: "Room service, reimagined",
        description:
          "The private chef brings restaurant-level service to your cottage or tent.",
      },
      {
        icon: "🌌",
        title: "Perfect for special evenings",
        description:
          "A quiet dinner after a forest day, or a celebration with close company.",
      },
    ],
    faqs: [
      {
        question: "Can we choose the menu?",
        answer:
          "Yes. We build the menu around your preferences, including dietary requests and portion sizes.",
      },
      {
        question: "Where is the meal served?",
        answer:
          "We serve it in your tent or cottage, depending on what you prefer and what fits your group.",
      },
      {
        question: "Is there a minimum booking size?",
        answer:
          "No. We can arrange private chef service for couples or small groups.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "Please request it at least one day before so the kitchen can prepare the freshest ingredients.",
      },
    ],
    cta: {
      title: "PRIVATE CHEF LIVE",
      subtitle: "Now available at /services/private-chef",
      description: [
        "This is a second published service page. Edit any section to reflect the real offering.",
      ],
      actions: [
        { label: "BOOK YOUR STAY", href: bookingLink },
        { label: "CONTACT US", href: "/contact-us" },
      ],
    },
  },
];
