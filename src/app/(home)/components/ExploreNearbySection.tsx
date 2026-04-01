import { ExploreNearbyProps } from "@/@types/@homeType";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import { Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import ExploreNearbySlider from "./slider/ExploreNearbySlider";

const ExploreNearbySection: React.FC<ExploreNearbyProps> = ({
  title,
  image,
  cards,
  description,
  link,
}) => {
  return (
    <Section className="bg-primary ">
      <div className="grid lg:grid-cols-7 max-xl:px-4 grid-cols-1 items-center gap-10 ml-auto max-w-[89rem]">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="relative w-46 aspect-[4/1.67]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <SectionHeading title={title} titleColor="white" />
          <p className="md:text-[1.375rem] text-white">{description}</p>
          <div className="lg:col-span-5 lg:hidden">
          <ExploreNearbySlider cards={cards} />
        </div>
          <CtaBtn
            label={link.label}
            href={link.href}
            type="link"
            className="text-white bg-transparent rounded-lg w-fit font-primary border-white"
          />
        </div>
        <div className="lg:col-span-5 lg:block hidden">
          <ExploreNearbySlider cards={cards} />
        </div>
      </div>
    </Section>
  );
};

export default ExploreNearbySection;
