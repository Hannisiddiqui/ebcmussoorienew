import FiveLayoutGridBanner from "@/components/banner/FiveLayoutGridBanner";
import { homePageData } from "./components/homePageData";
import IntroSection from "@/components/CommonSections/IntroSection";
import AboutSection from "@/components/CommonSections/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import AmenitiesSection from "./components/AmenitiesSection";
import DiningSection from "./components/DiningSection";
import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import ExploreNearbySection from "./components/ExploreNearbySection";
import StayWith from "@/components/CommonSections/StayWith";
import PressSection from "./components/PressSection";

export default function Home() {
  return (
    <main>
      <FiveLayoutGridBanner {...homePageData.bannerData} />
      <IntroSection
        {...homePageData.introData}
        contentWrapperClassName="max-w-4xl w-full"
      />
      <AboutSection {...homePageData.aboutData} />
      <ExperienceSection {...homePageData.experienceData} />
      <AmenitiesSection amenities={homePageData.amenities} />
      <DiningSection {...homePageData.diningData} />
      <AdventuresSection {...homePageData.activitiesData} />
      <ExploreNearbySection {...homePageData.exploreNearbyData} />
      <PressSection {...homePageData.pressData} />
      <StayWith {...homePageData.ctaData}/>
    </main>
  );
}
