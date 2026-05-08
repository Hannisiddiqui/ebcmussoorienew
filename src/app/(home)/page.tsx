import VideoBanner from "@/components/banner/VideoBanner";
import AboutSection from "@/components/CommonSections/AboutSection";
import CtaSection from "@/components/CommonSections/CtaSection";
import ExperienceNew from "./components/ExperienceNew";
import { homePageData } from "./components/homePageData";
import PressSection from "./components/PressSection";
import Journey from "./components/Journey";
import Accommodations from "./components/Accommodations";
import SlidingTitle from "@/components/slider/SlidingTitle";
import OurStory from "./components/OurStory";

export default function Home() {
  return (
    <main>
      <VideoBanner {...homePageData.bannerData} />
      {/* <PetFriendly {...homePageData.PetFriendly} />
      <Partner partners={homePageData.partners} />
      <IntroSection
        {...homePageData.introData}
        contentWrapperClassName="max-w-4xl w-full"
      /> */}
      {/* <AboutSection {...homePageData.aboutData} /> */}
      <SlidingTitle items={homePageData.highlightData.items} />
      <OurStory {...homePageData.ourStory} />
      <Accommodations {...homePageData.accommodationsData} />
      <Journey {...homePageData.journeyData} />

      <ExperienceNew {...homePageData.experienceData} />
      {/* <AmenitiesSection amenities={homePageData.amenities} />
      <DiningSection {...homePageData.diningData} />
      <AdventuresSection {...homePageData.activitiesData} />
      <ExploreNearbySection {...homePageData.exploreNearbyData} /> */}
      {/* <PressSection {...homePageData.pressData} /> */}
      <CtaSection {...homePageData.ctaData} />
    </main>
  );
}
