import HeroBanner from "@/components/banner/HeroBanner";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import DineSection from "./components/DineSection";
import MilestoneSection from "./components/MilestoneSection";
import { parkCafePageData } from "./components/pageData";
import Experience from "./components/Experience";

export default function ParkCafePage() {
  return (
    <main>
      <HeroBanner {...parkCafePageData.banner} />
      <FamilyStaySection {...parkCafePageData?.about} />
      {/* <Banner {...parkCafePageData.banner} /> */}
      {/* <AboutParkCafe {...parkCafePageData.about} /> */}
      {/* <CommonCardSection
        {...parkCafePageData.introData}
        sectionColor="text-[#686868]"
      /> */}
      <DineSection {...parkCafePageData.dineData} />
      {/* <CommonCardSection
        {...parkCafePageData.uniqueData}
        wrapperClassName="max-w-3xl mx-auto"
        sectionColor="text-[#686868]"
      />
      <Cuisine {...parkCafePageData.cuisineData} /> */}
      {/* <Experience card={parkCafePageData.experienceData} /> */}
      {/* <CommonCard2 {...parkCafePageData.addOnsData} /> */}
     
      <MilestoneSection {...parkCafePageData.milestoneData} />
    </main>
  );
}
