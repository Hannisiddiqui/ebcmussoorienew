"use client";
import Image from "next/image";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";

type ImageItem = {
  title?: string;
  src: string;
};

type ImagesProp = (ImageItem | string)[];

type Props = {
  images: ImagesProp;
  aspectRatio?: string;
  btnName?: string;
};

const SingleImageSlider: React.FC<Props> = ({
  images,
  aspectRatio,
  btnName,
}) => {
  const buttonNextClassName = btnName
    ? btnName
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-") + "button-next"
    : "button-next";
  const buttonPrevClassName = btnName
    ? btnName
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-") + "button-prev"
    : "button-prev";
  return (
    <div className="w-full relative block">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay, Navigation]}
        centeredSlides
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: "." + buttonNextClassName,
          prevEl: "." + buttonPrevClassName,
        }}
        renderSlide={(image) => {
          const src = typeof image === "string" ? image : image.src;
          const title = typeof image === "string" ? "hero-image" : image.title;

          return (
            <div
              className={`w-full relative ${aspectRatio || "md:aspect-4/3.25"} aspect-square`}
            >
              <Image
                src={src}
                alt={title || "hero-image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full object-cover rounded-3xl"
              />
            </div>
          );
        }}
      />
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 z-10 xl:w-[108%] w-full  flex items-center justify-between">
        <button
          className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center box-shadow rotate-180 ${buttonPrevClassName}`}
        >
          <ButtonNext />
        </button>
        <button
          className={`w-12 aspect-square rounded-full bg-background-1 flex items-center justify-center box-shadow ${buttonNextClassName}`}
        >
          <ButtonNext />
        </button>
      </div>
    </div>
  );
};

export default SingleImageSlider;

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
