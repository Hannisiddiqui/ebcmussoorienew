import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeading";
import { CtaBtn } from "../buttons/CtaBtn";

interface AdventuresSectionProps {
  title: string;
  description: string[];
  image: string;
  link?: {
    label: string;
    href: string;
  };
}
const AdventuresSection: React.FC<AdventuresSectionProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="absolute lg:left-1/2 left-0 bg-background-1 lg:w-1/2 w-full z-[-2] inset-y-0 transform  border-l border-primary" />

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="relative aspect-4/3 w-full md:w-[90%] lg:block hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover md:rounded-3xl rounded-2xl"
          />
        </div>
        <div className="flex flex-col lg:gap-4 gap-8 lg:p-6 lg:ml-10">
          <SectionHeading title={title} />
          <div className="relative aspect-4/3 w-full lg:hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover md:rounded-3xl rounded-2xl"
            />
          </div>
          <div className="text-gray-600 mb-4">
            {description.map((desc, index) => (
              <p key={index} className="md:text-[1.375rem] text-light">
                {desc}
              </p>
            ))}
          </div>
          {link && (
            <CtaBtn
              type="link"
              label={link.label}
              href={link.href}
              className="w-fit rounded-md text-primary font-primary text-lg"
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 flex justify-between items-center z-10">
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/green-tree.png"
            alt="tree"
            fill
            className="object-contain scale-x-[-1]"
          />
        </div>
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/green-tree.png"
            alt="tree"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AdventuresSection;
