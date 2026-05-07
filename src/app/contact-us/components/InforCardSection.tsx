// components/contact/InfoCardsSection.tsx

import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import InfoCard from "./cards/InfoCard";

type InfoCardType = {
  title: string;

  content?: string[];

  button?: {
    label: string;
    href: string;
  };

  socialLinks?: {
    label: string;
    href: string;
  }[];
};

type Props = {
  cards: InfoCardType[];
};

export default function InfoCardsSection({ cards }: Props) {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
}
