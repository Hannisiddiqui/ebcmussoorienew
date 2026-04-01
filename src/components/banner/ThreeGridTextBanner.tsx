import Image from "next/image";
import { Section } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeading";

interface ThreeGridTextBannerProps {
  title: string;
  description: string;
  images: string[];
}

const ThreeGridTextBanner: React.FC<ThreeGridTextBannerProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Section defaultPadding={false}>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="w-full relative lg:aspect-4/4.75 aspect-square">
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </div>
        <div className="w-full bg-background-1 flex flex-col items-center justify-center gap-6 xl:px-17 md:px-6 px-4 py-8">
          <SectionHeading title={title} textCenter level={1} />
          <p className="text-[1.375rem] text-[#686868] text-center">{description}</p>
        </div>
        <div className="w-full relative lg:aspect-4/4.75 aspect-square">
          <Image src={images[1]} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Section>
  );
};

export default ThreeGridTextBanner;
