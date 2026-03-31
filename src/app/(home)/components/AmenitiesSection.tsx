import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
interface AmenitiesSectionProps {
  amenities: {
    title: string;
    description: string;
    image: string;
  }[];
}
const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-background-1 flex items-center justify-center flex-col gap-2 md:p-6 p-5 md:rounded-[56px] rounded-3xl box-shadow"
          >
            <div className="relative w-35 md:w-45 aspect-square">
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl md:text-[2.125rem] font-primary font-extralight mt-4">{amenity.title}</h3>
            <p className="text-light text-center text-[1.375rem]">{amenity.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default AmenitiesSection;
