import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import Link from "next/link";

interface OurGuestsProps {
  title: string;
  description: string;
  testimonials: {
    title: string;
    subtle: string;
  }[];
}

const OurGuests: React.FC<OurGuestsProps> = ({
  title,
  description,
  testimonials,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <SectionHeading2 title={title} description={description} textCenter />
      <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-16 gap-8 mt-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 text-white bg-[#162218] p-6 rounded-md"
          >
            <div className="text-secondary">★★★★★</div>
            <p className="text-white italic font-primary text-lg! tracking-wide">{item.subtle}</p>
            <p className="font-primary text-lg text-white font-semibold ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <LinkButton
        href="https://www.tripadvisor.in/Hotel_Review-g297689-d23292009-Reviews-Everest_Base_Camp_Mussoorie-Mussoorie_Dehradun_District_Uttarakhand.html"
        label="View All Reviews on TripAdvisor"
        className="bg-transparent w-fit mx-auto mt-8 text-secondary  rounded-sm uppercase"
      ></LinkButton>
    </SectionWithContainer>
  );
};

export default OurGuests;
