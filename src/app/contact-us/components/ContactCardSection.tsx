// components/contact/ContactCardsSection.tsx

import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import ContactCard from "./cards/ContactCard";

export type ContactCardType = {
  title: string;
  description?: string;
  badge?: string;
  contact?: string;
  availability?: string;
  button: {
    type: "button" | "link";
    label: string;
    href: string;
  };
  icon?: string | React.ReactNode;
};

type ContactCardSectionProps = {
  title?: string;
  subTitle?: string;
  description?: string;
  cards: ContactCardType[];
};

export default function ContactCardsSection({
  title,
  subTitle,
  description,
  cards,
}: ContactCardSectionProps) {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center text-center gap-4">
        <span className="uppercase tracking-[0.2em] text-primary text-sm">
          {title}
        </span>

        <SectionHeading
          level={1}
          title={subTitle}
          titleClassName="text-white"
        />

        <p className="text-[#B7B7B7] max-w-xl">{description}</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
        {cards?.length > 0 &&
          cards?.map((card, index) => (
            <ContactCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              contact={card.contact}
              availability={card.availability}
              badge={card.badge}
              button={card.button}
            />
          ))}
      </div>
    </SectionWithContainer>
  );
}
