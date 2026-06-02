import { bookingLink, contacts, imgSrc, landingpageImgSrc } from "@/utils/constant";

export const roomPageDataNew = {
  banner: {
    subTitle: "Our Rooms & Accommodations | EBC Mussoorie",
    title: "Accommodations",
    description:
      "Fourteen unique stays across the spectrum of luxury — each one a different relationship with the Himalayan forest.",
    images: ["/rooms/room1.png", "/rooms/room2.png"],
  },

  rooms: [
    {
      category: "Flagship Villa",

      title: "The Andrew's Villa",

      description: [
        "Andrew's Villa is EBC Mussoorie's most exclusive accommodation — a fully private villa experience at the edge of the deodar forest.",
        "With its own entrance, private bonfire terrace, and panoramic Himalayan views, the Villa is designed for those who want the mountain entirely to themselves.",
      ],

      features: [
        "Private Entrance & Terrace",
        "Private Bonfire Area",
        "Luxury King Bedroom",
        "Premium En-suite Bathroom",
        "Himalayan Panoramic Views",
        "In-room Breakfast Service",
      ],

      price: "From ₹20,000 / night",

      images: [
        "/andrew-villa/Suite-Bedroom-2.png",
        "/andrew-villa/Suite-Bedroom-3.png",
        "/andrew-villa/Suite-Bedroom-4.png",
        "/andrew-villa/Suite-Bedroom-5.png",
        "/andrew-villa/Suite-Bedroom-6.png",
        "/andrew-villa/Suite-Bedroom-7.png",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/the-andrews-villa/",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Luxury Cottages",

      title: "Twin Luxury Cottages",

      description: [
        "The Twin Luxury Cottages are EBC Mussoorie's newest addition — two beautifully appointed cottages that can be booked individually or together.",
        "With matching premium interiors and a shared garden terrace, they are ideal for larger families or two couples who want the intimacy of a cottage without sacrificing space.",
      ],

      features: [
        "Two Interconnected Luxury Cottages",
        "Shared Garden Terrace",
        "Two King Bedrooms",
        "Two En-suite Bathrooms",
        "Himalayan Views from Both Cottages",
        "In-room Breakfast Service",
      ],

      price: "From ₹20,000 / night",

      images: [
        "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-3.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-4.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-5.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-6.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-7.png",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/twin-luxury-cottages",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Signature Cottage",

      title: "Zenith Luxury Cottage",

      description: [
        "The Zenith is the accommodation that put EBC Mussoorie on the map. A freestanding luxury cottage nestled within the deodar forest, it combines premium interiors with an immersive forest setting.",
        "Wake up to birdsong, step onto the veranda to morning mist over the mountains, and end the day by a bonfire under the stars.",
      ],

      features: [
        "Freestanding Forest Cottage",
        "Private Veranda",
        "Luxury King Bedroom",
        "Premium En-suite Bathroom",
        "Panoramic Forest & Mountain Views",
        "Breakfast on the Veranda",
      ],

      price: "From ₹18,000 / night",

      images: ["/The Zenith/RoomImage1.jpg"],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/zenith-luxury-cottage/",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Suite",

      title: "The Surveyor",

      description: [
        "The Surveyor Suite is EBC's most generous in terms of living space.",
        "A premium suite with a large private sit-out terrace, it combines the comfort of a luxury hotel suite with the intimacy of a forest retreat. Ideal for guests who value space as much as setting.",
      ],

      features: [
        "Large Private Sit-out Terrace",
        "Spacious Suite Layout",
        "Luxury King Bedroom",
        "Premium En-suite Bathroom",
        "Forest Views",
        "In-room Breakfast Service",
      ],

      price: "From ₹16,000 / night",

      images: [
        landingpageImgSrc + "surveyor_suite/img2.webp",
        imgSrc + "room/surveyor-suite/img3.webp",
        landingpageImgSrc + "surveyor_suite/img1.webp",
        landingpageImgSrc + "surveyor_suite/img3.webp",
        imgSrc + "room/surveyor-suite/img4.webp",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/the-surveyor",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Premium Glamping",

      title: "The Surveyor Suite",

      description: [
        "The Surveyor is a premium glamping unit positioned deep in the forest canopy.",
        "Designed for guests who want to feel truly immersed in the Himalayan forest while maintaining every modern comfort. The Surveyor strikes the perfect balance between adventure and luxury.",
      ],

      features: [
        "Forest Canopy Position",
        "Private Deck",
        "Queen/King Bedroom",
        "En-suite Bathroom",
        "Forest & Mountain Views",
        "In-room Breakfast",
      ],

      price: "From ₹14,000 / night",

      images: [
        landingpageImgSrc + "surveyor-new/DSC_6610.webp",
        landingpageImgSrc + "surveyor-new/DSC_6442.webp",
        landingpageImgSrc + "surveyor-new/DSC_6458.webp",
        landingpageImgSrc + "surveyor-new/IMG_4177.webp",
        landingpageImgSrc + "surveyor-new/DSC05333.JPG.webp",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/the-surveyor-suite/",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Luxury Tent",

      title: "The Glamper",

      description: [
        "The Glamper is the quintessential glamping experience — a luxury tent that combines the magical feeling of sleeping in canvas under the stars with a fully appointed interior.",
        "Plush beds, proper bathrooms, and thoughtful details make this the tent that converts even the most dedicated hotel-goer.",
      ],

      features: [
        "Luxury Canvas Tent",
        "Private Deck",
        "Comfortable Double Bed",
        "Attached Bathroom",
        "Forest Views",
        "Breakfast Included",
      ],

      price: "From ₹12,000 / night",

      images: [
        landingpageImgSrc + "glamper/img1.webp",
        landingpageImgSrc + "glamper/img3.webp",
        imgSrc + "room/glamper/img1.webp",
        landingpageImgSrc + "glamper/img2.webp",
        landingpageImgSrc + "glamper/img4.webp",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/the-glamper",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },

    {
      category: "Forest Glamping",

      title: "The Camper",

      description: [
        "The Camper is the entry point into the EBC Mussoorie experience — and it is anything but ordinary.",
        "A compact, beautifully designed glamping unit that puts you directly in the forest, The Camper is perfect for those discovering glamping for the first time or travelling on a more considered budget without compromising on the EBC experience.",
      ],

      features: [
        "Forest Setting",
        "Double Bed",
        "Attached Bathroom",
        "Forest Views",
        "Breakfast Included",
        "Heating",
      ],

      price: "From ₹10,000 / night",

      images: [
        landingpageImgSrc + "camper/img1.webp",
        landingpageImgSrc + "camper/img3.webp",
        imgSrc + "room/camper/img4.webp",
        landingpageImgSrc + "camper/img2.webp",
        imgSrc + "room/camper/img3.webp",
      ],

      buttons: [
        {
          label: "Full Details",
          href: "/rooms/the-camper",
        },
        {
          label: "Book via WhatsApp",
          href: contacts.WhatsAppCta,
        },
      ],
    },
  ],
};
