import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";

interface ExperienceSectionProps {
  title: string;
  description: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  description,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary relative"
      containerClassName="md:max-w-[65rem]! max-md:py-6"
    >
      <SectionHeading title={title} textCenter titleColor="white" />
      <p className="text-[1.375rem] text-center text-white mt-4">
        {description}
      </p>
      <div className="absolute bottom-0 inset-x-0 flex justify-between items-center">
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/white-tree.png"
            alt="tree"
            fill
            className="object-contain scale-x-[-1]"
          />
        </div>
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/white-tree.png"
            alt="tree"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ExperienceSection;
