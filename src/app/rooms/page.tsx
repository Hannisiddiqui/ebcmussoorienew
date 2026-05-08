import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import { roomPageDataNew } from "./components/roomPageDataNew";
import { SectionWithContainer } from "@/components/sectionComponants";
import RoomPageCard from "./components/RoomPageCard";

export default function RoomsPage() {
  return (
    <main>
      {/* <ThreeGridTextBanner {...roomPageData.banner} />
      <IntroSection {...roomPageData.introData} />
      {roomPageData.rooms.map((room, index) => (
        <CommonCardSection
          key={index}
          {...room}
          sectionColor={
            index % 2 === 0
              ? "bg-background-1 text-primary"
              : "bg-primary text-white"
          }
          titleColor={index % 2 === 0 ? "primary" : "white"}
          subTitleColor={index % 2 === 0 ? "" : "white"}
          btnClassName={
            index % 2 === 0 ? "text-primary" : "bg-background-1 text-primary"
          }
        />
      ))}
      <StayWith {...roomPageData.ctaData} /> */}
      <HeroHeaderSection {...roomPageDataNew.banner} />
      <SectionWithContainer sectionClassName="bg-[#070C08]" containerClassName="md:space-y-16 space-y-10" >
        {roomPageDataNew.rooms.map((card, index) => (
          <RoomPageCard key={index} {...card} />
        ))}
      </SectionWithContainer>
    </main>
  );
}
