import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import BlogSection from "./components/BlogSection";
import BlogSocialSection from "./components/BlogSocialSection";
import { blogPagedata } from "./components/pageData";

export default function BlogPage() {
  return (
    <main className="pb-6">
      <HeroHeaderSection {...blogPagedata?.banner} />
      <BlogSection cards={blogPagedata?.cards} />
      <BlogSocialSection {...blogPagedata.socialSection} />
      {/* <SectionWithContainer>
        <SectionHeading
          title={blogPagedata.banner.title}
          level={1}
          textCenter
        />
        <p className="text-[#686868] md:text-[1.375rem] font-medium text-center mt-4">
          {blogPagedata.banner.description}
        </p>
      </SectionWithContainer> */}

      {/* <SectionWithContainer sectionClassName="bg-primary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {blogPagedata.cards.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="relative block w-full aspect-4/3 rounded-3xl overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover p-2 bg-background-1 rounded-3xl"
              />
            </Link>
          ))}
        </div>
      </SectionWithContainer> */}
    </main>
  );
}
