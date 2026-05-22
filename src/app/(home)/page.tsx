import VideoBanner from "@/components/banner/VideoBanner";
import CtaSection from "@/components/CommonSections/CtaSection";
import SlidingTitle from "@/components/slider/SlidingTitle";
import Accommodations from "./components/Accommodations";
import ExperienceNew from "./components/ExperienceNew";
import { homePageData } from "./components/homePageData";
import Journey from "./components/Journey";
import OurStory from "./components/OurStory";
import FaqSection from "./components/FaqSection";
import Journal from "./components/Journal";
import { blogPagedata } from "../blogs/components/pageData";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import OurGuests from "./components/OurGuests";

export default function Home() {
  return (
    <main>
      <VideoBanner {...homePageData.bannerData} />
      {/* <PetFriendly {...homePageData.PetFriendly} />
      <Partner partners={homePageData.partners} />
      <IntroSection
        {...homePageData.introData}
        contentWrapperClassName="max-w-4xl w-full"
      /> */}
      {/* <AboutSection {...homePageData.aboutData} /> */}
      <SlidingTitle items={homePageData.highlightData.items} />
      <OurStory {...homePageData.ourStory} />
      <Accommodations {...homePageData.accommodationsData} />
      <Journey {...homePageData.journeyData} />

      <ExperienceNew {...homePageData.experienceData} />
      {/* <AmenitiesSection amenities={homePageData.amenities} />
      <DiningSection {...homePageData.diningData} />
      <AdventuresSection {...homePageData.activitiesData} />
      <ExploreNearbySection {...homePageData.exploreNearbyData} /> */}
      {/* <PressSection {...homePageData.pressData} /> */}
      <OurGuests {...homePageData.testimonialData} />
      <Section defaultPadding={false} className="bg-primary">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {homePageData.homeGalleryData.images.map((image, index) => (
            <div className="relative w-full aspect-4/3.5" key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>
      <Journal
        title={homePageData.journalData.title}
        description={homePageData.journalData.description}
        blogs={blogPagedata?.cards.slice(0, 3)}
      />

      <FaqSection {...homePageData.faqData} />
      <CtaSection {...homePageData.ctaData} />
    </main>
  );
}
