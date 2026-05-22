import React from "react";
import { BusinessCaseSection } from "./components/BusinessCaseSection";
import { corporateAndMicePageData } from "./pageData";
import HeroBanner from "@/components/banner/HeroBanner";
import OfferSection from "./components/OfferSection";
import EnquirySection from "./components/EnquirySection";

const page = () => {
  return (
    <main>
      <HeroBanner {...corporateAndMicePageData?.bannerData} />
      <BusinessCaseSection {...corporateAndMicePageData?.businessCaseSection} />
      <OfferSection {...corporateAndMicePageData?.offeringsSection} />
      <EnquirySection
        title="Group Enquiry"
        subTitle="Tell us about your group and we'll get back to you within 2 hours"
      />
    </main>
  );
};

export default page;
