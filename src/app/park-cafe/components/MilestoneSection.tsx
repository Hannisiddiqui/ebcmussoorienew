import ThreeGridLayoutBanner from "@/components/banner/ThreeGridLayoutBanner";
import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";

interface MilestoneSectionProps {
  title: string;
  description: string[];
  images: string[];
}

const MilestoneSection: React.FC<MilestoneSectionProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Section className="bg-primary md:space-y-16 space-y-10">
      <Container>
        <SectionHeading title={title} titleColor="white" textCenter />
      </Container>
      <div className="bg-background-1">
        <ThreeGridLayoutBanner images={images} />
      </div>
      <Container>
        <div className="mt-8">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-white text-center font-medium md:text-[1.375rem]"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MilestoneSection;
