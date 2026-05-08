import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { SectionHeading2 } from "../../../../components/typography/SectionHeading2";
import Link from "next/link";

interface AboutUsProps {
  title: string;
  description: string;
  image: string;
  links: {
    label: string;
    href: string;
  }[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  title,
  description,
  image,
  links,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-[#070C08]"
      containerClassName="grid md:grid-cols-2 grid-cols-1 gap-6 items-center"
    >
      <div className="flex flex-col gap-4">
        <SectionHeading2 title={title} description={description} />
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={links[0].href || "#"}
            target="_blank"
            className="bg-[#C8A46B] rounded-md px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#d8b47b]"
          >
            {links[0].label}
          </Link>
          <Link
            href={links[1].href || "#"}
            className="border border-[#C8A46B] rounded-md px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#C8A46B] transition-all duration-300 hover:bg-[#C8A46B] hover:text-black"
          >
            {links[1].label}
          </Link>
        </div>
      </div>
      <div className="w-full relative aspect-4/2.75 ">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </SectionWithContainer>
  );
};

export default AboutUs;
