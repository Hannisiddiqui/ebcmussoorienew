import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";

interface IntroSectionProps {
  title: string;
  description: string[];
  image: string;
  contentWrapperClassName?: string;
  quote?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  description,
  image,
  contentWrapperClassName = "",
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div
        className={`flex flex-col items-center justify-center gap-6 md:gap-12 mx-auto ${contentWrapperClassName}`}
      >
        <h2
          className="text-3xl lg:text-6xl/tight font-extralight text-center font-primary text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <div className="relative w-full max-w-3xl aspect-4/1 mx-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-auto rounded-lg"
          />
        </div>
        {description.map((desc, index) => (
          <p key={index} className="text-white md:text-[1.375rem] text-center">
            {desc}
          </p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default IntroSection;
