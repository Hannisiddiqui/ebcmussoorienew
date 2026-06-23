import { contacts, imgSrc } from "@/utils/constant";

export const parkCafePageData = {
  banner: {
    title: "Park Cafe",
    subTitle: "Park Cafe, Mussoorie’s finest Cafe!",
    description: "",
    image: "/park-cafe/banner-1.png",
  },

  about: {
    title: "",
    subTitle: `Dining Beyond the Ordinary`,
    description: [
      "Our culinary gem seamlessly combines nature's beauty with exquisite flavors, offering a unique dining experience against the backdrop of breathtaking natural wonders. ",
      "To create a dining oasis in the middle of the wilderness, we at Park Café are all about fusing innovation and simplicity. Our menu offers a fusion of inventive twists and regional flavors, guaranteeing a delectable experience that ideally accentuates the soothing settings. Everything about this place is meant to evoke memories, from carefree picnic brunches with a variety of BBQ dishes to special dinners served with hot cocoa.",
      "We're proud to serve a variety of delicious dishes that celebrate Mussoorie's culinary heritage. Our cafe is situated where Sir George Everest once had his stables and rode around, along with the George Everest Museum just a few minutes walk away.",
    ],
    image: "/park-cafe/banner-1.png",
  },
  // banner: {
  //   images: ["/park-cafe/banner-1.png"],
  // },
  // about: {
  //   title: "Park Café, Mussoorie’s finest <i>Café!</i>",
  //   image: "/park-cafe/cafe-table.png",
  // },

  // introData: {
  //   description: [
  //     "Our culinary gem seamlessly combines nature's beauty with exquisite flavors, offering a unique dining experience against the backdrop of breathtaking natural wonders.",
  //     "To create a dining oasis in the middle of the wilderness, we at Park Café are all about fusing innovation and simplicity. Our menu offers a fusion of inventive twists and regional flavors, guaranteeing a delectable experience that ideally accentuates the soothing settings. Everything about this place is meant to evoke memories, from carefree picnic brunches with a variety of BBQ dishes to special dinners served with hot cocoa.",
  //     "We're proud to serve a variety of delicious dishes that celebrate Mussoorie's culinary heritage. Our cafe is situated where Sir George Everest once had his stables and rode around, along with the George Everest Museum just a few minutes walk away.",
  //   ],
  //   images: [
  //     imgSrc + "park-cafe/park-cafe-slider1/img1.webp",
  //     imgSrc + "park-cafe/park-cafe-slider1/img2.webp",
  //     imgSrc + "park-cafe/park-cafe-slider1/img3.webp",
  //     imgSrc + "activities/bonfire/img1.webp",
  //   ],
  // },

  dineData: {
    title: "Dine Amidst History & <i>Nature!</i>",
    description: [
      "Nestled amidst nature at the Everest Base Camp in Mussoorie, Park Cafe offers a convenient location just a stone's throw away from the George Everest Museum. To enhance your experience, you can come by yourself or give us a call to make a reservation and get a pass that lets you drive straight up to the cafe.",
      "Don't miss the chance to explore the historical significance of our location, where Sir George Everest once had his stables and rode around. Plus, the George Everest Museum is just a couple of minutes' walk from our café. Conveniently, visitors can park their vehicles at the Park Café grounds before heading to the museum, ensuring a seamless and enjoyable visit.",
    ],
    image: "/park-cafe/dine.png",
    link: {
      label: "Get Direction",
      href: contacts.addresses[0].addressUrl,
    },
  },

  experience: {
    title: "Add-on Experiences!",
    description: "",
    card: [
      {
        title: "Barbeque in the <i>Shadows!</i>",
        description: [
          "Join us for Barbeque in the Shadows, a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together.",
          "Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.",
        ],
        image: "/park-cafe/dine.png",
      },
      {
        title: "Picnic in the <i>Meadows!</i>",
        description: [
          "Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture perfect celebration.",
          "Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.",
        ],
        image: "/park-cafe/dine.png",
      },
    ],
  },

  uniqueData: {
    title: "What Makes Us the Most Unique Cafe in <i>Mussoorie!</i>",
    description: [
      "Our unwavering commitment to a memorable dining experience that transcends the ordinary. At EBC, indulge in more than just a meal; it's a taste of home amidst the breathtaking beauty of nature. Nestled beside a beautiful meadow, our cafe offers a diverse range of offerings, from delightful tea and snacks to exquisite dining experiences.",
      "Experience curated events and experiences that promise to elevate your visit. As a must-visit cafe in Mussoorie, EBC ensures an unforgettable culinary journey that celebrates nature and community.",
    ],
    cta: {
      label: "Chat on WhatsApp",
      href: contacts.WhatsAppCta,
    },
    images: [
      imgSrc + "park-cafe/Choose-Us/img1.webp",
      imgSrc + "park-cafe/Choose-Us/img2.webp",
      imgSrc + "park-cafe/Choose-Us/img3.webp",
      imgSrc + "park-cafe/Choose-Us/img1.webp",
      imgSrc + "park-cafe/Choose-Us/img2.webp",
      imgSrc + "park-cafe/Choose-Us/img3.webp",
    ],
  },

  cuisineData: {
    title: "Our <i>“Cuisine”</i>",
    description: [
      "Our cuisine celebrates a rich blend of flavors, traditions, and techniques, offering a delightful journey for your taste buds. From aromatic spices and fresh, locally sourced ingredients to time honored recipes passed down through generations, each dish tells a story of culture and craftsmanship. . Every meal is designed to provide an unforgettable dining experience, combining the best of regional influences with modern twists to satisfy every craving and occasion.",
    ],
    images: [
      {
        title: "Pasta Alfredo",
        src: imgSrc + "park-cafe/our-cuisine/img1.webp",
      },
      {
        title: "crispy veg burger",
        src: imgSrc + "park-cafe/our-cuisine/img2.webp",
      },
      {
        title: "butter chicken",
        src: imgSrc + "park-cafe/our-cuisine/img3.webp",
      },
    ],
  },

  addOnsData: {
    title: "Add on <i>Experiences!</i>",
    items: [
      {
        title: "Barbeque in the <i>Shadows!</i>",
        description: [
          "Join us for Barbeque in the Shadows, a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together.",
          "Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.",
        ],
        image: "/park-cafe/addon-1.png",
      },
      {
        title: "Picnic in the <i>Meadows!</i>",
        description: [
          "Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture perfect celebration.",
          "Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.",
        ],
        image: "/park-cafe/addon-2.png",
      },
    ],
  },

  milestoneData: {
    title: "Mark Your Milestones with <i>Us!</i>",
    description: [
      "Experience unforgettable celebrations at Everest Base Camp, Mussoorie. We customize every element to match your vision, from <b>Anniversaries</b> to <b>Birthdays</b>. With our attention to detail, your event will run seamlessly, letting you cherish every moment. Come celebrate with us and create memories to last a lifetime!",
    ],
    images: [
      // "/park-cafe/milestone-1.png",
      // "/park-cafe/milestone-2.png",
      // "/park-cafe/milestone-3.png",
      imgSrc + "park-cafe/Choose-Us/img2.webp",
      imgSrc + "park-cafe/park-cafe-slider1/img3.webp",
    ],
  },

  testimonialData: {
    title: "Guest <i>“Experiences”</i>",
    testimonials: [
      {
        title: "Tina Thilyani",
        subtle: `I highly commend Park Cafe in Mussoorie for it's exceptional food and delightful ambiance.The culinary experience was superb, and the inviting atmosphere added to the overall enjoyment. A most-visit for those seeking both quality cuisine and pleasant during environment`,
      },
      {
        title: "Kshitij Mishra",
        subtle: `Recently visited the Park Cafe and was impressed by the ambiance and lush outdoor seating. The cafe's location within the park  added to its appeal, providing a serene setting for enjoying a meal. Overall,I highly recommended.`,
      },
      {
        title: "Shweta Gyanchandani",
        subtle: `Park Cafe in Mussoorie is a cozy spot with delicious food and friendly service. It's near beautiful picnic spot, making it great peace and relax and enjoy a meal with stunning views.`,
      },
      {
        title: "Tina Thilyani",
        subtle: `I highly commend Park Cafe in Mussoorie for it's exceptional food and delightful ambiance.The culinary experience was superb, and the inviting atmosphere added to the overall enjoyment. A most-visit for those seeking both quality cuisine and pleasant during environment`,
      },
      {
        title: "Kshitij Mishra",
        subtle: `Recently visited the Park Cafe and was impressed by the ambiance and lush outdoor seating. The cafe's location within the park  added to its appeal, providing a serene setting for enjoying a meal. Overall,I highly recommended.`,
      },
      {
        title: "Shweta Gyanchandani",
        subtle: `Park Cafe in Mussoorie is a cozy spot with delicious food and friendly service. It's near beautiful picnic spot, making it great peace and relax and enjoy a meal with stunning views.`,
      },
    ],
    image: "/park-cafe/testimonial.png",
  },

  ctaData: {
    title: ["Come Visit us at,", "Park <i>Cafe!</i>"],
    images: ["/park-cafe/cafe-table.png"],
  },

  testimonialSection: [
    {
      name: "Tarushree Dr.",
      message: `Loved the experience, 5 star to the staff and food. We went to visit George Everest house and took a break here. This cafe is nestled in George Everest estate, surrounded by greenery. We ordered momos and a mushroom dish suggested by the staff and it turned out to be sumptuous. Overall feel of place is very nice, will love visiting again.`,
      designation: "Local Guide",
      reviews: {
        rating: 5,
      },
    },
    {
      name: "Ansh Kaushik",
      message: `I would like to share my feedback for Puran Singh. He was extremely polite and professional throughout the service. He knows very well how to serve guests properly and how to communicate respectfully. His behaviour was calm, friendly, and very welcoming. Because of him, our dining experience became even more enjoyable.

He is truly very good at his work and deserves appreciation. Thank you for such excellent service 😊 👏`,
      designation: "Guest",
      reviews: {
        rating: 5,
      },
    },
  ],
};
