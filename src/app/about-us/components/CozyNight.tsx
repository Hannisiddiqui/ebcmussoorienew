import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";

interface CozyNightProps {
  title: string;
  description: string[];
  image: string;
}

const CozyNight: React.FC<CozyNightProps> = ({ title, description, image }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:bg-primary after:z-[-2] after:inset-0 after:absolute">
        <div className={`absolute lg:hidden inset-0 z-[-1] bg-[url('/about-us/experience.png')] bg-cover bg-no-repeat opacity-50`}/>
      <div className="grid lg:grid-cols-[1.2fr_2fr] grid-cols-1 gap-8 md:gap-16">
        <div className="">
          <SectionHeading title={title} titleColor="white" smTextCenter />
          <div className="w-full relative aspect-4/1.5 mt-.5 lg:block hidden">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
        </div>
        <div className="space-y-2">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-white max-lg:text-center font-medium md:text-[1.375rem]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CozyNight;
