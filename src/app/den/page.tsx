"use client";

import DenGallery from "./components/DenGallery";
import DenHighlights from "./components/DenHighlights";
import DenHero from "./components/DenHero";
import PageData from "./components/pageData";

export default function DenPage() {
  return (
    <main>
      <DenHero images={PageData.hero.images} />

      <DenHighlights {...PageData.highlights} />

      <DenGallery
        images={PageData.gallery.images}
        texts={PageData.gallery.texts}
      />
    </main>
  );
}
