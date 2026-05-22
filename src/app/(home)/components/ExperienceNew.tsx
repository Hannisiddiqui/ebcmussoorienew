import { ExperienceProps } from "@/@types/@homeType";
import FeatureCard from "@/components/cards/FeatureCard";
import {
  Container,
  SectionWithContainer
} from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";

const ExperienceNew: React.FC<ExperienceProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#162218]">
      {/* <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      /> */}

      <Container className="flex flex-col gap-8">
        <SectionHeading title={title} textCenter />

        <p className="text-center text-white/60">{description}</p>
        <div className="md:grid stagger hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* {items.map((item, index) => (
              <ExperienceNewCard key={index} {...item} />
            ))} */}

          {items.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
        {/* <ExperienceNewSlider items={items} /> */}
        {/* <LinkButton
            href={link.href}
            label={link.label}
            className="bg-new-secondary w-fit mx-auto xl:px-40 text-new-dark rounded-sm border-none"
            target="_blank"
          /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 max-w-2xl w-full mx-auto"></div>
      </Container>
    </SectionWithContainer>
  );
};

export default ExperienceNew;
