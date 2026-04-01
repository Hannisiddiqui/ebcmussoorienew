import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface StayWithProps {
  title: string;
  image: string;
}

const AboutParkCafe: React.FC<StayWithProps> = ({ title, image }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary relative"
      containerClassName="md:max-w-[35rem]! max-md:py-6 space-y-6"
    >
      <div className={`mx-auto md:w-30 w-20 relative aspect-[4/2.7]`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <h1
        className="text-3xl lg:text-5xl/tight font-extralight text-center font-primary text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>

      <div className="absolute bottom-0 inset-x-0 flex justify-between items-center">
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/white-tree.png"
            alt="tree"
            fill
            className="object-contain scale-x-[-1]"
          />
        </div>
        <div className="relative w-[38.81px] aspect-4/4.25">
          <Image
            src="/white-tree.png"
            alt="tree"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutParkCafe;
