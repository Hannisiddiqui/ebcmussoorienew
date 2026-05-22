import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

interface RoomsFeaturesProps {
  title: string;
  featuresCards: {
    icon: string;
    title: string;
  }[];
}

const RoomsFeatures: React.FC<RoomsFeaturesProps> = ({
  title,
  featuresCards,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-[#162218]"
      containerClassName="md:space-y-16 space-y-10"
    >
      <SectionHeading2 title={title} textCenter />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {featuresCards.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 border-[1px] border-[#C8A46B]/20 rounded-md text-lg font-medium tracking-[0.15em] text-[#C8A46B] text-center py-6 px-4 bg-[#1E2E21]"
          >
            <span className="text-5xl text-white">{feature.icon}</span>
            <span className="font-primary">{feature.title}</span>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default RoomsFeatures;
