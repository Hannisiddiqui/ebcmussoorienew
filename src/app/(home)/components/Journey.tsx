import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import JourneyCard from "./cards/JourneyCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import LinkButton from "@/components/buttons/LinkButton";
import { contacts } from "@/utils/constant";
import { JourneyProps } from "@/@types/@homeType";

const Journey: React.FC<JourneyProps> = ({
  title,
  description,
  items,
  link,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-ternary"
      containerClassName="md:space-y-12 space-y-10"
    >
      <SectionHeading2 title={title} description={description[0]} textCenter />
      <div className="grid stagger lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <JourneyCard key={index} {...item} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Journey;
