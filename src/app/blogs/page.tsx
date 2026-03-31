import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { blogPagedata } from "./components/pageData";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <SectionWithContainer>
        <SectionHeading
          title={blogPagedata.banner.title}
          level={1}
          textCenter
        />
        <p className="text-[#686868] md:text-[1.375rem] font-medium text-center mt-4">
          {blogPagedata.banner.description}
        </p>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-primary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {blogPagedata.cards.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="relative block w-full aspect-4/3 md:rounded-3xl overflow-hidden  rounded-xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover p-2 bg-background-1 md:rounded-3xl rounded-xl"
              />
            </Link>
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}
