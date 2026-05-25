import ThreeGridLayoutBanner from "@/components/banner/ThreeGridLayoutBanner";
import Form3 from "@/components/forms/Form3";
import { Container, Section } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";

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
        <div className="mt-8">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-white/75 text-center font-medium md:text-lg"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-8">
          <div>
            <Form3 />
          </div>
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-4/2.25 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* <div className="bg-background-1">
        <ThreeGridLayoutBanner images={images} />
      </div> */}
    </Section>
  );
};

export default MilestoneSection;
