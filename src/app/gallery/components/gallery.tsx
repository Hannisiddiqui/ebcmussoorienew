"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";
import { useAppContext } from "@/contextApi/AppContext";

// 🔹 Define types
type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  galleryImages: GalleryImage[];
};

export default function Gallery({ galleryImages }: Props) {
  const { selected, setSelected } = useAppContext();

  // 🔹 categories generate from data
  const categories = useMemo<string[]>(
    () => ["All", ...new Set(galleryImages.map((img) => img.alt))],
    [galleryImages]
  );

  // 🔹 filtering logic
  const filtered: GalleryImage[] =
    selected === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.alt === selected);

  return (
    <SectionWithContainer
     
      sectionClassName=" bg-primary"
      containerClassName="flex flex-col"
    >
      {/* FILTER BUTTONS */}
      {/* <div className="gallery-tabs mb-6 flex flex-wrap gap-3 justify-center"> */}
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {filtered.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[7/6] overflow-hidden"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}
