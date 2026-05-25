import {
  bookingLink,
  contacts,
  imgSrc,
  landingpageImgSrc,
} from "@/utils/constant";

export const roomDetailsPageData = [
  {
    slug: "the-andrews-villa",

    metaData: {
      title: "Andrew's Villa | EBC Mussoorie",
      description:
        "Mussoorie's most exclusive private villa — a sanctuary of uncompromised luxury in the Himalayan forest.",
    },

    banner: {
      title: "Flagship Villa",
      subTitle: "The Andrew's Villa",
      price: "From ₹20,000 per night · Breakfast included",
      description:
        "Mussoorie's most exclusive private villa — a sanctuary of uncompromised luxury in the Himalayan forest.",

      image: "/andrew-villa/Suite-Bedroom-2.png",
    },

    aboutUsData: {
      title:
        "Mussoorie's most exclusive private villa — a sanctuary of uncompromised luxury in the Himalayan forest.",
      description:
        "Andrew's Villa is EBC Mussoorie's most exclusive accommodation — a fully private villa experience at the edge of the deodar forest. With its own entrance, private bonfire terrace, and panoramic Himalayan views, the Villa is designed for those who want the mountain entirely to themselves.",
      image: "/andrew-villa/Suite-Bedroom-2.png",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Private Entrance & Terrace",
        },
        {
          icon: "✦",
          title: "Private Bonfire Area",
        },
        {
          icon: "✦",
          title: "Luxury King Bedroom",
        },
        {
          icon: "✦",
          title: "Premium En-suite Bathroom",
        },
        {
          icon: "✦",
          title: "Himalayan Panoramic Views",
        },
        {
          icon: "✦",
          title: "In-room Breakfast Service",
        },
        {
          icon: "✦",
          title: "Air Conditioning & Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge Support",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "Honeymoon & Anniversary",
        "Special Occasions",
        "Corporate Executive Stay",
        "Intimate Romantic Escape",
      ],

      pricingTitle: "Pricing",

      pricing: "₹20,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        "/andrew-villa/Suite-Bedroom-2.png",
        "/andrew-villa/Suite-Bedroom-3.png",
        "/andrew-villa/Suite-Bedroom-4.png",
        "/andrew-villa/Suite-Bedroom-6.png",
        "/andrew-villa/Suite-Bedroom-7.png",
        "/andrew-villa/Suite-Bedroom-5.png",
      ],
    },
  },
  {
    slug: "twin-luxury-cottages",

    metaData: {
      title: "Twin Luxury Cottages | EBC Mussoorie",
      description:
        "Dual luxury cottages with panoramic Himalayan views — perfect for families or two couples travelling together.",
    },

    banner: {
      title: "Twin Luxury Cottages",
      subTitle: "Luxury Cottages",
      price: "From ₹20,000 per cottage per night · Breakfast included",
      description:
        "Dual luxury cottages with panoramic Himalayan views — perfect for families or two couples travelling together.",

      image: "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
    },

    aboutUsData: {
      title: "Twin Luxury Cottages",
      description:
        "The Twin Luxury Cottages are EBC Mussoorie's newest addition — two beautifully appointed cottages that can be booked individually or together. With matching premium interiors and a shared garden terrace, they are ideal for larger families or two couples who want the intimacy of a cottage without sacrificing space.",
      image: "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Two Interconnected Luxury Cottages",
        },
        {
          icon: "✦",
          title: "Shared Garden Terrace",
        },
        {
          icon: "✦",
          title: "Two King Bedrooms",
        },
        {
          icon: "✦",
          title: "Two En-suite Bathrooms",
        },
        {
          icon: "✦",
          title: "Himalayan Views from Both Cottages",
        },
        {
          icon: "✦",
          title: "In-room Breakfast Service",
        },
        {
          icon: "✦",
          title: "Air Conditioning & Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge Support",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "Families with Teenagers",
        "Two Couples Travelling Together",
        "Multi-generational Family Stays",
        "Extended Weekend Escapes",
      ],

      pricingTitle: "Pricing",

      pricing: "₹20,000 / night",

      pricingSubTitle: "per cottage per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-3.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-4.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-6.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-7.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-5.png",
      ],
    },
  },
  {
    slug: "zenith-luxury-cottage",

    metaData: {
      title: "The Zenith | EBC Mussoorie",
      description:
        "The signature luxury cottage in the forest — EBC's original icon of Himalayan glamping.",
    },

    banner: {
      title: "Zenith Luxury Cottage",
      subTitle: "Signature Cottage",
      price: "From ₹18,000 per night · Breakfast included",
      description:
        "The signature luxury cottage in the forest — EBC's original icon of Himalayan glamping.",

      image: "/family-stays/FamilyStayImage.jpg",
    },

    aboutUsData: {
      title: "Zenith Luxury Cottage",
      description:
        "The Zenith is the accommodation that put EBC Mussoorie on the map. A freestanding luxury cottage nestled within the deodar forest, it combines premium interiors with an immersive forest setting. Wake up to birdsong, step onto the veranda to morning mist over the mountains, and end the day by a bonfire under the stars.",
      image: "/The Zenith/RoomImage1.jpg",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Freestanding Forest Cottage",
        },
        {
          icon: "✦",
          title: "Private Veranda",
        },
        {
          icon: "✦",
          title: "Luxury King Bedroom",
        },
        {
          icon: "✦",
          title: "Premium En-suite Bathroom",
        },
        {
          icon: "✦",
          title: "Panoramic Forest & Mountain Views",
        },
        {
          icon: "✦",
          title: "Breakfast on the Veranda",
        },
        {
          icon: "✦",
          title: "Air Conditioning & Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge Support",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "Couples & Honeymoon",
        "Anniversary Celebrations",
        "Solo Luxury Retreat",
        "First-time Glamping Experience",
      ],

      pricingTitle: "Pricing",

      pricing: "₹18,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        landingpageImgSrc + "zenith/DSC04996-HDR-2.webp",
        landingpageImgSrc + "zenith/DSC04953-HDR-2.webp",
        landingpageImgSrc + "zenith/DJI_0763.webp",
        landingpageImgSrc + "zenith/DSC05021.webp",
        landingpageImgSrc + "zenith/DSC05055.webp",
      ],
    },
  },
  {
    slug: "the-surveyor-suite",

    metaData: {
      title: "The Surveyor | EBC Mussoorie",
      description:
        "Premium glamping with forest canopy views — a step into the wild without leaving luxury behind.",
    },

    banner: {
      title: "Premium Glamping",
      subTitle: "The Surveyor Suite",
      price: "From ₹14,000 per night · Breakfast included",
      description:
        "Premium glamping with forest canopy views — a step into the wild without leaving luxury behind.",

      image: "/The Surveyor/RoomImage1.jpg",
    },

    aboutUsData: {
      title: "The Surveyor Suite",
      description:
        "The Surveyor is a premium glamping unit positioned deep in the forest canopy. Designed for guests who want to feel truly immersed in the Himalayan forest while maintaining every modern comfort. The Surveyor strikes the perfect balance between adventure and luxury.",
      image: "/The Surveyor/RoomImage1.jpg",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Forest Canopy Position",
        },
        {
          icon: "✦",
          title: "Private Deck",
        },
        {
          icon: "✦",
          title: "Queen/King Bedroom",
        },
        {
          icon: "✦",
          title: "En-suite Bathroom",
        },
        {
          icon: "✦",
          title: "Forest & Mountain Views",
        },
        {
          icon: "✦",
          title: "In-room Breakfast",
        },
        {
          icon: "✦",
          title: "Heating & Cooling",
        },
        {
          icon: "✦",
          title: "24hr Concierge",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "Nature-seeking Couples",
        "Adventure Travellers",
        "Forest Immersion Stays",
        "Weekend Escapes from Delhi",
      ],

      pricingTitle: "Pricing",

      pricing: "₹14,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        landingpageImgSrc + "surveyor-new/DSC_6442.webp",
        landingpageImgSrc + "surveyor-new/DSC_6610.webp",
        landingpageImgSrc + "surveyor-new/DSC_6458.webp",
        landingpageImgSrc + "surveyor-new/IMG_4177.webp",
        landingpageImgSrc + "surveyor-new/DSC05333.JPG.webp",
      ],
    },
  },
  {
    slug: "the-surveyor",

    metaData: {
      title: "Surveyor Suite | EBC Mussoorie",
      description:
        "Spacious suite with private sit-out — generous space for those who want room to breathe.",
    },

    banner: {
      title: "The Surveyor",
      subTitle: "Suite",
      price: "From ₹16,000 per night · Breakfast included",
      description:
        "Spacious suite with private sit-out — generous space for those who want room to breathe.",

      image: "/Surveyor Suite/RoomImage1.jpg",
    },

    aboutUsData: {
      title: "The Surveyor",
      description:
        "The Surveyor Suite is EBC's most generous in terms of living space. A premium suite with a large private sit-out terrace, it combines the comfort of a luxury hotel suite with the intimacy of a forest retreat. Ideal for guests who value space as much as setting.",
      image: "/Surveyor Suite/RoomImage1.jpg",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Large Private Sit-out Terrace",
        },
        {
          icon: "✦",
          title: "Spacious Suite Layout",
        },
        {
          icon: "✦",
          title: "Luxury King Bedroom",
        },
        {
          icon: "✦",
          title: "Premium En-suite Bathroom",
        },
        {
          icon: "✦",
          title: "Forest Views",
        },
        {
          icon: "✦",
          title: "In-room Breakfast Service",
        },
        {
          icon: "✦",
          title: "Air Conditioning & Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge Support",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "Couples Seeking Space",
        "Extended Stays",
        "Work-from-Mountain Escapes",
        "Comfortable Family Stays",
      ],

      pricingTitle: "Pricing",

      pricing: "₹16,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        landingpageImgSrc + "surveyor_suite/img2.webp",
        imgSrc + "room/surveyor-suite/img3.webp",
        landingpageImgSrc + "surveyor_suite/img1.webp",
        landingpageImgSrc + "surveyor_suite/img3.webp",
        imgSrc + "room/surveyor-suite/img4.webp",
      ],
    },
  },
  {
    slug: "the-camper",

    metaData: {
      title: "The Camper | EBC Mussoorie",
      description:
        "The perfect forest glamping introduction — pure, elemental, and utterly memorable.",
    },

    banner: {
      title: "The Camper",
      subTitle: "Forest Glamping",
      price: "From ₹10,000 per night · Breakfast included",
      description:
        "The perfect forest glamping introduction — pure, elemental, and utterly memorable.",

      image: "/The Camper/RoomImage1.jpg",
    },

    aboutUsData: {
      title: "The Camper",
      description:
        "The Camper is the entry point into the EBC Mussoorie experience — and it is anything but ordinary. A compact, beautifully designed glamping unit that puts you directly in the forest, The Camper is perfect for those discovering glamping for the first time or travelling on a more considered budget without compromising on the EBC experience.",
      image: "/The Camper/RoomImage1.jpg",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Forest Setting",
        },
        {
          icon: "✦",
          title: "Double Bed",
        },
        {
          icon: "✦",
          title: "Attached Bathroom",
        },
        {
          icon: "✦",
          title: "Forest Views",
        },
        {
          icon: "✦",
          title: "Breakfast Included",
        },
        {
          icon: "✦",
          title: "Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "First-time Glampers",
        "Budget-conscious Luxury",
        "Solo Travellers",
        "Short Weekend Trips",
      ],

      pricingTitle: "Pricing",

      pricing: "₹10,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        landingpageImgSrc + "camper/img1.webp",
        landingpageImgSrc + "camper/img3.webp",
        imgSrc + "room/camper/img4.webp",
        landingpageImgSrc + "camper/img2.webp",
        imgSrc + "room/camper/img3.webp",
      ],
    },
  },
  {
    slug: "the-glamper",

    metaData: {
      title: "The Glamper | EBC Mussoorie",
      description:
        "Luxury tented glamping experience — the romance of a tent with every modern comfort within.",
    },

    banner: {
      title: "The Glamper",
      subTitle: "Luxury Tent",
      price: "From ₹12,000 per night · Breakfast included",
      description:
        "Luxury tented glamping experience — the romance of a tent with every modern comfort within.",

      image: "/The Glamper/RoomImage1.jpg",
    },

    aboutUsData: {
      title: "The Glamper",
      description:
        "The Glamper is the quintessential glamping experience — a luxury tent that combines the magical feeling of sleeping in canvas under the stars with a fully appointed interior. Plush beds, proper bathrooms, and thoughtful details make this the tent that converts even the most dedicated hotel-goer.",
      image: "/The Glamper/RoomImage1.jpg",

      links: [
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
        {
          label: "Book Now",
          href: bookingLink,
        },
      ],
    },

    roomsFeatures: {
      title: "Room Features",

      featuresCards: [
        {
          icon: "✦",
          title: "Luxury Canvas Tent",
        },
        {
          icon: "✦",
          title: "Private Deck",
        },
        {
          icon: "✦",
          title: "Comfortable Double Bed",
        },
        {
          icon: "✦",
          title: "Attached Bathroom",
        },
        {
          icon: "✦",
          title: "Forest Views",
        },
        {
          icon: "✦",
          title: "Breakfast Included",
        },
        {
          icon: "✦",
          title: "Heating",
        },
        {
          icon: "✦",
          title: "24hr Concierge",
        },
        {
          icon: "✦",
          title: "Free Wi-Fi",
        },
        {
          icon: "✦",
          title: "Free Parking",
        },
      ],
    },

    perfectForData: {
      title: "Perfect For",

      points: [
        "First-time Glampers",
        "Romantic Weekend Breaks",
        "Adventure-curious Travellers",
        "Young Couples",
      ],

      pricingTitle: "Pricing",

      pricing: "₹12,000 / night",

      pricingSubTitle: "per night · Breakfast included",

      pricingPoints: [
        "Breakfast for two (or per person for solo bookings)",
        "Evening bonfire access (shared communal bonfire)",
        "Morning guided nature walk",
        "Free Wi-Fi throughout the property",
        "Free secure parking",
      ],

      images: [
        landingpageImgSrc + "glamper/img1.webp",
        landingpageImgSrc + "glamper/img3.webp",
        imgSrc + "room/glamper/img1.webp",
        landingpageImgSrc + "glamper/img2.webp",
        landingpageImgSrc + "glamper/img4.webp",
      ],
    },
  },
];
