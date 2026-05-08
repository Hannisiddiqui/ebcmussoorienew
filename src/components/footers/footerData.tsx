import { bookingLink, contacts } from "@/utils/constant";
import {
  FillFaceBookIcon,
  FillLocationIcon,
  FillMailIcon,
  FillPhoneIcon,
  OutLineInstagramIcon,
  TripadvisorIcon,
  YouTube,
} from "@/utils/icons";

export const SocialLinks = [
  {
    label: Object.keys(contacts.socialContacts)[0],
    href: contacts.socialContacts.facebook,
    icon: <FillFaceBookIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[1],
    href: contacts.socialContacts.instagram,
    icon: <OutLineInstagramIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.tripadvisor,
    icon: <TripadvisorIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[3],
    href: contacts.socialContacts.youtube,
    icon: <YouTube />,
  },
];

interface WebSiteFooterData {
  logo: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
  contact: {
    title: string,
    links: {
      icon?: React.ReactNode,
      label?: string,
      href: string,
      title?: string
      label2?: string;
      href2?: string;
    }[],
  }
}

export const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Rooms", href: "/rooms/" },
  { name: "Contact Us", href: "/contact-us/" },
  { name: "Activities", href: "/activities/" },
  { name: "Park Cafe", href: "/park-cafe/" },
  { name: "Blogs", href: "/blogs/" },
  { name: "Gallery", href: "/gallery/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms & Conditions", href: "/terms-and-conditions/" },
];
export const roomFooterLinks = [
  { name: "All Rooms", href: "/rooms" },
  { name: "Andrew's Villa", href: "/rooms/andrews-villa/" },
  { name: "Twin Cottages", href: "/rooms/twin-luxury-cottages/" },
  { name: "The Zenith", href: "/rooms/the-zenith/" },
  { name: "Surveyor Suite", href: "/rooms/surveyor-suite/" },
  { name: "The Surveyor", href: "/rooms/the-surveyor/" },
  { name: "The Glamper", href: "/rooms/the-glamper/" },
  { name: "The Camper", href: "/rooms/the-camper/" },
];
export const exploreFooterLinks = [
  { name: "Experiences", href: "/" },
  { name: "Packages & Pricing", href: "/about-us/" },
  { name: "Blog & Guides", href: "/rooms/" },
  { name: "FAQ", href: "/contact-us/" },
  { name: "Location & Directions", href: "/activities/" },
];
export const forYouFooterLinks = [
  { name: "Couples & Honeymoon", href: "/" },
  { name: "Family Stays", href: "/about-us/" },
  { name: "Corporate & MICE", href: "/rooms/" },
];

export const webSiteFooterData: WebSiteFooterData = {
  logo: "/logo-2.png",
  description: "Luxury glamping on Hathipaon Road, Mussoorie — where the Himalayas meet the stars",
  link: {
    label: "Book Via Whatsapp",
    href: bookingLink,
  },
  lists: [
    {
      title: "Rooms",
      links: roomFooterLinks.map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "Explore",
      links: exploreFooterLinks.map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "For You",
      links: forYouFooterLinks.map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "Social",
      links: SocialLinks.map((link) => ({
        label: link.label,
        href: link.href,
        icon: link.icon
      })),
    },

  ],
  contact: {
    title: "Contact Us",
    links: [
      {
        icon: <FillLocationIcon />,
        label: contacts.addresses[0].address,
        href: contacts.addresses[0].addressUrl,
      },
      {
        title: "call: ",
        icon: <FillPhoneIcon />,
        label: contacts.phone[0],
        href: "tel:" + contacts.phone[0],
        label2: contacts.phone[1],
        href2: "tel:" + contacts.phone[1],
      },
      {
        title: "Email: ",
        icon: <FillMailIcon />,
        label: contacts.email[0],
        href: "mailto:" + contacts.email[0],
      },
    ],
  },
};
