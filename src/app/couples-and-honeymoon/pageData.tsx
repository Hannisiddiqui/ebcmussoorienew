import { bookingLink } from "@/utils/constant";

export const couplesAndHoneymoonPageData = {
  bannerData: {
    title: "Couples & Honeymoon",
    subTitle: `Romantic Getaway & Honeymoon Packages in Mussoorie`,
    description: "The Himalayan escape couples return to, year after year",
    image: "/family-stays/bnr.png",
  },

  familyStaySection: {
    title: "Romance at Altitude",
    subTitle: `Romance at Altitude`,
    description: [
      "There is something about a Himalayan night that makes everything more vivid — the stars brighter, the silence deeper, the warmth of a bonfire more meaningful. EBC Mussoorie has been the setting for hundreds of romantic firsts: first mornings after engagement, honeymoon nights, anniversary surprises, and simple escapes that remind couples why they chose each other.",
    ],
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
        title: "The Surveyor",
        description: `Spacious suite with private sit-out —
generous space for those who want room to
breathe.`,
        price: "From ₹16,000 / night",
        primaryButton: {
          label: "View Details",
          href: "/rooms/the-surveyor",
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
      name: "Udit Kumar",
      message: `Luxury Stay with Exceptional Hospitality – Everest Base Camp, Mussoorie

Everest Base Camp Mussoorie is hands down one of the best luxury stays in Mussoorie, and that's not an exaggeration. From the moment you arrive, you're treated with a level of hospitality that most hotels only claim to offer.

The rooms are spacious, immaculately clean, and thoughtfully designed, blending comfort with a premium mountain-retreat feel. The views are stunning, the ambience is calm, and the overall experience feels exclusive without being pretentious. If you're looking for a luxury hotel in Mussoorie with peace, privacy, and class, this place delivers.

Now the food—absolutely impressive. The quality, taste, and presentation are at par with top-tier hotels. Every meal felt well thought out, fresh, and satisfying. Whether you're having breakfast or a full meal, the dining experience adds real value to your stay. This is not generic hotel food—it's refined, comforting, and consistently good.

What truly sets Everest Base Camp apart is the hospitality and service. The staff is warm, professional, and genuinely attentive. They don't just respond—they anticipate. Every request is handled with care and a smile, making you feel valued rather than "processed" like in many commercial hotels.

If you're planning a luxury getaway in Mussoorie, a romantic stay, a family vacation, or even a peaceful workation, Everest Base Camp Mussoorie is a solid choice. It strikes the rare balance between comfort, elegance, great food, and heartfelt hospitality.

Highly recommended for anyone looking for a premium hotel experience in Mussoorie. This is how hospitality should be done.`,
      designation: "Google Review",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "Pradeep S",
      message: `Wonderful stay at EBC

Wonderful experience here at EBC. Polite staff & hospitality is very good here. Come here for peaceful vibes.

Neeraj & sahil they are always ready to help.`,
      designation: "Tripadvisor Review",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "Arjun Shah",
      message: `A piece of paradise

My wife and I visited EBC this weekend and left with our hearts full of happiness and gratitude. The team truly did not leave a single stone unturned in ensuring our stay was comfortable. The hospitality was exceptional, warm and deeply attentive.

The food was outstanding, with the evening BBQ being a must have. There was something incredibly special about sharing a meal under the starry sky surrounded by nature. The property itself is breathtaking-serene, blissful and radiating with peace. One of the most magical highlights was discovering a hidden trail from where a 30 mins hike leads to the most spectacular sunset point. It was, without exaggeration, one of the most stunning sunsets I've witnessed anywhere in the world.

A special mention to Swastik, who went above and beyond to ensure our stay was perfect.

EBC is not just a place to stay, it's a place to feel, to slow down and to reconnect. We just left and are already looking forward to when we will return next.`,
      designation: "Tripadvisor Review",
      reviews: {
        rating: 5,
      },
    },
  ],
};
