import { AboutSectionProps } from "@/@types/@types";
import { SectionWithContainer } from "../sectionComponants";
import Image from "next/image";
import SectionHeading from "../typography/SectionHeading";
import { CtaBtn } from "../buttons/CtaBtn";
import BannerSlider from "../banner/BannerSlider";

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background-1">
      <div className="grid lg:grid-cols-[2fr_1.2fr] grid-cols-1 gap-6 md:gap-10 items-center">
        {/* Image Grid */}
        <div className="lg:grid hidden grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              className={`relative rounded-3xl overflow-hidden ${index === 2 ? "lg:col-span-2 w-[90%] aspect-4/2 mx-auto" : index === 0 ? "w-full aspect-4/2.5 mt-auto" : "w-full aspect-4/3"}`}
              key={index}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Text Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <SectionHeading title={title} smTextCenter />
          <BannerSlider images={images} wrapperClassName="lg:hidden block rounded-3xl" />
          <div className="flex flex-col gap-5">
            {description.map((para, index) => (
              <p
                key={index}
                className="text-lg max-md:text-center md:text-[1.375rem] font-medium text-light"
              >
                {para}
              </p>
            ))}
          </div>
          <CtaBtn
            label={link.label}
            href={link.href}
            type="link"
            className="font-primary w-fit border-primary text-primary rounded-lg md:text-xl"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
