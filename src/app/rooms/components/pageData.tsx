import { BtnType } from "@/@types/@types";
import { bookingLink, imgSrc, landingpageImgSrc } from "@/utils/constant";

const btnType: BtnType = "link";

export const roomPageData = {
  banner: {
    title: "Our <i>Rooms!</i>",
    description:
      "Experience the rich legacy of Sir George Everest, the esteemed former Surveyor General of India, and embark on a journey of relaxation and rejuvenation like never before.",
    images: ["/rooms/room1.png", "/rooms/room2.png"],
  },
  introData: {
    title: "Escape from the Urban <i>Hustle!</i>",
    description: [
      "Feeling drained by the hustle and bustle of city life? Escape to EBC Mussoorie and rediscover your connection with nature. Rejuvenate your mind and soul amidst the serene beauty of our glamping destination, set within 20 acres of ancient deodar forest. Our all-weather tents ensure comfort and shelter, whether it's rain, snow, hail, or sun.",
    ],
    image: "/home/mountain.png",
  },
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
  rooms: [
    {
      title: "The <i>Camper!</i>",
      subTitle: "Homely Haven  | 1-3 people  | 280sqft",
      description: [
        "Experience a cozy retreat in our Camper rooms, perfectly suited for couples seeking a luxurious holiday getaway. Nestled amidst the serene surroundings, these heat-insulated rooms provide unparalleled comfort and warmth. Step out onto your private balcony to soak in the breathtaking views of the Deodar forest while savoring delicious coffee.",
      ],

      images: [
        // imgSrc + "room/camper/img1.webp",
        // imgSrc + "room/camper/img2.webp",
        // imgSrc + "room/camper/img3.webp",
        // imgSrc + "room/camper/img4.webp",
        landingpageImgSrc + "camper/img3.webp",
        imgSrc + "room/camper/img4.webp",
        landingpageImgSrc + "camper/img1.webp",
        landingpageImgSrc + "camper/img2.webp",
        imgSrc + "room/camper/img3.webp",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
    {
      title: "The <i>Glamper!</i>",
      subTitle: "Opulent Nature  | 1-3 people  | 375sqft",
      description: [
        "Glamper combines sophistication and style, providing a luxurious glamping experience in the wilderness of Everest Base Camp, Mussoorie. Enjoy plush interiors and exclusive luxury rooms for a truly indulgent retreat. Step into a world of extravagance and nature as you sip on delicious hot chocolate and admire the beauty of the Deodar forest. Best suited for small groups. ",
        "Don't miss our special netted balcony space, perfect for capturing Instagram-worthy moments.",
      ],

      images: [
        // imgSrc + "room/glamper/img1.webp",
        // imgSrc + "room/glamper/img2.webp",
        // imgSrc + "room/glamper/img3.webp",
        // imgSrc + "room/glamper/img4.webp",
        landingpageImgSrc + "glamper/img3.webp",
        imgSrc + "room/glamper/img1.webp",
        landingpageImgSrc + "glamper/img1.webp",
        landingpageImgSrc + "glamper/img2.webp",
        landingpageImgSrc + "glamper/img4.webp",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
    {
      title: "The <i>Surveyor!</i>",
      subTitle: "Meadow view Cabins  | 1-3 people  | 450sqft",
      description: [
        "Experience in the ultimate wilderness retreat amidst our expansive 20 acres of spacious tents, offering the best views of a lush green forest meadow. After a day of exploration, find solace and rejuvenate your senses in the serene surroundings, surrounded by breathtaking views of the Deodar forest. Best Suited for families or small friend groups. ",
        "Enjoy utmost privacy and comfort in our tranquil ambiance, inviting you to rediscover yourself amidst nature's embrace.",
      ],

      images: [
        // imgSrc + "room/surveyor/img1.webp",
        // imgSrc + "room/surveyor/img2.webp",
        // imgSrc + "room/surveyor/img3.webp",
        // imgSrc + "room/surveyor/img4.webp",
        landingpageImgSrc + "surveyor-new/DSC_6442.webp",
        landingpageImgSrc + "surveyor-new/DSC_6610.webp",
        landingpageImgSrc + "surveyor-new/DSC_6458.webp",
        landingpageImgSrc + "surveyor-new/IMG_4177.webp",
        landingpageImgSrc + "surveyor-new/DSC05333.JPG.webp",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
    {
      title: "The Surveyor <i>Suite!</i>",
      subTitle: "Opulent Wilderness  | 1-4 people | 600sqft",
      description: [
        "Experience unparalleled luxury amidst nature in our Surveyor Suite at Everest Base Camp, Mussoorie. Immerse yourself in a meticulously designed tent featuring spacious living areas, extravagant amenities, and breathtaking forest views. Relax in style with a king-sized bed and the option to set up a queen-sized sofa bed, accommodating up to four people. Perfect for families or friend groups of 4.",
        " Enjoy the utmost privacy and seclusion in our most premium and spacious room, offering tranquility and indulgence like never before.",
      ],

      images: [
        // imgSrc + "room/surveyor-suite/img1.webp",
        // imgSrc + "room/surveyor-suite/img2.webp",
        // imgSrc + "room/surveyor-suite/img3.webp",
        // imgSrc + "room/surveyor-suite/img4.webp",
        landingpageImgSrc + "surveyor_suite/img2.webp",
        imgSrc + "room/surveyor-suite/img3.webp",
        landingpageImgSrc + "surveyor_suite/img1.webp",
        landingpageImgSrc + "surveyor_suite/img3.webp",
        imgSrc + "room/surveyor-suite/img4.webp",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
    {
      title: "The <i>Zenith!</i>",
      subTitle: "The luxury cottage | 2+2 people | 510sqft",
      description: [
        "Our newest luxury cottage featuring warm tones, elegant interiors, and stunning forest views. The ultimate luxury retreat experience with private deck and hammock access. Ideal for intimate leadership gatherings and executive off-sites.",
      ],

      images: [
        landingpageImgSrc + "zenith/DSC04996-HDR-2.webp",
        landingpageImgSrc + "zenith/DSC04953-HDR-2.webp",
        landingpageImgSrc + "zenith/DJI_0763.webp",
        landingpageImgSrc + "zenith/DSC05021.webp",
        landingpageImgSrc + "zenith/DSC05055.webp",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },

    {
      title: "Andrew’s <i>Villa!</i>",
      subTitle: "Your Private Luxury Escape | 1-4 people | 1300sq.ft.",
      description: [
        "Experience unparalleled luxury amidst nature in our Surveyor Suite at Everest Base Camp, Mussoorie. Immerse yourself in a meticulously designed tent featuring spacious living areas, extravagant amenities, and breathtaking forest views. Relax in style with a king-sized bed and the option to set up a queen-sized sofa bed, accommodating up to four people. Perfect for families or friend groups of four.",
        "Enjoy the utmost privacy and seclusion in our most premium and spacious room, offering tranquility and indulgence like never before.",
      ],

      images: [
        "/andrew-villa/Suite-Bedroom-2.png",
        "/andrew-villa/Suite-Bedroom-3.png",
        "/andrew-villa/Suite-Bedroom-4.png",
        "/andrew-villa/Suite-Bedroom-5.png",
        "/andrew-villa/Suite-Bedroom-6.png",
        "/andrew-villa/Suite-Bedroom-7.png",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
    {
      title: "Twin Luxury  <i>Cottages!</i>",
      subTitle: "Hillside Luxury for Families & Groups | 1250 sq. ft",
      description: [
        "Spanning approximately 1300 sq. ft., Andrew’s Villa is a spacious duplex private villa, ideal for families and groups seeking an exclusive yet flexible stay experience.",
        "Positioned around 40 ft above the ground, the villa offers some of the finest panoramic views on the property. The soundproof design ensures complete peace and privacy, while premium comforts such as heated WC make it perfect for a luxurious all-weather stay.",
        "We have 2 villas in this category, each consisting of 2 well-appointed rooms with separate entrances. This unique layout allows different families to stay together while still enjoying their own private spaces—making it ideal for group travel with enhanced privacy.",
        "The villa also features a large indoor lounge/living area perfect for gathering and spending quality time together which can also be coverted into a private room with queen size bed, Each floor includes an balcony with comfortable seating and a  offering beautiful spaces to relax and take in the surroundings. The bottom floor offers a huge outdoor deck with hammock and dinning table and loungers. Set amidst serene landscapes, the villa combines expansive interiors with thoughtfully designed indoor and outdoor areas—making it ideal for celebrations, family getaways, and premium group stays.",
      ],

      images: [
        "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-3.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-4.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-5.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-6.png",
        "/Twin-Luxury-Cottages/Suite-Bedroom-7.png",
      ],
      link: {
        label: "BOOK YOUR STAY",
        href: bookingLink,
        type: btnType,
      },
    },
  ],
  ctaData: {
    title: ["Come Stay with us at,", "EBC <i>Mussoorie!</i>"],
    images: ["/mountain.png"],
  },
};
