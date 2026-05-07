import blogData from "./blogData";

export const blogPagedata = {
  banner: {
    title: "From Our Journal",
    subTitle: `From Our Journal — Stories & Guides from EBC Mussoorie`,
    description:
      "Travel guides, glamping tips and resort stories published monthly",
  },
  cards: blogData.map((blog) => ({
    id: blog.id,
    slug: `/blogs/${blog.slug}`,
    image: blog.image,
    category: blog.Category,
    date: blog.date,
    title: blog.title.replace(/\n/g, "").trim(),
    description: blog.subtitle?.slice(0, 140) + "...",
    buttonLabel: "READ MORE",
  })),
  // cards: blogData.map((card) => ({
  //   id: card.id,
  //   link: card.slug,
  //   image: card.image,
  //   title: card.title,
  // })),

  socialSection: {
    title: "Publishing New Stories Every Month",
    description:
      "Publishing new stories every month. Follow us on Instagram for daily updates from the resort.",

    buttons: [
      {
        label: "FOLLOW @EBCMUSSOORIE",
        href: "https://www.instagram.com/ebcmussoorie",
        variant: "primary",
      },
      {
        label: "FOLLOW ON FACEBOOK",
        href: "https://www.facebook.com",
        variant: "outline",
      },
    ],
  },
};
