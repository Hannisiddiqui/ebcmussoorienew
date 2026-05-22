import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { contacts } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  points: string[];
  pricingTitle: string;
  pricing: string;
  pricingSubTitle: string;
  pricingPoints: string[];
  images: string[];
}

const PerfectForData: React.FC<Props> = ({
  title,
  points,
  pricingTitle,
  pricing,
  pricingSubTitle,
  pricingPoints,
  images,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#070C08]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <SectionHeading2 title={title} />
            <ul className="flex flex-col gap-3 ">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-white/70 pb-3 border-b border-secondary/20"
                >
                  <span className="text-secondary mr-1">✓</span> {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading2 title={pricingTitle} />
            <div className="p-6 flex flex-col gap-6 rounded-md  bg-[#162218] border border-secondary/20">
              <p className="text-secondary font-primary text-2xl">{pricing}</p>
              <p className="text-white/60">{pricingSubTitle}</p>
              <ul className="flex flex-col gap-3 mt-4">
                {pricingPoints.map((point, index) => (
                  <li
                    key={index}
                    className="text-white/80 pb-3 border-b border-secondary/20"
                  >
                    <span className="text-secondary mr-1">✓</span> {point}
                  </li>
                ))}
              </ul>
              <Link
                href={contacts.WhatsAppCta || ""}
                className="border border-[#C8A46B] w-fit rounded-md px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[] transition-all duration-300 bg-[#C8A46B] hover:bg-transparent hover:text-[#C8A46B]"
              >
                Book via WhatsApp {/* {links[1].label} */}
              </Link>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="w-full relative aspect-4/3 ">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default PerfectForData;
