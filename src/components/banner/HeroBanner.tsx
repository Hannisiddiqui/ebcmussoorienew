import Image from "next/image";
import React from "react";
import { Container, SectionWithContainer } from "../sectionComponants";

type BannerSectionProps = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
};

const HeroBanner = ({
  title,
  subTitle,
  description,
  image,
}: BannerSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="relative overflow-hidden w-full lg:aspect-16/6 md:aspect-4/2.5 aspect-square">
      {/* BACKGROUND IMAGE */}
      <div className="w-full h-full">
        <Image src={image} alt="Banner Image" fill className="object-cover" />
      </div>

      {/* TOP GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-r from-ternary/70  to-ternary/30" />
      {/* CONTENT */}
      <div className="absolute inset-0 flex w-full items-end pb-16">
        <Container className="space-y-4">
          {/* SMALL TITLE */}
          <h1 className="text-sm uppercase bg-secondary/30 text-secondary w-fit px-2 py-1 rounded-sm tracking-widest">
            {title}
          </h1>

          {/* MAIN HEADING */}
          <h2 className="font-primary text-4xl text-white md:text-7xl">
            {subTitle}
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
            {description}
          </p>

          {/* OPTIONAL BUTTONS */}
          {/* <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-yellow-400 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-yellow-300">
                Explore Retreats
              </button>

              <button className="border border-white/30 bg-white/5 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div> */}
        </Container>
      </div>
    </SectionWithContainer>
  );
};

export default HeroBanner;
