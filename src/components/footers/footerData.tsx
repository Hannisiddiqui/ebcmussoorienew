import { contacts } from "@/utils/constant";
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
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.instagram,
    icon: <OutLineInstagramIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[4],
    href: contacts.socialContacts.tripadvisor,
    icon: <TripadvisorIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[5],
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

export const webSiteFooterData: WebSiteFooterData = {
  logo: "/logo-2.png",
  description: "Reserve your luxury holiday!",
  link: {
    label: "BOOK NOW",
    href: contacts.WhatsAppCta,
  },
  lists: [
    {
      links: SocialLinks,
    },
    {
      title: "Quick Links",
      links: footerNavLinks.slice(0, 4).map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "Explore",
      links: footerNavLinks.slice(4, 8).map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "Policies",
      links: footerNavLinks.slice(8).map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contacts.addresses[0].address,
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
  ],
};
