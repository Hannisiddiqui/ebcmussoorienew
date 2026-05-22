import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import Image from "next/image";

interface OurStoryProps {
  title: string;
  subTitle: string;
  description: string[];
  link: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

const OurStory: React.FC<OurStoryProps> = ({
  title,
  subTitle,
  description,
  link,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="grid lg:grid-cols-2 items-center gap-8">
        <div className="flex flex-col gap-6">
          <p className="text-secondary font tracking-wider uppercase">{subTitle} </p>
          <SectionHeading2 title={title} />
          <div className="space-y-3">
            {description.map((item, index) => (
              <p key={index} className="text-light">
                {item}
              </p>
            ))}
          </div>
          <LinkButton
            href={link.href}
            label={link.label}
            className="text-secondary w-fit rounded-sm"
          />
        </div>
        <div className="relative w-full aspect-4/3 ">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 right-4 z-20 w-fit text-xl p-2 font-primary bg-secondary flex items-center justify-center rounded-sm overflow-hidden">
            {image.alt}
          </span>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurStory;
