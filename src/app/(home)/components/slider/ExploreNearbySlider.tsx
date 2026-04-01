"use client";
import { ExploreNearbyProps } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const ExploreNearbySlider: React.FC<{ cards: ExploreNearbyProps["cards"] }> = ({
  cards,
}) => {
  return (
    <div className="w-full block overflow-hidden">
      <SwiperCarousel
        data={cards}
        modules={[Navigation]}
        slidesPerView={1.5}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
        }}
        renderSlide={(card) => <ExploreNearbyCard {...card} />}
      />
    </div>
  );
};

export default ExploreNearbySlider;

export const ExploreNearbyCard: React.FC<ExploreNearbyProps["cards"][0]> = ({
  distance,
  placeDetails,
  placeImage,
  placeName,
}) => {
  return (
    <div className="bg-background-1 rounded-4xl overflow-hidden">
      <div className="w-full aspect-4/3.5 relative">
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
