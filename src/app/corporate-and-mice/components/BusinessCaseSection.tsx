"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { TestimonialCard } from "./cards/TestimonialCard";
import { CapacityCard } from "./cards/CapacityCard";

export type BusinessCaseSectionProps = {
  title: string;
  subTitle: string;
  description: string;
  testimonials: {
    name: string;
    message: string;
    reviews: {
      rating: number;
    };
  }[];
  capacity: {
    title: string;
    highlights: string[];
  };
};

export const BusinessCaseSection = ({
  title,
  subTitle,
  description,
  testimonials,
  capacity,
}: BusinessCaseSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="grid grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h2 className="text-base uppercase text-secondary tracking-widest">
            {title}
          </h2>

          <h3 className="md:text-5xl  text-2xl text-white font-primary">
            {subTitle}
          </h3>

          <p className="text-lg leading-10 text-neutral-400">{description}</p>
        </div>

        <div className="space-y-4">
          <div>
            <SwiperCarousel
              data={testimonials}
              renderSlide={(item, index) => (
                <TestimonialCard key={index} testimonial={item} />
              )}
            />
          </div>

          <div>
            <CapacityCard capacity={capacity} />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};
