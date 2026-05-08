import { bookingLink } from "@/utils/constant";

export const packagesPageData = {
  hero: {
    subtitle: "Transparent Pricing",
    title: "Packages & Pricing | EBC Mussoorie",
    description:
      "Full pricing for all seven EBC Mussoorie accommodations. No hidden fees — what you see is what you pay.",
  },

  roomPricingSection: {
    title: "Room Pricing",
    roomPricing: [
      {
        accommodation: "Andrew's Villa",
        category: "Flagship Villa",
        price: "₹20,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "Twin Luxury Cottages",
        category: "Luxury Cottages",
        price: "₹20,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "The Zenith",
        category: "Signature Cottage",
        price: "₹18,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "Surveyor Suite",
        category: "Suite",
        price: "₹16,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "The Surveyor",
        category: "Premium Glamping",
        price: "₹14,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "The Glamper",
        category: "Luxury Tent",
        price: "₹12,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        accommodation: "The Camper",
        category: "Forest Glamping",
        price: "₹10,000",
        included: "Breakfast, bonfire, nature walk, 24hr support",
        button: {
          label: "Book Now",
          href: bookingLink,
        },
      },
    ],
  },

  alwaysIncluded: [
    "Breakfast for two (or per person for solo bookings)",
    "Evening bonfire access (shared communal bonfire)",
    "Morning guided nature walk",
    "Free Wi-Fi throughout the property",
    "Free secure parking",
    "24hr concierge & guest support",
    "Welcome refreshments on arrival",
  ],

  seasonalPricingNotes: [
    {
      title: "Peak Season (Dec–Jan, May–Jun)",
      description: `Peak Season (Dec–Jan, May–Jun): Prices at upper
end of range. Advance booking strongly
recommended.`,
    },
    {
      title: "Shoulder Season (Mar–Apr, Oct–Nov)",
      description: `Shoulder Season (Mar–Apr, Oct–Nov): Best weather
and best value. Our most recommended period.`,
    },
    {
      title: "Monsoon Season (Jul–Sept)",
      description: `Monsoon Season (Jul–Sept): Lush, atmospheric,
and our quietest period. Special rates sometimes
available on request.`,
    },
    {
      title: "Weekend surcharge",
      description: `Weekend surcharge: ₹1,000–₹2,000 may apply on
Friday/Saturday nights. Confirm at time of booking.`,
    },
  ],

  addOns: [
    {
      title: "Candlelit Private Dinner",
      price: "₹3,000",
      description: "For two guests, set up at your cottage",
    },
    {
      title: "Sunset Photography Walk",
      price: "₹2,000",
      description: "With our resident naturalist, 1.5 hours",
    },
    {
      title: "Packed Lunch for Day Trips",
      price: "₹800 per person",
      description: "Garhwali-style packed lunch",
    },
    {
      title: "Private Bonfire (exclusive, not shared)",
      price: "₹1,500",
      description: "Set up exclusively for your accommodation",
    },
    {
      title: "Stargazing Session",
      price: "₹1,000",
      description: "Guided session with star charts, ~1 hour",
    },
    {
      title: "Early Check-in (before 2pm)",
      price: "Subject to availability",
      description: "Request at time of booking",
    },
    {
      title: "Late Check-out (after 11am)",
      price: "Subject to availability",
      description: "Request at time of booking",
    },
  ],

  bookingAndCancellationPolicy: {
    title: "Booking & Cancellation Policy",
    booking: [
      "30% advance required to confirm booking.",
      "Balance due on check-in.",
      "All bookings confirmed via WhatsApp.",
    ],

    cancellation: [
      "7+ days before arrival: Full refund",
      "3–7 days before arrival: 50% charge",
      "Less than 3 days: No refund",
      "Date changes subject to availability — please contact us early",
    ],
  },

  contact: {
    title: "Book via WhatsApp",
    description:
      "Luxury glamping on Hathipaon Road, Mussoorie — where the Himalayas meet the stars.",
    address: "Park Estate, Hathipaon Road, Mussoorie, Uttarakhand 248179",
    phone: "+91 91190 01126",
    email: "info@ebcmussoorie.com",
  },
};
