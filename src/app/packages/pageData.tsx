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
    // "24hr concierge & guest support",
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
//     {
//       title: "Weekend surcharge",
//       description: `Weekend surcharge: ₹1,000–₹2,000 may apply on
// Friday/Saturday nights. Confirm at time of booking.`,
//     },
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
    // {
    //   title: "Stargazing Session",
    //   price: "₹1,000",
    //   description: "Guided session with star charts, ~1 hour",
    // },
    {
      title: "Early Check-in (before 2pm)",
      price: "Subject to availability",
      description: "Request at time of booking",
    },
    {
      title: "Late Check-out (after 10:30 am)",
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

  termsAndConditionsData: {
    title: "Terms & Conditions",
    policies: [
      {
        question: "Conclusion of the Contract",
        answer: [
          "The contract between the guest and Base Camp Hospitality (Everest Base Camp Mussoorie) shall be applicable on receipt of written confirmation of the reservation whether this has been sent by letter or e-mail.",
          "The services provided are based on the description contained in our brochure and / or on our website.",
        ],
      },
      {
        question: "Prices ",
        answer: [
          "All prices are in Indian Rupees and are exclusive of applicable GST/taxes",
        ],
      },
      {
        question: "Terms of Payment",
        answer: [
          "A 100% advance payment is required at the time of confirmation of the booking. The advance payment shall be equivalent to the total accommodation charges on a per-person basis or as otherwise specified at the time of reservation.",
          "Bookings shall be confirmed only upon receipt of the required advance payment. Everest Base Camp does not hold or guarantee room inventory without advance payment, irrespective of any prior communication or tentative discussion.",
          "If the required payment is not received within the stipulated timeline, Everest Base Camp reserves the right to cancel the reservation and apply applicable cancellation charges in accordance with Section 4 of the booking terms.",
          "Bank Details",
          "Account Name: Base Camp Hospitality",
          "Address: 48, Dispensary Road (also known as 136/74, Ajmal Khan Road), Dehradun, Uttarakhand – 248001",
          "Bank Name: HDFC Bank",
          "Branch: 56 Rajpur Road, Dehradun – 248001",
          "Account Type: Current Account",
          "Account Number: 50200046651725",
          "IFSC Code: HDFC0000225",
        ],
      },
      {
        question: "Cancellations",
        answer: [
          "1. Cancellation/Change of Dates:",
          "Cancellation or change of dates within 14 days of the arrival date is not possible. Bookings cancelled within 14 days of check-in are completely non-refundable.",
          "2. Change of Dates Before 14 Days:",
          "Guests can request to change their booking dates before 14 days of the original booking date. Such requests will be accommodated subject to availability.",
          "As for cancellation of the booking before 14 days of check-in, we shall provide a credit note for the advance payment made, which can be redeemed for a future booking with us.",
          "3. Refund Policy:",
          "Please understand that due to our limited inventory of rooms, refunds are not available for cancelled bookings",
          "In the event of a natural calamity or unforeseen circumstances beyond control, guests are offered the option to reschedule their booking. We shall provide a credit note for the advance payment made which can be redeemed for a future booking with us. However, refunds will not be provided.",
        ],
      },
      {
        question: "Delayed Check-in & Early Check-out",
        answer: [
          "Arrival and departure timings and dates have to be adhered to by the guests. In case of late arrivals, whether due to disturbances in public or private transport or for personal reasons, the full room-price is payable.",
          "In the event of premature departure, the guest will be charged for the entire duration of confirmed booking.",
        ],
      },
      {
        question: "Check-in & Check-out timings",
        answer: [
          "Check-in timing is 2:00PM to 9:00PM. Check-out timing is 10:30PM.",
          "If your arrival is delayed beyond 6 pm, you are required to inform Everest Base Camp in advance to retain your booking for the day.",
        ],
      },
      {
        question: "Complaints",
        answer: [
          "In the rare event of any complaint, please notify Everest Base Camp manager, so that any problems, faults or errors can be resolved as quickly as possible.",
          "Please email to info@ebcmussoorie.com",
          "For all legal matters, the Indian laws are applicable. For any disputes, jurisdiction of courts of Dehradun will apply.",
        ],
      },
    ],
  },
};
