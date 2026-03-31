import IntroSection from "@/components/CommonSections/IntroSection";
import { aboutPageData } from "./components/pageData";
import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import StayWith from "@/components/CommonSections/StayWith";
import AboutSection from "@/components/CommonSections/AboutSection";
import ThreeGridLayoutBanner from "@/components/banner/ThreeGridLayoutBanner";

export default function AboutUsPage() {
  return (
    <main>
      <ThreeGridLayoutBanner {...aboutPageData.bannerData} />
      <IntroSection {...aboutPageData.introData} />
      <AdventuresSection {...aboutPageData.georgeEverestData} />
      <AboutSection {...aboutPageData.aroundCampData} />
      <StayWith {...aboutPageData.ctaData} />
    </main>
  );
}
