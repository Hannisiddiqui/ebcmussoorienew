"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface DenHeroProps {
  images: string[];
}

const DenHero: React.FC<DenHeroProps> = ({ images }) => {
  return (
    <Section
      className=" py-1 relative overflow"
      defaultPadding={false}
    >
      <div className="w-full md:aspect-4/2 aspect-4/3 relative overflow-hidden">
        <Image
          src={images[0]}
          alt="The Den hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="h-full"
        renderSlide={(image) => (
          <div className="w-full md:aspect-4/2 aspect-4/3 relative overflow-hidden">
            <Image
              src={image}
              alt="The Den hero"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      /> */}
    </Section>
  );
};

export default DenHero;
