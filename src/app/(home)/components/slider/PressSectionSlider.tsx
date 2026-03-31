"use client";

import { PressSectionProps } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const PressSectionSlider: React.FC<{ links: PressSectionProps["links"] }> = ({
  links,
}) => {
  return (
    <div className="w-full mt-8">
      <SwiperCarousel
        data={links}
        slidesPerView={1}
        spaceBetween={12}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        speed={900}
        renderSlide={(card) => <PressSectionCard {...card} />}
      />
    </div>
  );
};

export default PressSectionSlider;

export const PressSectionCard: React.FC<PressSectionProps["links"][0]> = ({
  backImage,
  src,
  name,
  link,
}) => {
  return (
    <div className="relative w-full aspect-4/3 bg-black rounded-2xl overflow-hidden">
      <Image src={backImage} alt={name} fill className="object-cover" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Link href={link} className="relative aspect-4/1.5 w-45 bg-background-1 flex items-center justify-center rounded-2xl overflow-hidden">
          <Image src={src} alt={name} fill className="object-contain py-2" />
        </Link>
      </div>
    </div>
  );
};
