import ThreeGridTextBanner from "@/components/banner/ThreeGridTextBanner";
import { activitiesPageData } from "./components/pageData";
import IntroSection from "@/components/CommonSections/IntroSection";
import CommonCardSection from "@/components/CommonSections/CommonCardSection";
import CommonCard2 from "@/components/CommonSections/CommonCard2";
import StayWith from "@/components/CommonSections/StayWith";

export default function ActivitiesPage() {
  return (
    <main>
      <ThreeGridTextBanner {...activitiesPageData.bannerData} />
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
      <StayWith {...activitiesPageData.ctaData} />
    </main>
  );
}
