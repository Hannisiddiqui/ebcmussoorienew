"use client";
import { BannerProps } from "@/@types/@types";
import SwiperCarousel from "../slider/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const BannerSlider: React.FC<
  {
    images: BannerProps["images"];
  } & { wrapperClassName?: string }
> = ({ images, wrapperClassName="md:hidden block" }) => {
  return (
    <div
      className={`block w-full overflow-hidden ${wrapperClassName}`}
    >
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={4}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        renderSlide={(image) => (
          <div className="w-full aspect-4/3.5 relative">
            <Image
              src={image}
              alt={"hero-image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full object-cover"
            />
          </div>
        )}
      />
    </div>
  );
};

export default BannerSlider;
