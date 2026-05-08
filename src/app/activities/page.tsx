import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import { experiencesPageData } from "./components/experiencesPageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import ActivitiesCards from "./components/ActivitiesCards";
import DayTrips from "./components/DayTrips";

export default function ActivitiesPage() {
  return (
    <main>
      {/* <ThreeGridTextBanner {...activitiesPageData.bannerData} />
      <IntroSection {...activitiesPageData.introData} />
      {activitiesPageData.ActivitiesData.map((activity, index) => (
        <CommonCardSection
          key={index}
          {...activity}
          wrapperClassName="max-w-3xl mx-auto"
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
      <CommonCard2 {...activitiesPageData.paidAddonsData} />
      <StayWith {...activitiesPageData.ctaData} /> */}
      <HeroHeaderSection {...experiencesPageData.banner} />
      <SectionWithContainer sectionClassName="bg-[#070C08]" containerClassName="space-y-16 divide-y divide-white/50">
        {experiencesPageData.cards.map((card, index) => (
          <ActivitiesCards key={index} {...card} index={index} />
        ))}
      </SectionWithContainer>
      <DayTrips {...experiencesPageData.anotherSection} />
    </main>
  );
}
