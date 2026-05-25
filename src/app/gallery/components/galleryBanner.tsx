"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import { useAppContext } from "@/contextApi/AppContext";
import { useMemo } from "react";
import { galleryPageData } from "./pageData";

type Props = {
  title: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryBanner() {
  const { selected, setSelected } = useAppContext();
  const Image = galleryPageData.gallerySection.galleryImages;
  const categories = useMemo<string[]>(
    () => ["All", ...new Set(Image.map((img) => img.alt))],
    [Image]
  );

  return (
    <SectionWithContainer
      sectionClassName="gallery-banner bg-[#162218]"
    >
    <div className="flex flex-col items-center mt-14 max-md:mt-26">
        <div className="mb-8 flex items-center gap-2 text-secondary">
          <p className="text-[11px] tracking-[3px] uppercase font-body">
            EXPLORE EBC MUSSOORIE
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl text-center text-white font-medium font-primary">
          Explore our Himalayan Resort
        </h1>
      </div>
      <div className=" mt-10 flex  lg:justify-center gap-12 uppercase  max-lg:overflow-x-auto hide-scroll">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelected(cat)}
            className={` border-b transition-all text-nowrap duration-300 font-body uppercase ${
              selected === cat
                ? "border-secondary text-secondary "
                : "border-transparent text-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </SectionWithContainer>
  );
}
