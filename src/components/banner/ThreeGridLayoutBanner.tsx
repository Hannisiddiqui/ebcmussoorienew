import { BannerProps } from "@/@types/@types";
import Image from "next/image";
import { Section } from "../sectionComponants";
import BannerSlider from "./BannerSlider";

const ThreeGridLayoutBanner: React.FC<BannerProps> = ({ title, images }) => {
  return (
    <Section defaultPadding={false} className="overflow-hidden lg:py-1 py-0.5">
      <div className="md:grid hidden md:grid-cols-3 gap-1 ">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-4/4.75 relative overflow-hidden"
          >
            <Image
              src={item}
              alt={"hero-image-" + index}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`w-full object-cover hover:scale-110 duration-1000 transition ease-linear`}
            />
          </div>
        ))}
      </div>
      <BannerSlider images={images} />
    </Section>
  );
};

export default ThreeGridLayoutBanner;
