"use client";
import { TestimonialCard } from "@/app/corporate-and-mice/components/cards/TestimonialCard";
import {
  Container,
  SectionWithContainer,
} from "@/components/sectionComponants";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import React from "react";

type TestimonialProps = {
  testimonials: {
    name: string;
    message: string;
    reviews: {
      rating: number;
    };
  }[];
};

const TestimonialSection = ({ testimonials }: TestimonialProps) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-ternary pb-6"
      defaultPadding={false}
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <SwiperCarousel
          data={testimonials}
          renderSlide={(item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          )}
        />

        <div className="flex justify-center mt-5">
          <button className="bg-secondary text-ternary text-lg px-8 py-3 rounded-sm">
            Plan Your Romantic Escape
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TestimonialSection;
