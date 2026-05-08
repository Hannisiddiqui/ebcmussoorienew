import HeroBanner from "@/components/banner/HeroBanner";
import React from "react";
import { couplesAndHoneymoonPageData } from "./pageData";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import CoupleRoomSection from "./components/CoupleRoomSection";
import RomanticInclusionSection from "./components/RomanticInclusionSection";
import Testimonial from "./components/TestimonialSection";
import TestimonialSection from "./components/TestimonialSection";

const page = () => {
  return (
    <main>
      <HeroBanner {...couplesAndHoneymoonPageData?.bannerData} />
      <FamilyStaySection {...couplesAndHoneymoonPageData?.familyStaySection} />
      <RomanticInclusionSection
        {...couplesAndHoneymoonPageData?.romanticInclusionSection}
      />
      <CoupleRoomSection {...couplesAndHoneymoonPageData?.coupleRoomSection} />
      <TestimonialSection
        testimonials={couplesAndHoneymoonPageData?.testimonials}
      />
    </main>
  );
};

export default page;
