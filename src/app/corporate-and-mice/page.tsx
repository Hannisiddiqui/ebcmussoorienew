import React from "react";
import { BusinessCaseSection } from "./components/BusinessCaseSection";
import { corporateAndMicePageData } from "./pageData";
import HeroBanner from "@/components/banner/HeroBanner";
import OfferSection from "./components/OfferSection";

const page = () => {
  return (
    <main>
      <HeroBanner {...corporateAndMicePageData?.bannerData} />
      <BusinessCaseSection {...corporateAndMicePageData?.businessCaseSection} />
      <OfferSection {...corporateAndMicePageData?.offeringsSection} />
    </main>
  );
};

export default page;
