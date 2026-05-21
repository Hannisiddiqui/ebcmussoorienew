import blogData from "@/app/blogs/components/blogData";
import {
  bookingEngining,
  bookingLink,
  contacts,
  imgSrc,
  landingpageImgSrc,
  nearby,
} from "@/utils/constant";
import {
  CarDriveIcon,
  DistanceIcon,
  HotelIcon1,
  HotelIcon2,
  HotelIcon3,
  HotelIcon4,
  ManWalkingIcon,
} from "@/utils/homeIcons";
import { FillLocationIcon } from "@/utils/icons";
import {
  BirdWatchingIcon,
  BonfireIcon,
  ChefSpecialIcon,
  ForestViewIcon,
  ForestWalksIcon,
  HimalayanViewsIcon,
  PeopleIcon,
  SqFtIcon,
  StargazingIcon,
} from "@/utils/newIcon";

export const homePageData = {
  bannerData: {
    video: {
      src: "https://eazotel-client-webp-images.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/0408-2.mp4",
      poster: "/home/video-poster.png",
    },
    title: "Wake up in the Himalayas.",
    subtitle: "Sleep under the Stars.",
    description: [
      "An intimate luxury escape at 2,160m, where the forest meets the stars and every night ends by a private bonfire.",
    ],
    actions: { label: "EXPLORE ROOMS", href: "#rooms" },
    location: {
      label: "Hathipaon Road · Mussoorie · 2,160m",
      href: contacts.addresses[0].mapUrl,
      icon: <FillLocationIcon />,
    },
  },

  highlightData: {
    items: [
      "Private Bonfire Every Evening",
      "500+ Happy Stays",
      "2,160m Altitude",
      "14 Unique Accommodations",
      "Hathipaon Road, Mussoorie",
      "4.9/5★ TripAdvisor",
      "9.2/10★ Booking.com",
      "4.5/5★ Yatra",
      "4.6/5★ MakeMyTrip",
      "8.8/10★ Expedia",
      "4.5/5★ Cleartrip",
      "9.1/10★ Agoda",
    ],
  },

  PetFriendly: {
    title: ["Pet Friendly <i>Stays</i>", "at EBC <i>Mussoorie!</i>"],
    images: ["/home/pet-1.png", "/home/pet-2.png"],
  },
  partners: [
    {
      icon: <HotelIcon1 />,
      title: "4.9/5",
      src: "/partners/tripadvisor.png",
    },
    {
      icon: <HotelIcon2 />,
      title: "9.2/10",
      src: "/partners/booking.png",
    },
    {
      icon: <HotelIcon3 />,
      title: "4.6/5",
      src: "/partners/makemytrip.png",
    },
    {
      icon: <HotelIcon4 />,
      title: "8.8/10",
      src: "/partners/Expedia.png",
    },

    // {
    //   icon: <HotelIcon1 />,
    //   title: "4.5/5",
    //   src: "/partners/yatra.png",
    // },

    {
      icon: <HotelIcon2 />,
      title: "4.5/5",
      src: "/partners/cleartrip.png",
    },
    // {
    //   icon: <HotelIcon3 />,
    //   title: "9.1/10",
    //   src: "/partners/Agoda-Logo.png",
    // },
  ],

  introData: {
    title: "Everest Base Camp is a Luxury <i>Glamping</i> Resort!",
    description: [
      "“It embodies the legacy of Sir George Everest, a former Surveyor General of India, and is an ode to his adventures that unfolded in the charming town of Mussoorie",
    ],
    image: "/home/mountain.png",
  },

  ourStory: {
    title: "A Resort Born from the Mountain",
    subTitle: "Our Story",
    description: [
      "EBC Mussoorie was born out of a singular desire: to create a space where the Himalayan forest does the healing, and the luxury takes care of the rest. Nestled on Hathipaon Road at 2,000 metres, we sit within a pristine deodar forest where leopards tread at dawn and the night sky blazes with a thousand stars.",
      "We opened our doors in 2019 with a simple conviction — that the finest luxury is not found in city towers but in the hush of a forest morning, the warmth of a bonfire under open skies, and a bed that faces the mountains.",
      "Today, with fourteen distinct accommodations ranging from the tented Camper to the exclusive Andrew's Villa, EBC Mussoorie has become Mussoorie's most celebrated glamping destination.",
    ],
    link: {
      label: "DISCOVER OUR ROOMS",
      href: "/rooms/",
    },
    image: {
      src: "/home-about.png",
      alt: "Est. 2019",
    },
  },

  aboutData: {
    title: "About Everest Base Camp <i>Mussoorie!</i>",
    description: [
      '"We are a pet-friendly escape where your furry companions are always welcome."',
      "Discover Your Mountain Oasis. Experience Luxury Camping at Everest Base Camp Mussoorie! Our fourteen spacious rooms, each uniquely inspired by nature, offer top-notch bed and bath fittings with stunning views of the hills and forests. Enjoy the relaxing corridor and cozy patio overlooking the jungle. Experience nature's tranquility and wake up to the sweet songs of songbirds at our resort!",
    ],
    images: ["/home/about-1.png", "/home/about-2.png", "/home/about-3.png"],
    link: {
      label: "EXPLORE OUR ROOMS",
      href: "/rooms/",
    },
  },
  accommodationsData: {
    title: "Our Accommodations",
    description: [
      "Fourteen unique stays — each one a different way to experience the Himalayas",
    ],
    items: [
      {
        badge: "Flagship Villa",
        title: "Andrew's Villa",
        description: `Mussoorie's most exclusive private villa — a
sanctuary of uncompromised luxury in the
Himalayan forest.`,
        price: "From ₹20,000 / night",
        image: "/andrew-villa/Suite-Bedroom-2.png",
        primaryButton: {
          label: "View Room",
          href: "/rooms/the-andrews-villa",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Luxury Cottages",
        title: "Twin Luxury Cottages",
        description: `Dual luxury cottages with panoramic
Himalayan views — perfect for families or two
couples travelling together.`,
        price: "From ₹20,000 / night",
        image: "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
        primaryButton: {
          label: "View Room",
          href: "/rooms/twin-luxury-cottages",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Signature Cottage",
        title: "The Zenith",
        description: `The signature luxury cottage in the forest —
EBC's original icon of Himalayan glamping.`,
        price: "From ₹18,000 / night",
        image: "/The Zenith/RoomImage1.jpg",
        primaryButton: {
          label: "View Room",
          href: "/rooms/zenith-luxury-cottage",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Suite",
        title: "Surveyor Suite",
        description: `Spacious suite with private sit-out —
generous space for those who want room to
breathe.`,
        price: "From ₹16,000 / night",
        image: "/Surveyor Suite/RoomImage1.jpg",
        primaryButton: {
          label: "View Room",
          href: "/rooms/surveyor-suite",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Premium Glamping",
        title: "The Surveyor",
        description: `Premium glamping with forest canopy views
— a step into the wild without leaving luxury
behind.`,
        price: "From ₹14,000 / night",
        image: "/The Surveyor/RoomImage1.jpg",
        primaryButton: {
          label: "View Room",
          href: "/rooms/the-surveyor-suite",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Luxury Tent",
        title: "The Glamper",
        description: `Luxury tented glamping experience — the
romance of a tent with every modern comfort
within.`,
        price: "From ₹12,000 / night",
        image: "/The Glamper/RoomImage1.jpg",
        primaryButton: {
          label: "View Room",
          href: "/rooms/the-glamper",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
      {
        badge: "Forest Glamping",
        title: "The Camper",
        description: `The perfect forest glamping introduction —
pure, elemental, and utterly memorable..`,
        price: "From ₹10,000 / night",
        image: "/The Camper/RoomImage1.jpg",
        primaryButton: {
          label: "View Room",
          href: "/rooms/the-camper",
        },
        secondaryButton: {
          label: "Book Now",
          href: bookingLink,
        },
      },
    ],

    video: [
      {
        src: "/videobnr.webp",
        videoSrc:
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/EBC+24+.mp4",
      },
      {
        src: "/videobnr.webp",
        videoSrc:
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/EBC+25.mp4",
      },
    ],
  },
  journeyData: {
    title: "Curated for Every <i>Journey!</i>",
    description: [
      "Whether you come as lovers, a family, or a corporate team, EBC Mussoorie is ready for you.",
    ],
    items: [
      {
        title: "Family <i>Stays</i>",
        description: [
          "Safe, spacious and full of wonder, the family holiday that leaves screens behind.",
        ],
        image: "/landing/family.png",
        link: "/family-stays",
      },
      {
        title: "Couples & <i>Honeymoon</i>",
        description: [
          "Private bonfires, starlit skies and Himalayan mornings made for two.",
        ],
        image: "/landing/couples.png",
        link: "/couples-and-honeymoon",
      },
      {
        title: "Corporate & <i>MICE</i>",
        description: [
          "Ideal for corporate retreats, team offsites, executive stays, and business gatherings in a peaceful mountain setting.",
        ],
        image: "/landing/corporate.png",
        link: "/corporate-and-mice",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },
  journalData: {
    title: "From Our Journal",
    description: "Stories, guides and updates from EBC Mussoorie",
    blogData,
  },
  homeGalleryData: {
    images: [
      "/DSC04996-HDR-2.webp",
      "/DSC05021.webp",
      "/img1.webp",
      "/DSC_6458.webp",
      "/img1 (2).webp",
      "/img1 (1).webp",
    ],
  },
  experienceData: {
    title: "Experiences at EBC <i>Mussoorie!</i>",
    description: ["The memories that guests carry home long after checkout"],
    image: "/landing/experience.png",
    items: [
      {
        title: "Bonfire Evenings",
        description:
          "Every night ends around a private bonfire under an open Himalayan sky. This is the signature EBC experience.",
        icon: "✦",
      },
      {
        title: "Stargazing",
        description:
          "At 2,160m with minimal light pollution, the night sky at EBC is extraordinary. Spot constellations, satellites and shooting stars.",
        icon: "✦",
      },
      {
        title: "Forest Walks",
        description:
          "Guided morning walks through the deodar forest. Spot Himalayan birds, wildflowers and  if lucky, pugmarks in the mud.",
        icon: "✦",
      },
      {
        title: "Himalayan Views",
        description:
          "Wake up to panoramic mountain vistas. On clear mornings, Himalayan peaks emerge through the mist in shades of gold and rose.",
        icon: "✦",
      },
      {
        title: "Bird Watching",
        description:
          "Observe diverse bird species in their natural habitat for a peaceful and immersive nature experience.",
        icon: "✦",
      },
      {
        title: "Chef Special Menu",
        description:
          "Signature dishes crafted by our chef to deliver a refined and unforgettable dining experience.",
        icon: "✦",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  amenities: [
    {
      title: "Stay with Luxury",
      description:
        "Luxury tents with private bathrooms for an unforgettable stay.",
      image: "/home/exp-1.png",
    },
    {
      title: "Unmatched Views",
      description:
        "Spectacular views of the Himalayas from the George Everest Peak trek.",
      image: "/home/exp-2.png",
    },
    {
      title: "Something for Everyone",
      description:
        "Archery, badminton, and trek for every adventure enthusiast’s.",
      image: "/home/exp-3.png",
    },
    {
      title: "Relish Conveniently",
      description: "Park Cafe offering fusion cuisine with breathtaking views.",
      image: "/home/exp-4.png",
    },
    {
      title: "Achieve Serenity",
      description: "Serene ambiance amidst the lush greenery for relaxation.",
      image: "/home/exp-5.png",
    },
    {
      title: "Personalized for You",
      description:
        "Personalized picnics and BBQ for an intimate dining experience.",
      image: "/home/exp-6.png",
    },
  ],

  diningData: {
    image: "/home/dining.png",
    link: {
      label: "EXPLORE PARK CAFE",
      href: "/park-cafe/",
    },
  },

  activitiesData: {
    title: "From Cozy Nights to Wild <i>Adventures!</i>",
    description: [
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone!",
    ],
    image: "/home/activities.png",
    link: {
      label: "EXPLORE ACTIVITIES",
      href: "/activities",
    },
  },

  exploreNearbyData: {
    title: "Explore Beyond Your <i>Stay!</i>",
    description:
      "Discover scenic spots, hidden gems, and local attractions just minutes away. Step out and explore experiences that make your stay even more memorable.",
    image: "/mountain.png",
    cards: [
      {
        placeName: "George Everest",
        placeImage: nearby + "img1.webp",
        placeDetails:
          "The highest point in Mussoorie, providing panoramic views of the Himalayan peaks. A must-visit for nature lovers.",
        distance: [
          { icon: <ManWalkingIcon />, miter: "5 mins Walk" },
          {
            icon: <DistanceIcon />,
            miter: "400 m",
          },
        ],
      },
      {
        placeName: "Lal Tibba",
        placeImage: nearby + "img6.webp",
        placeDetails:
          "The highest point in Mussoorie, providing panoramic views of the Himalayan peaks. A must-visit for nature lovers.",
        distance: [
          { icon: <CarDriveIcon />, miter: "48 mins drive" },
          { icon: <DistanceIcon />, miter: "10.5 KM " },
        ],
      },
      {
        placeName: "Cloud End",
        placeImage: nearby + "img2.webp",
        placeDetails:
          "A tranquil spot marking the end of Mussoorie. Surrounded by dense forests and offering stunning views, it's perfect for a peaceful retreat and nature walks.",
        distance: [
          { icon: <ManWalkingIcon />, miter: "30 mins Walk" },
          {
            icon: <DistanceIcon />,
            miter: "2 KM",
          },
        ],
      },
      {
        placeName: "Company Garden",
        placeImage: nearby + "img3.webp",
        placeDetails:
          "A beautifully maintained garden offering a variety of flowers, an amusement park, and boating. Ideal for families.",
        distance: [
          {
            icon: <DistanceIcon />,
            miter: "3.8 KM",
          },
          {
            icon: <CarDriveIcon />,
            miter: "16 mins drive",
          },
        ],
      },
      {
        placeName: "Camel’s Back Road",
        placeImage: nearby + "img4.webp",
        placeDetails:
          "A 3 km stretch ideal for walking and horse riding, offering a stunning view of the sunset.",
        distance: [
          {
            icon: <DistanceIcon />,
            miter: "7.3 KM",
          },
          {
            icon: <CarDriveIcon />,
            miter: "32 mins drive",
          },
        ],
      },
      {
        placeName: "Benog Wildlife Sanctuary",
        placeImage: nearby + "img5.webp",
        placeDetails:
          "Home to a variety of flora and fauna, a haven for bird watchers and nature enthusiasts.",
        distance: [
          {
            icon: <DistanceIcon />,
            miter: "4 KM",
          },
          {
            icon: <CarDriveIcon />,
            miter: "20 mins drive",
          },
        ],
      },
    ],
    link: {
      label: "CONTACT US",
      href: "/contact-us",
    },
  },

  pressData: {
    title: "Featured Press <i>Releases!</i>",
    links: [
      {
        backImage: "/images/PressReleases-3.png",
        src: "/images/logo-ad-int.svg",
        name: "AD",
        link: "https://www.architecturaldigest.in/story/weekend-getaways-from-delhi-that-are-perfect-for-last-minute-planning/",
      },
      {
        backImage: "/images/PressReleases-1.png",
        src: "/images/tripoto2.png",
        name: "Tripoto",
        link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
      },
      {
        backImage: "/images/PressReleases-2.png",
        src: "/images/hotelier_inda.png",
        name: "Hotelier India",
        link: "https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie",
      },

      {
        backImage: "/images/LLB.png",
        src: "/images/lbb.png",
        name: "LBB",
        link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
      },
      {
        backImage: "/images/prSO.png",
        src: "/images/so.png",
        name: "So",
        link: "https://so.city/delhi/article/this-dreamy-resort-is-a-modern-campers-playground-with-luxury-tents-a-cafe-on-the-hill",
      },
      {
        backImage: "/images/ISSU.png",
        src: "/images/issuu.png",
        name: "Issuu",
        link: "https://issuu.com/ebcmussoorie/docs/camp_stay_at_ebc_mussoorie_a_himalayan_foothills_",
      },

      {
        backImage: "/images/PressReleases3.webp",
        src: "/images/Group_media.png",
        name: "curlytales",
        link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
      },
      {
        backImage: "/banner/1.png",
        src: "/images/wanderalone.png",
        name: "WanderAlone",
        link: "https://wanderalone.co.in/did-you-know-that-just-7-hours-from-delhi-theres-an-everest-base-camp-no-were-not-kidding/",
      },
    ],
  },

  testimonialData: {
    title: "What Our Guests Say",
    description: "Trusted by couples, families and corporate teams since 2019",
    testimonials: [
      {
        title: "Tina Thilyani",
        subtle: `I highly commend Park Cafe in Mussoorie for it's exceptional food and delightful ambiance.The culinary experience was superb, and the inviting atmosphere added to the overall enjoyment. A most-visit for those seeking both quality cuisine and pleasant peaceful environment`,
      },
      {
        title: "Kshitij Mishra",
        subtle: `Recently visited the Park Cafe and was impressed by the ambiance and lush outdoor seating. The cafe's location within the park  added to it's appeal, providing a serene setting for enjoying a meal. Overall,I highly recommended.`,
      },
      {
        title: "Shweta Gyanchandani",
        subtle: `Park Cafe in Mussoorie is a cozy spot with delicious food and friendly service. It's near beautiful picnic spot, making it great peace and relax and enjoy a meal with stunning views.`,
      },
    ],
  },

  faqData: {
    title: "Frequently Asked <i>Questions!</i>",
    faq: [
      {
        q: "What is included in the room price?",
        a: "Breakfast for two, evening bonfire access, a guided morning nature walk, complimentary Wi-Fi and free parking are included with every room.",
      },
      {
        q: "How far is EBC Mussoorie from Delhi?",
        a: "EBC Mussoorie is approximately 280 km from Delhi — around 5.5 to 6.5 hours by road depending on traffic. The NH58 via Roorkee and NH334 via Haridwar are both good routes.",
      },
      {
        q: "How far from Dehradun?",
        a: "35 km from Dehradun, approximately 1–1.5 hours by road. Dehradun is the nearest major city and railway hub.",
      },
      {
        q: "What is the nearest railway station?",
        a: "Dehradun Railway Station, 35 km away. Trains from Delhi include the Shatabdi Express (5.5 hours). We can arrange a transfer from the station — please ask at time of booking.",
      },
      {
        q: "What is the nearest airport?",
        a: "Jolly Grant Airport, Dehradun — approximately 55 km (1.5 hours). Daily flights from Delhi, Mumbai and Bangalore. Transfers can be arranged.",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  ctaData: {
    title: "Limited Availability",
    subtitle: "Ready to <i>Escape?</i>",
    description: [
      "Availability is limited. Book your stay directly via WhatsApp for the fastest response and best rates.",
    ],
    actions: [
      { label: "Check Availability via WhatsApp", href: contacts.WhatsAppCta },
      {
        label: "View Packages",
        href: "/packages",
      },
    ],
  },
};
