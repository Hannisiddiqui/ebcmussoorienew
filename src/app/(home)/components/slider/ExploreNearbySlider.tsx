"use client";
import { ExploreNearbyProps } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const ExploreNearbySlider: React.FC<{ cards: ExploreNearbyProps["cards"] }> = ({
  cards,
}) => {
  return (
    <div className="w-full block relative">
      <SwiperCarousel
        data={cards}
        modules={[Navigation, Autoplay]}
        loop
        navigation={{
          nextEl: ".nearby-next",
          prevEl: ".nearby-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
        }}
        renderSlide={(card) => <ExploreNearbyCard {...card} />}
      />
      <div className="absolute top-1/2 left-[-45%] -translate-x-[-45%] -translate-y-1/2 z-10 max-w-[61rem] w-full flex items-center justify-between">
        <button
          className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center rotate-180 nearby-prev`}
        >
          <ButtonNext />
        </button>
        <button
          className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center nearby-next`}
        >
          <ButtonNext />
        </button>
      </div>
    </div>
  );
};

export default ExploreNearbySlider;

export const ButtonNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02538 16L0 14.8239L5.94925 8L0 1.17612L1.02538 0L8 8L1.02538 16Z"
      fill="#29422C"
    />
  </svg>
);

export const ExploreNearbyCard: React.FC<ExploreNearbyProps["cards"][0]> = ({
  distance,
  placeDetails,
  placeImage,
  placeName,
}) => {
  return (
    <div className="bg-background-1 rounded-4xl overflow-hidden">
      <div className="w-full md:aspect-4/3.5 aspect-square relative">
        <Image src={placeImage} alt={placeName} fill className="object-cover" />
        <div className="absolute top-4 left-4 p-3 rounded-full divide-x divide-primary bg-background-1 shadow-inner flex items-center">
          {distance.map((item, index) => (
            <div
              className={`flex items-center gap-2 ${index === 0 ? "pr-3" : "pl-3"}`}
              key={index}
            >
              <span className="font-secondary">{item.icon}</span>
              <span>{item.miter}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-5 min-h-52">
        <h3 className="uppercase text-2xl font-primary-ultralight font-extralight text-primary">
          {placeName}
        </h3>
        <p className="text-primary text-[1.375rem]">{placeDetails}</p>
      </div>
    </div>
  );
};
