import { bookingLink, contacts } from "@/utils/constant";

/**
 * 📢 HOW TO ADD A NEW SERVICE PAGE (FOR NON-TECH USERS):
 * 
 * Step 1: Copy the entire text of this file (select all and copy).
 * Step 2: Paste it into an AI assistant (like ChatGPT, Claude, or Gemini).
 * Step 3: Copy and paste the prompt below, filling in your service details:
 * 
 * -----------------------------------------------------------------------------------------
 * "Here is my Next.js servicesData.tsx file. I want to add a new service page for:
 * 
 * - Service Name: [e.g., Mountain Spa & Massage]
 * - Key details: [e.g., signature deep tissue massages, local organic body scrubs, private therapist]
 * - Images to use (optional): [e.g., /about-us/camp-3.png]
 * 
 * Using the existing structure, generate a new ServiceDetail object that matches the resort's premium theme.
 * Write engaging, luxury-oriented descriptions, create 3-5 relevant FAQs, and choose the styling options (dark/light theme).
 * Return ONLY the TypeScript code block (starting with '{' and ending with '}') so I can paste it into the array."
 * -----------------------------------------------------------------------------------------
 * 
 * Step 4: The AI will give you a code block. Copy it.
 * Step 5: Scroll to the bottom of this file, put a comma (,) after the last service block, and paste the new block inside the `servicesData` array (before the final `];`).
 * Step 6: Save the file. Your new page is immediately live at: http://localhost:3000/services/your-slug
 */

