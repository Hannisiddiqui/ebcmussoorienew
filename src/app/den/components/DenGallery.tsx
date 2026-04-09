"use client";

// FIX 1: Import useState
import Image from "next/image";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface DenGalleryProps {
  cards: {
    image: string;
    text: string;
  }[];
}

const DenGallery: React.FC<DenGalleryProps> = ({ cards }) => {
  cards = cards.length <= 3 ? [...cards, ...cards] : cards;
  return (
    <SectionWithContainer sectionClassName="bg-primary py-16">
      <div className="relative">
        <SwiperCarousel
          data={cards}
          modules={[Navigation, Autoplay]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          grabCursor
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          renderSlide={(item, index = 0) => (
            <div className="w-full flex flex-col rounded-3xl overflow-hidden p-px bg-white">
              <div
                className={`w-full relative aspect-4/3.5 ${index % 2 !== 0 ? "order-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  className={`object-cover ${index % 2 !== 0 ? "rounded-b-3xl" : "rounded-t-3xl"}`}
                />
              </div>
              <div className="py-6 px-3">
                <p className="text-[1.375rem] text-primary font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          )}
        />
        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 xl:w-[104%] w-full  flex items-center justify-between">
          <button
            className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center box-shadow  prev`}
          >
            <ButtonNext />
          </button>
          <button
            className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center box-shadow rotate-180 next`}
          >
            <ButtonNext />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DenGallery;

export const ButtonNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.97462 16L8 14.8239L2.05075 8L8 1.17612L6.97462 0L0 8L6.97462 16Z"
      fill="#29422C"
    />
  </svg>
);
