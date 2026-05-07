// components/blog/BlogCard.tsx

import Image from "next/image";
import Link from "next/link";

export type BlogCardType = {
  id: number;
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  buttonLabel: string;
};

type BlogCardProps = {
  card: BlogCardType;
};

export default function BlogCard({ card }: BlogCardProps) {
  return (
    <Link
      href={card.slug}
      className="group border border-secondary/30 bg-primary  overflow-hidden rounded-md transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-4/1.5 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-8 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="w-fit bg-secondary/20 text-secondary uppercase text-xs px-2 py-1 rounded-xs">
            {card.category}
          </h2>

          <span className="text-[#8A8A8A] text-sm">{card.date}</span>

          <h3 className="text-white text-base leading-[1.3] font-serif">
            {card.title}
          </h3>

          <p className="text-[#7D7D7D] leading-relaxed text-sm">
            {card.description}
          </p>
        </div>

        <div>
          <button className="items-center border-2 border-secondary text-secondary rounded-sm px-5 py-3 text-xs  tracking-[0.15em] uppercase transition-all duration-300">
            {card.buttonLabel} →
          </button>
        </div>
      </div>
    </Link>
  );
}
