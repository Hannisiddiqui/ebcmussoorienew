import { FaStar } from "react-icons/fa";
import { BusinessCaseSectionProps } from "../BusinessCaseSection";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: BusinessCaseSectionProps["testimonials"][0];
}) => {
  return (
    <div className="bg-primary border border-secondary/30 rounded-sm p-12 flex flex-col justify-between ">
      <div className="space-y-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.reviews.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>

        <p className="text-neutral-300 leading-8 text-sm md:text-base italic">
          “{testimonial.message}”
        </p>

        <p className="text-gray-300 text-lg">{testimonial.name}</p>
      </div>
    </div>
  );
};
