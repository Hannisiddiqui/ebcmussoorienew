import { CtaBtn } from "@/components/buttons/CtaBtn";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface DiningSectionProps {
  image: string;
  link: {
    label: string;
    href: string;
  };
}

const DiningSection: React.FC<DiningSectionProps> = ({ image, link }) => {
  return (
    <Section defaultPadding={false}>
      <div className="relative w-full aspect-[4/1.95]">
        <Image
          src={image}
          alt="Dining Experience"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-white/30 backdrop-blur-xs">
          <div className="absolute inset-2 bg-transparent border border-white z-10 rounded-[56px] overflow-hidden">
            <div className="relative w-full h-full aspect-auto">
              <Image
                src={image}
                alt="Dining Experience"
                fill
                className="object-cover"
              />
              <CtaBtn
                type="link"
                href={link.href}
                className="absolute bottom-6 right-10 z-20 bg-background-1 border-none text-primary rounded-lg font-primary"
                label={link.label}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DiningSection;
