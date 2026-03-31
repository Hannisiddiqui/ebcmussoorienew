import blogData from "./blogData";

export const blogPagedata = {
  banner: {
    title: "Explore Our <i>Blogs!</i>",
    description:
      "Dive into stories of adventure, travel tips, and hidden gems from the heart of Mussoorie’s hills. Get inspired with insights on luxury camping, trekking trails, and unforgettable Himalayan experiences at EBC, Mussoorie!",
  },
  cards: blogData.map((card) => ({
    id: card.id,
    link: card.slug,
    image: card.image,
    title: card.title,
  })),
};
