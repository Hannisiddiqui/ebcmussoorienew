import FeatureCard, { TFeatureCard } from "@/components/cards/FeatureCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import React from "react";

type ActivitiesProps = {
  title: string;
  cards: TFeatureCard[];
};

const ActivitiesSection = ({ title, cards }: ActivitiesProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      {/* HEADING */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-primary text-2xl leading-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 mt-16">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ActivitiesSection;