export interface ServiceDetail {
  slug: string;
  metaData: {
    title: string;
    description: string;
  };
  banner: {
    title: string;
    subTitle: string;
    description: string;
    image: string;
  };
  intro: {
    title: string;
    description: string[];
    image: string;
    quote?: string;
  };
  details: {
    title: string;
    subtitle?: string;
    description: string[];
    features: string[];
    image: string;
    layout: "text-left" | "text-right";
    bgColor: string; // Background hex color (e.g. '#0C150D' for dark, '#FCFCF9' for light)
    textColor: string; // Tailwind text color class (e.g. 'text-white' or 'text-[#0C150D]')
    headingColor: string; // Tailwind heading class (e.g. 'text-white font-primary' or 'text-[#0C150D] font-primary')
    subtextColor: string; // Tailwind body text class (e.g. 'text-neutral-300' or 'text-light')
    featureBgColor: string; // Tailwind pill background (e.g. 'bg-[#B89258]/20' or 'bg-[#0C150D]/5')
    featureTextColor: string; // Tailwind pill text color
  };
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
  {
    slug: "laundry-service",
    metaData: {
      title: "Express Laundry & Dry Cleaning | EBC Mussoorie",
      description: "Travel light and stay fresh with our premium same-day and express laundry, dry cleaning, and professional steam pressing services at EBC Mussoorie.",
    },
    banner: {
      title: "Resort Conveniences",
      subTitle: "Express Laundry & Pressing",
      description: "Keep your wardrobe clean, crisp, and fresh throughout your mountain getaway with EBC's professional in-house laundry services.",
      image: "/banner/bnr2.png",
    },
    intro: {
      title: "Freshness Restored, <i>Comfort Delivered</i>",
      description: [
        "At Everest Base Camp Mussoorie, we ensure that your stay is as seamless as it is memorable. Whether you've returned from an adventurous trek along Hathipaon's dusty trails or need a crisp outfit for a candlelit dinner under the stars at Park Cafe, our premium laundry and garment care service is at your command.",
        "We handle your apparel with absolute care, utilizing environmentally-friendly, skin-safe detergents and modern, energy-efficient laundering systems that protect both your garments and the pristine mountain ecosystems surrounding us.",
      ],
      image: "/home/mountain.png",
      quote: "“Relax, unwind, and let us handle the details.”",
    },
    details: {
      title: "Impeccable Garment Care Services",
      subtitle: "Tailored for your convenience",
      description: [
        "From high-tech breathable trekking jackets to delicate evening wear, our experienced housekeeping team is trained to clean, sanitize, and press a wide range of fabrics with attention to detail.",
        "Choose between our standard service (returned within 24 hours) or our express option (returned within 6 hours) to fit your itinerary perfectly. Simply place your items in the laundry bag provided in your tent or cottage, and notify your personal butler or call front desk.",
      ],
      features: [
        "Standard 24-Hour Return",
        "Express 6-Hour Premium Return",
        "Eco-friendly & Organic Detergents",
        "Professional Dry Cleaning",
        "Delicate Fabric & Woolen Care",
        "Steam Pressing & Ironing",
      ],
      image: "/about-us/camp-1.png",
      layout: "text-left",
      bgColor: "#0C150D", // Deep primary green
      textColor: "text-white",
      headingColor: "text-white font-primary",
      subtextColor: "text-neutral-300",
      featureBgColor: "bg-[#B89258]/20 border border-[#B89258]/30",
      featureTextColor: "text-[#B89258]",
    },
    faqs: [
      {
        question: "How do I request laundry pickup?",
        answer: "Simply place your garments inside the laundry bag located in your wardrobe, fill out the laundry slip, and notify your personal butler or the front desk (dial 0 or contact house keeping).",
      },
      {
        question: "What are the timings for same-day express service?",
        answer: "For express 6-hour delivery, please request a pickup before 10:00 AM. Laundry collected after 10:00 AM under express service will be delivered by evening or early next morning.",
      },
      {
        question: "Are dry cleaning services available?",
        answer: "Yes, dry cleaning services are available for delicate fabrics, suits, and heavy woolens. Please specify 'Dry Cleaning' on your laundry checklist.",
      },
      {
        question: "Do you use eco-friendly detergents?",
        answer: "Absolutely. As part of our commitment to preserving the environment in Mussoorie, we use biodegradable, phosphate-free, and hypoallergenic detergents that are gentle on both your clothes and nature.",
      },
    ],
    cta: {
      title: "HASSLE-FREE ESCAPE",
      subtitle: "Experience Premium Hospitality at EBC <i>Mussoorie</i>",
      description: [
        "Ready to experience the perfect blend of natural adventure and luxury hospitality? Plan your stay with us today.",
      ],
      actions: [
        {
          label: "BOOK YOUR STAY NOW",
          href: bookingLink,
        },
        {
          label: "CONTACT RECEPTION",
          href: "/contact-us",
        },
      ],
    },
  },
  {
    slug: "valet-parking",
    metaData: {
      title: "Secure Valet Parking & EV Charging | EBC Mussoorie",
      description: "Travel stress-free. Enjoy complimentary 24/7 secured valet parking and high-speed EV charging facilities for overnight guests at EBC Mussoorie.",
    },
    banner: {
      title: "Resort Conveniences",
      subTitle: "Valet Parking & EV Charging",
      description: "Arrive in style and leave the mountain navigation details to us with our secure, round-the-clock valet parking and eco-friendly EV charging stations.",
      image: "/corporate-and-mice/bnr.png",
    },
    intro: {
      title: "A Seamless, <i>Stress-Free Arrival</i>",
      description: [
        "The journey up the winding, scenic Hathipaon Road is spectacular, and we make sure the final steps of your arrival are completely effortless. From the moment you pull up to our welcoming entrance gates, our professional valet team is ready to assist you.",
        "We believe in blending luxury convenience with sustainability. Our resort features high-power electric vehicle (EV) charging stations, so your vehicle can recharge under the stars while you rejuvenate under the clouds.",
      ],
      image: "/home/mountain.png",
      quote: "“Your gateway to the sky, starting right at our gates.”",
    },
    details: {
      title: "State-of-the-Art Parking Facilities",
      subtitle: "Secured, convenient, and green",
      description: [
        "Your vehicle is housed in a secure, covered area monitored 24/7 by CCTV and dedicated security staff. Enjoy complimentary car detailing or basic checkups on request before your departure.",
        "Our high-speed EV charging docks are compatible with all major Indian and international electric vehicles, providing rapid charges so you're ready to explore Mussoorie's peaks and nearby Dehradun valley routes anytime.",
      ],
      features: [
        "24/7 Covered Secure Parking",
        "Professional Valet Personnel",
        "High-Speed EV Charging Docks",
        "Fully Monitored CCTV Security",
        "Complimentary Exterior Wash (on request)",
        "Luggage Assistance & Bell Service",
      ],
      image: "/about-us/experience.png",
      layout: "text-right",
      bgColor: "#FCFCF9", // Warm off-white
      textColor: "text-[#0C150D]",
      headingColor: "text-[#0C150D] font-primary",
      subtextColor: "text-light",
      featureBgColor: "bg-[#0C150D]/5 border border-[#0C150D]/10",
      featureTextColor: "text-[#0C150D]",
    },
    faqs: [
      {
        question: "Is valet parking complimentary for all guests?",
        answer: "Yes, 24/7 valet parking is completely complimentary for all overnight resort guests and patrons visiting Park Cafe or The Den.",
      },
      {
        question: "What types of electric vehicles are supported by your chargers?",
        answer: "Our EV chargers support standard Type 2 AC charging connectors, which are compatible with nearly all major electric SUVs and sedans in India (Tata, MG, Hyundai, BYD, Kia, BMW, Audi, etc.).",
      },
      {
        question: "How secure is the parking lot?",
        answer: "Our private parking area is located on-site, gated, fully lit, and continuously monitored by our security staff and high-definition CCTV security cameras 24 hours a day.",
      },
      {
        question: "Can I access my vehicle during the stay?",
        answer: "Absolutely. Simply notify the bell desk or reception, and our valet team will retrieve your vehicle or assist you in retrieving items from it in minutes.",
      },
    ],
    cta: {
      title: "ARRIVE EFFORTLESSLY",
      subtitle: "Start Your Himalayan Retreat Today",
      description: [
        "Drive up, hand over the keys, and immerse yourself in the luxurious nature of Hathipaon. We'll take care of the rest.",
      ],
      actions: [
        {
          label: "RESERVE YOUR COTTAGE",
          href: bookingLink,
        },
        {
          label: "GET DIRECTIONS",
          href: contacts.addresses[0].addressUrl,
        },
      ],
    },
  },
  {
    slug: "guided-trekking",
    metaData: {
      title: "Guided Treks & Naturalist Trails | EBC Mussoorie",
      description: "Explore the scenic peaks and hidden pine forests of Mussoorie with our custom-guided treks and expert wilderness naturalist trails.",
    },
    banner: {
      title: "Resort Experiences",
      subTitle: "Guided Treks & Nature Trails",
      description: "Walk through whispering deodar forests, ancient mountain ruins, and stunning ridge lines with our expert local guides.",
      image: "/activities/banner-1.png",
    },
    intro: {
      title: "Walk in the <i>Footsteps of History</i>",
      description: [
        "Perched at a magnificent altitude in Mussoorie, EBC is surrounded by legendary trekking routes, rich colonial history, and breathtaking wilderness. Our guided outdoor treks are crafted to show you the best-kept secrets of the Himalayas.",
        "Led by our resident naturalists and expert local guides, these journeys offer the perfect blend of physical activity, historic storytelling, and botanical discovery. You will learn about regional wilderness, medicinal mountain herbs, and local folklore.",
      ],
      image: "/home/mountain.png",
      quote: "“The mountains are calling, and we know the path.”",
    },
    details: {
      title: "Curated Trails For Every Explorer",
      subtitle: "From gentle strolls to high-altitude treks",
      description: [
        "We offer multiple difficulty levels to cater to every guest. Enjoy the iconic George Everest House Walk, dive deep into the misty Hathipaon Pine Forest Trails, or test your endurance on the challenging Bhadraj Temple Day Trek.",
        "We supply all basic trekking gear, including trekking poles, lightweight backpacks, first-aid kits, and freshly packed picnic breakfasts prepared by Park Cafe chefs to enjoy at scenic overlooks.",
      ],
      features: [
        "Resident Naturalist Guides",
        "Bespoke Tailored Itineraries",
        "Complimentary Hiking Gear Support",
        "Packed Gourmet Picnic Lunches",
        "Historic Colonial Site Walks",
        "Bird-watching & Wildlife Spots",
      ],
      image: "/about-us/activities.png",
      layout: "text-left",
      bgColor: "#0C150D",
      textColor: "text-white",
      headingColor: "text-white font-primary",
      subtextColor: "text-neutral-300",
      featureBgColor: "bg-[#B89258]/20 border border-[#B89258]/30",
      featureTextColor: "text-[#B89258]",
    },
    faqs: [
      {
        question: "How do I book a guided trek?",
        answer: "We recommend booking your trek at least 12 hours in advance. You can specify trekking options during reservation or speak with our guest relations executive at reception to schedule a guide.",
      },
      {
        question: "What should I wear or bring for a trek?",
        answer: "We recommend sturdy walking shoes or hiking boots, comfortable trousers, layered clothing (as temperatures can drop quickly), sunglasses, sunscreen, and a camera. We will provide trekking poles and water bottles.",
      },
      {
        question: "Are the treks suitable for children and seniors?",
        answer: "Yes, our 'Everest House walk' and 'Hathipaon Forest walk' are gentle, scenic strolls suitable for children and seniors. We adapt our pace and route selection based on your group's fitness level.",
      },
      {
        question: "What happens in case of bad weather?",
        answer: "Safety is our absolute priority. In case of heavy rain, thunder, or high winds, guided treks may be rescheduled or replaced with cozy indoor camp activities and private dining experiences.",
      },
    ],
    cta: {
      title: "ADVENTURE AWAITS",
      subtitle: "Explore the Majestic Peaks of Hathipaon",
      description: [
        "Secure your private guide and discover the hidden beauty of Mussoorie's mountain ridges. Contact us to reserve your guide.",
      ],
      actions: [
        {
          label: "BOOK YOUR STAY & TREK",
          href: bookingLink,
        },
        {
          label: "VIEW ALL ACTIVITIES",
          href: "/activities",
        },
      ],
    },
  },
];
