import { AccommodationsTypes } from "@/@types/@homeType";
import ShowCaseCard from "@/components/cards/ShowCaseCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const Accommodations: React.FC<AccommodationsTypes> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-primary"
      containerClassName="md:space-y-12 space-y-10"
      sectionId="rooms"
    >
      <SectionHeading2 title={title} description={description[0]} textCenter descriptionColor="light" />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {items.map((item, index) => (
          <ShowCaseCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            badge={item.badge}
            primaryButton={item.primaryButton}
          />
        ))}

        {/* <div className="relative w-full aspect-4/5.5 xl:block hidden">
          <LazyLoadedVideo
            src={video[0].videoSrc}
            muted
            autoPlay
            loop
            controls={false}
          />
        </div> */}
        {/* {items.slice(items.length - 1).map((item, index) => (
          <RoomCardNew key={index} {...item} />
        ))} */}
        {/* <div className="relative w-full aspect-4/5.5">
          <LazyLoadedVideo
            src={video[1].videoSrc}
            muted
            autoPlay
            loop
            controls={false}
          />
        </div> */}
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
