import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import React from "react";

interface ExperienceProps {
  title: string;
  items: {
    title: string;
    description: string[];
    image: string;
  }[];
}
const Experience: React.FC<ExperienceProps> = ({ items: card, title }) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <SectionHeading titleClassName="text-center" title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {card?.map((item, index) => (
          <div key={index}>
            <div className="w-full md:aspect-4/3 aspect-4/3 relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className=" bg-primary  p-4">
              <p
                className="text-lg md:text-2xl font-semibold font-primary mb-2 text-white"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              {item.description.map((desc: string, idx: number) => (
                <p key={idx} className="text-white/70 mb-3">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Experience;
