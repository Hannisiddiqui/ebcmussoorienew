// components/blog/BlogSection.tsx

import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import BlogCard, { BlogCardType } from "./cards/BlogCard";

type BlogSectionProps = {
  cards: BlogCardType[];
};

export default function BlogSection({ cards }: BlogSectionProps) {
  return (
    <>
      {/* Cards */}
      <SectionWithContainer>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {cards.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </div>
      </SectionWithContainer>
    </>
  );
}
