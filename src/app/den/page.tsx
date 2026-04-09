"use client";

import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import DenGallery from "./components/DenGallery";
import DenHero from "./components/DenHero";
import PageData from "./components/pageData";

export default function DenPage() {
  return (
    <main>
      <DenHero images={PageData.hero.images} />
      {/* <DenHighlights {...PageData.highlights} /> */}
      <AdventuresSection {...PageData.highlights} />
      <DenGallery {...PageData.gallery} />
    </main>
  );
}
