"use client";

import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";

interface ContentSliderProps {
  testimonials: { title: string; subtle: string }[];
}
const ContentSlider: React.FC<ContentSliderProps> = ({ testimonials }) => {
  return (
    <div className="w-full lg:mt-8">
      <SwiperCarousel
        data={testimonials}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        renderSlide={(card) => (
          <div className="flex flex-col gap-2">
            <p className="text-[1.125rem]">{card.subtle}</p>
            {/* <p className="text-[1.375rem] font-bold">{card.title}</p> */}
          </div>
        )}
      />
    </div>
  );
};

export default ContentSlider;
