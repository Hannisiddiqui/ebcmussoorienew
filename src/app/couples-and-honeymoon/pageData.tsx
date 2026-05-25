import { bookingLink, contacts } from "@/utils/constant";

export const couplesAndHoneymoonPageData = {
  bannerData: {
    title: "Couples & Honeymoon",
    subTitle: `Romantic Getaway & Honeymoon Packages in Mussoorie`,
    description: "The Himalayan escape couples return to, year after year",
    image: "/corporate-and-mice/BannerImage.jpg",
  },

  familyStaySection: {
    title: "Romance at Altitude",
    subTitle: `Romance at Altitude`,
    description: `There is something about a Himalayan night that makes everything
more vivid — the stars brighter, the silence deeper, the warmth of a
bonfire more meaningful. EBC Mussoorie has been the setting for
hundreds of romantic firsts: first mornings after engagement,
honeymoon nights, anniversary surprises, and simple escapes that
remind couples why they chose each other.`,
    image: "/family-stays/FamilyStayImage.jpg",
  },

  romanticInclusionSection: {
    title: "Romantic Inclusions",

    subTitle: "Every couple's stay at EBC comes with these thoughtful touches",

    cards: [
      {
        id: 1,
        icon: "✦",
        title:
          "Private Bonfire Setup — exclusively for your cottage, every evening",
      },

      {
        id: 2,
        icon: "✦",
        title:
          "Candlelit Dinner Option — request at time of booking (+ ₹3,000)",
      },

      {
        id: 3,
        icon: "✦",
        title: "Stargazing Evening with constellation guide",
      },

      {
        id: 4,
        icon: "✦",
        title: "In-room/In-tent Breakfast Service",
      },

      {
        id: 5,
        icon: "✦",
        title: "Rose Petal Welcome Setup — on request, complimentary",
      },

      {
        id: 6,
        icon: "✦",
        title: "Sunset Photography Walk — accompanied by our naturalist",
      },
    ],
  },

  coupleRoomSection: {
    title: "Best Rooms for Couples",
    cards: [
      {
        id: 1,
        badge: "Flagship Villa",
        title: "The Andrew's Villa",
        description: `Mussoorie's most exclusive private villa — a
sanctuary of uncompromised luxury in the
Himalayan forest.`,
        price: "From ₹20,000 / night",
        primaryButton: {
          label: "View Details",
          href: "/rooms/the-andrews-villa",
        },

        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },

        image: "/family-stays/FamilyRoom2.png",
      },
      {
        id: 2,
        badge: "Signature Cottage",
        title: "Zenith Luxury Cottage",
        description: `The signature luxury cottage in the forest —
EBC's original icon of Himalayan glamping.`,
        price: "From ₹18,000 / night",
        primaryButton: {
          label: "View Details",
          href: "/rooms/zenith-luxury-cottage/",
        },

        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
        image: "/The Zenith/RoomImage1.jpg",
      },
      {
        id: 3,
        badge: "Suite",
        title: "Surveyor Suite",
        description: `Spacious suite with private sit-out —
generous space for those who want room to
breathe.`,
        price: "From ₹16,000 / night",
        primaryButton: {
          label: "View Details",
          href: "/rooms/surveyor-suite",
        },

        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
        image: "/Surveyor Suite/RoomImage1.jpg",
      },
    ],
  },

  testimonialSection: [
    {
      name: "— Meera S., Gurgaon",
      message: `Organised a 15-person corporate offsite here. The team loved it — bonfire, forest
walks, and the most peaceful meeting environment imaginable. We came back
more connected than any team-building workshop had ever achieved`,
      designation: "CEO",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "— Meera S., Gurgaon",
      message: `Organised a 15-person corporate offsite here. The team loved it — bonfire, forest
walks, and the most peaceful meeting environment imaginable. We came back
more connected than any team-building workshop had ever achieved`,
      designation: "CEO",
      reviews: {
        rating: 5,
      },
    },
  ],

};

