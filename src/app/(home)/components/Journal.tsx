import BlogCard, { BlogCardType } from "@/app/blogs/components/cards/BlogCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

interface JournalProps {
  title: string;
  description: string;
  blogs: BlogCardType[];
}
const Journal: React.FC<JournalProps> = ({ title, description, blogs }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#162218]" containerClassName="md:space-y-12 space-y-10">
      <SectionHeading2 title={title} description={description} textCenter />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {blogs.map((card, index) => (
          <BlogCard key={index} card={card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Journal;
