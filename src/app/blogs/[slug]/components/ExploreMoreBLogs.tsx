import { CtaBtn } from "@/components/buttons/CtaBtn";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  cta: {
    title: string;
    url: string;
  };
  cards: {
    src: string;
    title: string;
    slug: string;
  }[];
}

const ExploreMoreBLogs: React.FC<Props> = ({ title, cta, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
        <div className="flex items-center justify-between mb-8 md:mb-16">
            <SectionHeading title={title} titleColor="white" />
            <CtaBtn label={cta.title} href={cta.url} type="link" className="rounded-md bg-background-1 text-primary capitalize text-[1.3rem]" />
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <Link
            href={card.slug}
            key={index}
            className="relative block w-full aspect-4/3 md:rounded-3xl overflow-hidden  rounded-xl"
          >
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover p-2 bg-background-1 md:rounded-3xl rounded-xl"
            />
          </Link>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ExploreMoreBLogs;
