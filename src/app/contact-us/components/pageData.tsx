import { contacts } from "@/utils/constant";

export const contactUsPageData = {
  bannerDta: {
    title: "Get in <i>Touch!</i>",
    description: "We’re Here to Help You Plan Your Next Adventure!",
    links: [
      {
        label: "Call Us: " + contacts.phone[0],
        href: "tel:" + contacts.phone[0],
        label2: contacts.phone[1],
        href2: "tel:" + contacts.phone[1],
      },
      {
        label: "Email: " + contacts.email[0],
        href: "mailto:" + contacts.email[0],
      },
      {
        label: "Address: " + contacts.addresses[0].address,
        href: contacts.addresses[0].addressUrl,
      },
    ],
  },
  mapUrl: contacts.addresses[0].mapUrl,
  formData: {
    title: "Have Questions?",
    description: "Contact Us and Start Your Next Adventure!",
  },
};
