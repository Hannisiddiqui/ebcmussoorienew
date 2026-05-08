import FeatureCard from "@/components/cards/FeatureCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

interface DayTripsProps {
  title: string;
  description: string;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const DayTrips: React.FC<DayTripsProps> = ({ title, description, items }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#162218]" containerClassName="md:space-y-12 space-y-10" >
      <SectionHeading2 title={title} description={description} textCenter />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default DayTrips;
