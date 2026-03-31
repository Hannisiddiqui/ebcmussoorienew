import Image from "next/image";
import { Section } from "../sectionComponants";
import BannerSlider from "./BannerSlider";

interface FiveLayoutGridBannerProps {
  images: string[];
}

const FiveLayoutGridBanner: React.FC<FiveLayoutGridBannerProps> = ({
  images,
}) => {
  const gridPattern = [
    "col-span-3 row-span-1",
    "col-span-4 row-span-2",
    "col-span-3 row-span-1",
    "col-span-3 row-span-1",
  ];
  return (
    <Section defaultPadding={false} className="overflow-hidden p-1" >
      <div className="md:grid hidden grid-cols-10 lg:auto-rows-[18.5rem] auto-rows-[14rem] grid-flow-row overflow-hidden gap-1">
        {images.map((item, index) => (
          <div
            key={index}
            className={`w-full aspect-auto h-full relative overflow-hidden cursor-pointer ${gridPattern[index % gridPattern.length]}`}
          >
            <Image
              src={item}
              alt={"hero-image-" + index}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`w-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear absolute inset-0 h-full`}
            />
          </div>
        ))}
      </div>
      <BannerSlider images={images} />
    </Section>
  );
};

export default FiveLayoutGridBanner;
