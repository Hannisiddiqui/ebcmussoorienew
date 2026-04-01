import { BannerProps } from "@/@types/@types";
import { Section } from "../sectionComponants";
import Image from "next/image";

const Banner: React.FC<BannerProps> = ({ images }) => {
  return (
    <Section defaultPadding={false} className="bg-background-1 p-1">
      {images.length < 2 ? (
        <div className="w-full relative md:aspect-[4/1.8] aspect-4/2">
          <Image
            src={images[0]}
            alt="hero-image"
            fill
            className="object-cover"
          />
        </div>
      ) : null}
    </Section>
  );
};

export default Banner;
