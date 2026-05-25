import { CtaBtn } from "@/components/buttons/CtaBtn";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";

interface DineSectionProps {
  title: string;
  description: string[];
  image: string;
  link: {
    label: string;
    href: string;
  };
}

const DineSection: React.FC<DineSectionProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8">
        <div className="w-full lg:block hidden relative aspect-4/3.75 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <SectionHeading title={title} titleColor="white" smTextCenter />
          <div className="w-full lg:hidden relative aspect-4/3.75 overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          {description.map((item, index) => (
            <p
              key={index}
              className="text-light max-lg:text-center font- text-lg "
            >
              {item}
            </p>
          ))}
          <CtaBtn
            label={link.label}
            href={link.href}
            type="link"
            target="_blank"
            icon="direction"
            iconClass="bg-transparent!"
            rel="noopener noreferrer"
            className="text-white bg-transparent max-lg:mx-auto text-lg rounded-lg w-fit font-primary border-white"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DineSection;
