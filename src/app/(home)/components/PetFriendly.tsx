import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface PetFriendlyProps {
  title: string[];
  images: string[];
}
const PetFriendly: React.FC<PetFriendlyProps> = ({ title, images }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary relative"
      containerClassName="md:max-w-[35rem]! max-md:py-6"
    >
      <h2 className="text-3xl lg:text-5xl/tight flex flex-wrap gap-2 items-center justify-center font-extralight text-center font-primary text-white">
        <span className="flex gap-2 items-center justify-center">
          <span
            className="mt-1"
            dangerouslySetInnerHTML={{ __html: title[0] }}
          />
          <span className="inline-block w-30 aspect-4/2 -mt-1 relative rounded-full overflow-hidden border-2 border-white">
            <Image
              src={images[0]}
              alt={title[0]}
              fill
              className="object-cover"
              priority={true}
            />
          </span>
        </span>
        <span className="flex gap-2 items-center justify-center">
          <span className="inline-block w-30 aspect-4/2 -mt-1 relative rounded-full overflow-hidden border-2 border-white">
            <Image
              src={images[1]}
              alt={title[1]}
              fill
              className="object-cover"
              priority={true}
            />
          </span>
          <span
            className="mt-1"
            dangerouslySetInnerHTML={{ __html: title[1] }}
          />
        </span>
      </h2>

      {/* <div className="absolute bottom-0 inset-x-0 flex justify-between items-center">
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
      </div> */}
    </SectionWithContainer>
  );
};

export default PetFriendly;
