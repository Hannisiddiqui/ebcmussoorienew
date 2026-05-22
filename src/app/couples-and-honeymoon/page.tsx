import HeroBanner from "@/components/banner/HeroBanner";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import CoupleRoomSection from "./components/CoupleRoomSection";
import RomanticInclusionSection from "./components/RomanticInclusionSection";
import TestimonialSection from "./components/TestimonialSection";
import { couplesAndHoneymoonPageData } from "./pageData";
import CtaSection from "@/components/CommonSections/CtaSection";

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
        testimonials={couplesAndHoneymoonPageData?.testimonialSection}
      />
    </main>
  );
};

export default page;
