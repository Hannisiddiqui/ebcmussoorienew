import { CuisineProps } from "@/@types/@types";
import { SectionWithContainer } from "@/components/sectionComponants";
import SingleImageSlider from "@/components/slider/SingleImageSlider";
import SectionHeading from "@/components/typography/SectionHeading";

const Cuisine: React.FC<CuisineProps> = ({ title, description, images }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary "
      containerClassName="grid xl:grid-cols-2 items-center gap-18 "
    >
      <div className="w-full xl:block hidden">
        <SingleImageSlider images={images} />
      </div>
      <div className="flex flex-col w-full overflow-hidden gap-6">
        <SectionHeading title={title} titleColor="white" />
        <div className="w-full xl:hidden ">
          <SingleImageSlider images={images} />
        </div>
        {description.map((item, index) => (
          <p
            key={index}
            className="text-white max-lg:text-center font-medium sm:text-[1.375rem]"
          >
            {item}
          </p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Cuisine;
