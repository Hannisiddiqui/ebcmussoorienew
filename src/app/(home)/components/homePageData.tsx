import { nearby } from "@/utils/constant";
import {
  CarDriveIcon,
  DistanceIcon,
  HotelIcon1,
  HotelIcon2,
  HotelIcon3,
  HotelIcon4,
  ManWalkingIcon,
} from "@/utils/homeIcons";

export const homePageData = {
  bannerData: {
    images: [
      "/banner/1.png",
      "/banner/bnr2.png",
      "/banner/3.png",
      "/banner/2_1.png",
      "/banner/3_2.png",
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

    {
      icon: <HotelIcon1 />,
      title: "4.5/5",
      src: "/partners/yatra.png",
    },

    {
      icon: <HotelIcon2 />,
      title: "4.5/5",
      src: "/partners/cleartrip.png",
    },
    {
      icon: <HotelIcon3 />,
      title: "9.1/10",
      src: "/partners/Agoda-Logo.png",
    },
  ],

  introData: {
    title: "Everest Base Camp is a Luxury <i>Glamping</i> Resort!",
    description: [
      "“It embodies the legacy of Sir George Everest, a former Surveyor General of India, and is an ode to his adventures that unfolded in the charming town of Mussoorie",
    ],
    image: "/home/mountain.png",
  },

  aboutData: {
    title: "About Everest Base Camp Mussoorie!",
    description: [
      '"We are a pet-friendly escape where your furry companions are always welcome."',
      "Discover Your Mountain Oasis. Experience Luxury Camping at Everest Base Camp Mussoorie! Our seven spacious rooms, each uniquely inspired by nature, offer top-notch bed and bath fittings with stunning views of the hills and forests. Enjoy the relaxing corridor and cozy patio overlooking the jungle. Experience nature's tranquility and wake up to the sweet songs of songbirds at our resort!",
    ],
    images: ["/home/about-1.png", "/home/about-2.png", "/home/about-3.png"],
    link: {
      label: "EXPLORE OUR ROOMS",
      href: "/rooms/",
    },
  },

  experienceData: {
    title: "Not Just a Stay, It’s An Experience!",
    description:
      "Experience luxury amidst the serene hills at Everest Base Camp with a range of amenities to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations, we provide the perfect escape from the hustle and bustle of everyday life. Discover the perfect blend of nature and luxury at our resort.",
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
    title: "Explore Beyond Your Stay!",
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
        backImage: "/banner/3_2.png",
        src: "/images/lbb.png",
        name: "LBB",
        link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/so.png",
        name: "So",
        link: "https://so.city/delhi/article/this-dreamy-resort-is-a-modern-campers-playground-with-luxury-tents-a-cafe-on-the-hill",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/hotelier_inda.png",
        name: "Hotelier India",
        link: "https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/tripoto2.png",
        name: "Tripoto",
        link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/issuu.png",
        name: "Issuu",
        link: "https://issuu.com/ebcmussoorie/docs/camp_stay_at_ebc_mussoorie_a_himalayan_foothills_",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/logo-ad-int.svg",
        name: "AD",
        link: "https://www.architecturaldigest.in/story/weekend-getaways-from-delhi-that-are-perfect-for-last-minute-planning/",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/Group_media.png",
        name: "curlytales",
        link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
      },
      {
        backImage: "/banner/3_2.png",
        src: "/images/wanderalone.png",
        name: "WanderAlone",
        link: "https://wanderalone.co.in/did-you-know-that-just-7-hours-from-delhi-theres-an-everest-base-camp-no-were-not-kidding/",
      },
    ],
  },

  ctaData: {
    title: ["Come Stay with us at,", "EBC <i>Mussoorie!</i>"],
    images: ["/mountain.png"],
  },
};
