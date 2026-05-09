// components/contact/ContactHeroSection.tsx

import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";

type HeroHeaderSectionProps = {
  title: string;
  subTitle: string;
  description: string;
};

export default function HeroHeaderSection({
  title,
  subTitle,
  description,
}: HeroHeaderSectionProps) {
  return (
    <Section className="bg-[#162218]">
      <Container className="">
        <div className="flex flex-col gap-6 w-full lg:pt-16">
          <span className="uppercase text-secondary text-sm">{title}</span>

          <SectionHeading
            level={1}
            title={subTitle}
            titleClassName="text-white lg:text-6xl md:text-4xl leading-[1.1]"
          />

          <p className="text-[#A0A0A0] text-sm md:text-base">{description}</p>
        </div>
      </Container>
    </Section>
  );
}
