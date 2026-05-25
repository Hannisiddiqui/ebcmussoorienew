"use client";

import HeroBanner from "@/components/banner/HeroBanner";
import EnquirySection from "../contact-us/components/EnquirySection";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import PageData from "./components/pageData";
import PriavteBar from "./components/PriavteBar";

export default function DenPage() {
  return (
    <main>
      <HeroBanner {...PageData?.bannerData} />
      <FamilyStaySection {...PageData?.aboutDen} />
      <PriavteBar images={PageData?.privateBar.images} />
      <EnquirySection
        title="Your next celebration has an address. DM us to reserve The Den."
        subTitle="Tell us about your enquiry and we'll get back to you within 2 hours"
      />
      {/* <DenHero images={PageData.hero.images} /> */}
      {/* <DenHighlights {...PageData.highlights} /> */}
      {/* <AdventuresSection {...PageData.highlights} /> */}
      {/* <DenGallery {...PageData.gallery} /> */}
    </main>
  );
}
