import { contacts } from "@/utils/constant";

export const contactUsPageData = {
  bannerDta: {
    title: "GET IN TOUCH",
    subTitle: "Contact EBC Mussoorie | Book Your Stay",
    description: "We respond to all enquiries within 2 hours",
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

  contactCards: {
    cards: [
      {
        icon: "💬",
        title: "WhatsApp",
        badge: "FASTEST RESPONSE",
        contact: "+91 91190 01126",
        description: "Fastest — we respond within 2 hours",
        button: {
          type: "link",
          label: "Chat on WhatsApp",
          href: contacts.WhatsAppCta as string,
        },
      },
      {
        icon: "📞",
        title: "Calls",
        contact: "+91 91190 01126",
        availability: "Available 9am – 9pm daily",
        button: {
          type: "link",
          label: "Call Now",
          href: `tel:${contacts.phone[0]}`,
        },
      },
      {
        icon: "✉️",
        title: "Email",
        contact: "info@ebcmussoorie.com",
        description: "For detailed enquiries",
        button: {
          type: "link",
          label: "Send Email",
          href: `mailto:${contacts.email[0]}`,
        },
      },
    ],
  },

  infoCards: {
    cards: [
      {
        title: "Our Address",

        content: [
          "Park Estate,",
          "Hathipaon Road,",
          "Mussoorie,",
          "Uttarakhand 248179",
        ],

        button: {
          label: "OPEN IN GOOGLE MAPS",
          href: contacts.addresses[0].mapUrl,
        },
      },

      {
        title: "Follow EBC Mussoorie",

        socialLinks: [
          {
            label: "📸 Instagram — @ebcmussoorie",
            href: "https://instagram.com/ebcmussoorie",
          },

          {
            label: "📘 Facebook — EBC Mussoorie",
            href: "https://facebook.com",
          },

          {
            label: "▶ YouTube — @ebcmussoorie",
            href: "https://youtube.com",
          },

          {
            label: "🦉 TripAdvisor — 4.8★ Reviews",
            href: "https://tripadvisor.com",
          },
        ],
      },
    ],
  },

  mapUrl: contacts.addresses[0].mapUrl,
  formData: {
    title: "Have <i>Questions?</i>",
    description: "Contact Us and Start Your Next Adventure!",
  },
};
