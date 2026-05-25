"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import { useMemo } from "react";
import { galleryPageData } from "./pageData";
import { useAppContext } from "@/contextApi/AppContext";

type Props = {
  title: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryBanner({ title }: Props) {
  const { selected, setSelected } = useAppContext();
  const Image = galleryPageData.gallerySection.galleryImages;
  const categories = useMemo<string[]>(
    () => ["All", ...new Set(Image.map((img) => img.alt))],
    [Image]
  );

  // 🔹 filtering logic
  const filtered: GalleryImage[] =
    selected === "All" ? Image : Image.filter((img) => img.alt === selected);

  return (
    <SectionWithContainer
      sectionClassName="gallery-banner bg-[#162218]"
      containerClassName="text-center"
    >
      {/* 
                <div className="content-column">
                    <h2>{title}</h2>
                </div> 
            */}
      <div className="flex flex-col items-center mt-10">
        <div className="mb-8 flex items-center gap-2 text-secondary">
          <p className="text-[11px] tracking-[3px] uppercase font-body">
            EXPLORE EBC MUSSOORIE
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl text-white font-medium font-primary">
          Explore our Himalayan Resort
        </h2>
      </div>
      <div className=" mt-10 flex flex-wrap justify-center gap-12 uppercase  ">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelected(cat)}
            className={`h-[38px] px-4 border-b transition-all duration-300 font-body text-[14px] ${
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
