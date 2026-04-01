import CommonCardSection from "@/components/CommonSections/CommonCardSection";
import { parkCafePageData } from "./components/pageData";
import DineSection from "./components/DineSection";
import CommonCard2 from "@/components/CommonSections/CommonCard2";
import Cuisine from "./components/Cuisine";
import StayWith from "@/components/CommonSections/StayWith";
import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import MilestoneSection from "./components/MilestoneSection";
import AboutParkCafe from "./components/AboutParkCafe";
import Banner from "@/components/banner/Banner";

export default function ParkCafePage() {
  return (
    <main>
      <Banner {...parkCafePageData.banner} />
      <AboutParkCafe {...parkCafePageData.about} />
      <CommonCardSection
        {...parkCafePageData.introData}
        sectionColor="text-[#686868]"
      />
      <DineSection {...parkCafePageData.dineData} />
      <CommonCardSection
        {...parkCafePageData.uniqueData}
        wrapperClassName="max-w-3xl mx-auto"
        sectionColor="text-[#686868]"
      />
      <Cuisine {...parkCafePageData.cuisineData} />
      <CommonCard2 {...parkCafePageData.addOnsData} />
      <MilestoneSection {...parkCafePageData.milestoneData} />
      <AdventuresSection {...parkCafePageData.testimonialData} />
      <StayWith
        {...parkCafePageData.ctaData}
        isShowBgImage={false}
        aspectRatio="aspect-4/2.5"
      />
    </main>
  );
}
