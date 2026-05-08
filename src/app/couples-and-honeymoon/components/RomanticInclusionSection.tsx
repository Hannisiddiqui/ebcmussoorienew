import React from "react";
import { SectionWithContainer } from "@/components/sectionComponants";
import { RomanticInclusionCard } from "./cards/RomanticInclusionCard";

type RomanticInclusionSectionProps = {
  title: string;
  subTitle: string;

  cards: {
    id: number;
    icon: string;
    title: string;
  }[];
};

const RomanticInclusionSection = ({
  title,
  subTitle,
  cards,
}: RomanticInclusionSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#07150F] py-24">
      {/* HEADING */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="font-primary text-4xl font-semibold text-white md:text-5xl">
          {title}
        </h2>

        <p className="mt-5 text-neutral-400 leading-8">{subTitle}</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <RomanticInclusionCard
            key={card.id}
            icon={card.icon}
            title={card.title}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default RomanticInclusionSection;
