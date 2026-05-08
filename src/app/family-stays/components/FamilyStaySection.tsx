import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import React from "react";

type FamilyStaySectionProps = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
};

const FamilyStaySection = ({
  title,
  subTitle,
  description,
  image,
}: FamilyStaySectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="grid lg:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h2 className="text-base uppercase text-secondary tracking-widest">
            {title}
          </h2>

          <h3 className="md:text-5xl  text-2xl text-white font-primary">
            {subTitle}
          </h3>

          <p className="text-lg leading-10 text-neutral-400">{description}</p>
        </div>

        <div className="relative w-full md:aspect-4/3 aspect-square">
          <Image src={image} alt="Room Image" fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FamilyStaySection;
