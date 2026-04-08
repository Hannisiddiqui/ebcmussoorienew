"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface DenHeroProps {
  images: string[];
}

const DenHero: React.FC<DenHeroProps> = ({ images }) => {
  return (
    <Section className=" py-1 relative overflow" defaultPadding={false} >
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="h-full"
        renderSlide={(image) => (
          <div className="w-full h-[500px] sm:h-[600px] lg:h-[650px] relative overflow-hidden">
            <Image
              src={image}
              alt="The Den hero"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      />

      <div className="absolute inset-0 bg-black/25" />
      {/* <div className="absolute inset-0 flex items-end justify-start">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-10 sm:pb-16">
          <div className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-3">
              Den
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-primary leading-tight">
              The Den
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl">
              Welcome to The Den — a warm intimate lounge at Everest Base Camp Mussoorie where you can relax, connect with friends, and enjoy gourmet bites in a cozy ambience.
            </p>
          </div>
        </div>
      </div> */}
    </Section>
  );
};

export default DenHero;
