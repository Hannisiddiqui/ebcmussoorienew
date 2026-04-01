import { imgSrc } from "@/utils/constant";

export const activitiesPageData = {
  bannerData: {
    title: "Our <i>Activities!</i>",
    description:
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Discover thrilling outdoor activities & explore our diverse range of indoor games perfect for a cosy indoor adventure.",

    images: ["/activities/banner-1.png", "/activities/banner-2.png"],
  },

  introData: {
    title: "Pick your perfect adventure with our fun <i>Activities!</i>",
    description: [
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Indulge in a personalized barbeque surrounded by nature or celebrate special occasions in teepee tents set in a serene environment. For the thrill-seekers, our wilderness treks are a must-try. And when the nights turn frosty, gather around the bonfire, roast some s'mores, and enjoy the warmth. Join us for unforgettable experiences that include delightful barbeques and bonfires under the starlit sky.",
    ],
    image: "/home/mountain.png",
  },

  ActivitiesData: [
    {
      title: "Outdoor <i>Activities!</i>",
      description: [
        "Discover thrilling outdoor activities like badminton, archery, mountain biking, and hooping. Join the brave for haunted walks around the campsite or witness the stunning sunrise at George Everest Peak, a historic vantage point near Mussoorie. For a unique challenge, partake in a momo-eating contest and unite with fellow birdwatchers at Benog Wildlife Sanctuary. Explore numerous hikes and trails for an unforgettable adventure.",
      ],
      images: [
        imgSrc + "activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img2.webp",
        imgSrc + "activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img2.webp",
      ],
    },

    {
      title: "Indoor <i>Activities!</i>",
      description: [
        "Explore our diverse range of board games perfect for a cosy indoor adventure. Join us for a relaxing day of strategic fun and friendly competition.",
      ],
      images: [
        imgSrc + "activities/indoor-activities/img1.webp",
        imgSrc + "activities/indoor-activities/img2.webp",
        imgSrc + "activities/indoor-activities/img3.webp",
        imgSrc + "activities/indoor-activities/img1.webp",
        imgSrc + "activities/indoor-activities/img2.webp",
        imgSrc + "activities/indoor-activities/img3.webp",
      ],
    },
  ],

  paidAddonsData: {
    title: "Paid Add-ons!",
    description:
      "Enhance Your Experience with Our Paid Add-Ons: Exclusive Options for Extra Comfort and Adventure",

    items: [
      {
        title: "Picnic in the Meadows!",
        description: [
          "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family.",
        ],
        images: [
          imgSrc + "activities/picnic/img1.webp",
          imgSrc + "activities/picnic/img2.webp",
          imgSrc + "activities/picnic/img3.webp",
        ],
      },
      {
        title: "Gather Together for a Barbecue!",
        description: [
          "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth and camaraderie. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
        ],
        images: [
          imgSrc + "activities/barbecue/img1.webp",
          imgSrc + "activities/barbecue/img2.webp",
          imgSrc + "activities/barbecue/img3.webp",
        ],
      },
      {
        title: "Enjoy Bonfire!",
        description: [
          "Experience the magic of a private bonfire under the starlit sky, creating cherished moments with your loved ones. Unwind after exploring Mussoorie's natural beauty in the warmth of your own intimate setting, fostering both adventure and relaxation.",
        ],
        images: [
          imgSrc + "activities/bonfire/img1.webp",
          imgSrc + "activities/bonfire/img2.webp",
          imgSrc + "activities/bonfire/img3.webp",
        ],
      },
      {
        title: "Nature Trekking!",
        description: [
          "Embark on the George Everest Peak trek amidst Mussoorie's serene hills, with our knowledgeable guide providing direction and companionship along the way. Enjoy a refreshing sandwich, tea, and water as you explore hidden gems and breathtaking Himalayan views.",
        ],
        images: [
          imgSrc + "activities/trekking/img1.webp",
          imgSrc + "activities/trekking/img2.webp",
          imgSrc + "activities/trekking/img3.webp",
        ],
      },
    ],
  },

  ctaData: {
    title: ["Come Stay with us at,", " EBC <i>Mussoorie!</i>"],
    images: ["/mountain.png"],
  },
};
