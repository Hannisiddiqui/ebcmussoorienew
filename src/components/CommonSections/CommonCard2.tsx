import { CommonCard2Props } from "@/@types/@types";
import { SectionWithContainer } from "../sectionComponants";
import Image from "next/image";
import SectionHeading from "../typography/SectionHeading";
import SingleImageSlider from "../slider/SingleImageSlider";

const CommonCard2: React.FC<CommonCard2Props> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 md:space-y-16">
      <SectionHeading title={title} textCenter />
      {description && (
        <p className="text-[1.375rem] text-center text-[#686868]">
          {description}
        </p>
      )}
      <div className="space-y-16">
        {items.map((item, index) => (
          <div className="grid xl:grid-cols-2 gap-8 items-center" key={index}>
            <div
              className={`w-full xl:block hidden ${index % 2 !== 0 ? "order-2" : "order-1"}`}
            >
              {item.image && (
                <div className="w-full relative aspect-4/2.75 overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {item.images && (
                <SingleImageSlider
                  images={item.images}
                  aspectRatio="aspect-4/2.5"
                  btnName={item.title}
                />
              )}
            </div>

            <div
              className={`flex flex-col gap-6 ${index % 2 !== 0 ? "order-1" : "order-2"}`}
            >
              <SectionHeading title={item.title} />
              <div
              className={`w-full xl:hidden`}
            >
              {item.image && (
                <div className="w-full relative aspect-4/2.75 overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {item.images && (
                <SingleImageSlider
                  images={item.images}
                  aspectRatio="aspect-4/2.5"
                  btnName={item.title}
                />
              )}
            </div>
              {item.description.map((item, index) => (
                <p
                  key={index}
                  className="text-[#686868] max-lg:text-center font-medium md:text-[1.375rem]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CommonCard2;
