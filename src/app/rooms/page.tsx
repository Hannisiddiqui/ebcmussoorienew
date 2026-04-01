import IntroSection from "@/components/CommonSections/IntroSection";
import { roomPageData } from "./components/pageData";
import ThreeGridTextBanner from "@/components/banner/ThreeGridTextBanner";
import CommonCardSection from "@/components/CommonSections/CommonCardSection";
import StayWith from "@/components/CommonSections/StayWith";

export default function RoomsPage() {
  return (
    <main>
      <ThreeGridTextBanner {...roomPageData.banner} />
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
      <StayWith {...roomPageData.ctaData} />
    </main>
  );
}
