import { bookingLink, contacts } from "@/utils/constant";

export const familyStayPageData = {
  bannerData: {
    title: "Family Stays",
    subTitle: `Family Stays & Holiday Packages | EBC Mussoorie`,
    description: "The screen-free nature holiday families talk about for years",
    image: "/family-stays/familybnr.png",
  },
  familyStaySection: {
    title: "For Families",
    subTitle: `A Holiday That Stays With Them`,
    description: [
      "Children who have grown up visiting EBC Mussoorie remember it as the place where they first saw the Milky Way, found a leopard pugmark, and sat around a real fire telling stories. These are not small memories. EBC is a safe, enclosed, family-friendly property where children can roam freely within the grounds while parents actually relax.",
    ],
    image: "/family-stays/FamilyStayImage.jpg",
  },

  whyFamilyLoveEbcSection: {
    title: "Why Families Love EBC",
    cards: [
      {
        id: 1,
        title: "Safe & Enclosed",
        description: `The EBC grounds are fully secured,
allowing children to explore safely
without supervision at every
moment.`,
        icon: "🔒",
      },

      {
        id: 2,
        title: "Kid-Friendly Activities",
        description: `Bonfire story nights, morning bird
walks, nature scavenger hunts,
stargazing — activities designed for
curious minds of all ages.`,
        icon: "🌿",
      },

      {
        id: 3,
        title: "Spacious Accommodations",
        description: `The Twin Cottages and Andrew's Villa offer the most space for families. Interconnecting arrangements available on request.`,
        icon: "🏠",
      },

      {
        id: 4,
        title: "Screen-Free Nature Immersion",
        description: `Children rediscover the outdoors —
no screens, just forest, birdsong
and fresh mountain air.`,
        icon: "🌲",
      },
    ],
  },

  activitiesSection: {
    title: "Activities for Kids",
    cards: [
      {
        id: 1,
        title: "Bonfire Story Nights",
        description: `Gather around the fire for stories — from
Garhwali folk tales to constellations
overhead.`,
        icon: "🔥",
      },

      {
        id: 2,
        title: "Morning Bird Walks",
        description: `Children are natural birders — spotting
Himalayan species with enthusiasm that
surprises even the adults.`,
        icon: "🕊️",
      },

      {
        id: 3,
        title: "Nature Scavenger Hunts",
        description: `Guided forest discovery activities designed
to make young guests genuine naturalists.`,
        icon: "🔍",
      },

      {
        id: 4,
        title: "Stargazing & Constellation Spotting",
        description: `The night sky at EBC is a natural planetarium
— children love identifying constellations.`,
        icon: "✦",
      },

      {
        id: 5,
        title: "Forest Leaf & Track Identification",
        description: `Learn to identify deodar, oak and
rhododendron, and spot animal tracks in the
morning dew.`,
        icon: "🌿",
      },

      {
        id: 6,
        title: "Junior Nature Photography",
        description: `Our team introduces children to the basics of
nature photography in the forest.`,
        icon: "📸",
      },
    ],
  },

  familyRoomSection: {
    title: "Best Rooms for Families",
    cards: [
      {
        id: 1,
        badge: "Luxury Cottages",
        title: "Twin Luxury Cottages",
        description: `Dual luxury cottages with panoramic
Himalayan views — perfect for families or two
couples travelling together.`,
        price: "From ₹20,000 / night",
        secondaryButton: {
          label: "Book for Family",
          href: bookingLink,
        },
        image: "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
      },
      {
        id: 2,
        badge: "Flagship Villa",
        title: "The Andrew's Villa",
        description: `Mussoorie's most exclusive private villa — a
sanctuary of uncompromised luxury in the
Himalayan forest.`,
        price: "From ₹20,000 / night",
        secondaryButton: {
          label: "Book for Family",
          href: bookingLink,
        },
        image: "/andrew-villa/Suite-Bedroom-2.png",
      },
      {
        id: 3,
        badge: "Signature Cottage",
        title: "Zenith Luxury Cottage",
        description: `The signature luxury cottage in the forest —
EBC's original icon of Himalayan glamping.`,
        price: "From ₹18,000 / night",
        secondaryButton: {
          label: "Book for Family",
          href: bookingLink,
        },
        image: "/The Zenith/RoomImage1.jpg",
      },
    ],
  },
  testimonialSection: [
    {
      name: "Kunal Dhruv",
      message: `A Dreamlike Retreat in Nature’s Embrace

We had an unforgettable 2-night stay at this extraordinary property with my wife, in-laws, and our small dog. The sprawling estate offered a true sense of freedom, with stunning trails that allowed us to reconnect with nature and ourselves. The serene isolation was perfectly complemented by flawless amenities—no issues with electricity or water, and the high-quality geysers made quick showers a delight.

The space itself felt like a dream come true, blending rustic charm with modern comforts. The food was exceptional, and the staff’s outstanding training and warmth elevated our experience to another level. Every detail was thoughtfully curated, making this our best holiday ever. We left feeling refreshed and already planning our next visit.

Highly recommended for anyone seeking a perfect blend of luxury and nature!`,
      designation: "Google Review",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "CA Mayank Chawla",
      message: `The reservation team is very supportive, co-operative & friendly. I had to cancel & re-schedule couple of times due to last minute health issues, the reservation team accepted my plea for re-scheduling at the very last minute both the times (which most reject) & gave me time to re-schedule at my own convenience, how can one expect anymore than this.

This gesture by the reservation team really made me feel valued & made me share this review because they truly deserve it.`,
      designation: "Google Review",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "Pranit Verma",
      message: `We had a wonderful stay at EBC in Mussoorie. The property is excellent beautifully done, well-appointed rooms, and extremely comfortable.

The staff is warm, friendly, and attentive, and everything is very well organised, including the thoughtfully planned treks.

A special mention to the food the specially organised BBQs and bonfires make the evenings truly memorable.

Overall, a fantastic luxury glamping experience and highly recommended.`,
      designation: "Google Review",
      reviews: {
        rating: 5,
      },
    },
  ],
  ctaData: {
    title: "",
    subtitle: "Plan Your Family Stay",
    description: [
      "WhatsApp us to discuss room configurations and the best setup for your family group.",
    ],
    actions: [
      { label: "Book Family Stay via WhatsApp", href: contacts.WhatsAppCta },
      {
        label: "Book Now",
        href: bookingLink,
      },
    ],
  },
};
