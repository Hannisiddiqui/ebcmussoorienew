import ThreeGridTextBanner from "@/components/banner/ThreeGridTextBanner";
import { galleryPageData } from "./components/pageData";
import CommonCardSection from "@/components/CommonSections/CommonCardSection";

export default function GalleryPage() {
  return (
    <div>
      <ThreeGridTextBanner {...galleryPageData.banner} />
      {galleryPageData.cards.map((card, index) => (
        <CommonCardSection
          key={index}
          {...card}
          sectionColor={
            index % 2 !== 0
              ? "bg-background-1 text-primary"
              : "bg-primary text-white"
          }
          titleColor={index % 2 !== 0 ? "primary" : "white"}
        />
      ))}
    </div>
  );
}
