import FiveLayoutGridBanner from "@/components/banner/FiveLayoutGridBanner";
import AboutSection from "@/components/CommonSections/AboutSection";
import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import IntroSection from "@/components/CommonSections/IntroSection";
import StayWith from "@/components/CommonSections/StayWith";
import AmenitiesSection from "./components/AmenitiesSection";
import DiningSection from "./components/DiningSection";
import ExperienceSection from "./components/ExperienceSection";
import ExploreNearbySection from "./components/ExploreNearbySection";
import { homePageData } from "./components/homePageData";
import PetFriendly from "./components/PetFriendly";
import PressSection from "./components/PressSection";
import Partner from "./components/Partner";
import VideoBanner from "@/components/banner/VideoBanner";

export default function Home() {
  return (
    <main>
      <VideoBanner {...homePageData.bannerData} />
      <PetFriendly {...homePageData.PetFriendly} />
      <Partner partners={homePageData.partners} />
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
      <StayWith {...homePageData.ctaData} />
    </main>
  );
}
