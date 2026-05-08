import { ExperienceProps } from "@/@types/@homeType";
import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import ExperienceNewCard from "./cards/ExperienceNewCard";
import ExperienceNewSlider from "./sliders/ExperienceNewSlider";

const ExperienceNew: React.FC<ExperienceProps> = ({
  title,
  description,
  image,
  link,
  items,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full xl:aspect-16/8 lg:aspect-16/14 md:aspect-[4/5.5] aspect-[4/7.5]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute z-10 inset-0 bg-black/70" />
      <Section className="absolute inset-0 flex items-center justify-center z-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            title={title}
            textCenter
          />
          <div className="md:grid stagger hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {items.map((item, index) => (
              <ExperienceNewCard key={index} {...item} />
            ))}
          </div>
          <ExperienceNewSlider items={items} />
          {/* <LinkButton
            href={link.href}
            label={link.label}
            className="bg-new-secondary w-fit mx-auto xl:px-40 text-new-dark rounded-sm border-none"
            target="_blank"
          /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 max-w-2xl w-full mx-auto">
           
            
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default ExperienceNew;
