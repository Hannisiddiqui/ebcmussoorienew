import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";

interface StayWithProps {
  title: string[];
  images: string[];
  isShowBgImage?: boolean;
  aspectRatio?: string;
}

const StayWith: React.FC<StayWithProps> = ({
  title,
  images,
  isShowBgImage = true,
  aspectRatio = "aspect-[4/1.7]",
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary relative"
      containerClassName="md:max-w-[35rem]! max-md:py-6"
    >
      <h2 className="text-3xl lg:text-5xl/tight flex flex-wrap gap-2 items-center justify-center font-extralight text-center font-primary text-white">
        <span className="" dangerouslySetInnerHTML={{ __html: title[0] }} />
        <span className="flex gap-2 items-center justify-center">
          <span className={`inline-block w-30  -mt-1 relative ${aspectRatio}`}>
            <Image
              src={images[0]}
              alt={title[0]}
              fill
              className="object-contain"
              priority={true}
            />
          </span>
          <span
            className="mt-1"
            dangerouslySetInnerHTML={{ __html: title[1] }}
          />
        </span>
      </h2>

      {isShowBgImage && (
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
      )}
    </SectionWithContainer>
  );
};

export default StayWith;
