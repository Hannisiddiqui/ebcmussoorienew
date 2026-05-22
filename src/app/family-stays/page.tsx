import HeroBanner from "@/components/banner/HeroBanner";
import React from "react";
import { familyStayPageData } from "./pageData";
import FamilyStaySection from "./components/FamilyStaySection";
import WhyLoveEBC from "./components/WhyLoveEBCSection";
import ActivitiesSection from "./components/ActivitiesSection";
import FamilyRoomSection from "./components/FamilyRoomSection";
import CtaSection from "@/components/CommonSections/CtaSection";

const page = () => {
  return (
    <main>
      <HeroBanner {...familyStayPageData?.bannerData} />
      <FamilyStaySection {...familyStayPageData?.familyStaySection} />
      <WhyLoveEBC {...familyStayPageData?.whyFamilyLoveEbcSection} />
      <ActivitiesSection {...familyStayPageData?.activitiesSection} />
      <FamilyRoomSection {...familyStayPageData?.familyRoomSection} />
      <CtaSection {...familyStayPageData?.ctaData} />
    </main>
  );
};

export default page;
