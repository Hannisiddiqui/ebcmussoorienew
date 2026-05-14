// components/contact/ContactHeroSection.tsx

import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";

type ContactHeroSectionProps = {
  title: string;
  subTitle: string;
  description: string;
};

export default function ContactHeroSection({
  title,
  subTitle,
  description,
}: ContactHeroSectionProps) {
  return (
    <Section className="bg-primary max-md:pt-26 lg:pt-30!">
      <Container className="">
        <div className="flex flex-col gap-6 w-full">
          <span className="uppercase text-secondary text-sm">{title}</span>

          <SectionHeading
            level={1}
            title={subTitle}
            titleClassName="text-white xl:text-[4rem] lg:text-[3.25rem] md:text-[2.8rem] text-[2.2rem] leading-[1.1]"
          />

          <p className="text-[#A0A0A0] text-sm md:text-base">{description}</p>
        </div>
      </Container>
    </Section>
  );
}
