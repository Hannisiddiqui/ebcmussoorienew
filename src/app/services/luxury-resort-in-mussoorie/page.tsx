import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "luxury-resort-mussoorie",
  metaData: {
    title: "What Staying at a Luxury Resort in Mussoorie Actually Feels Like | EBC Mussoorie",
    description:
      "A clear-eyed look at premium accommodation in Mussoorie – what genuine luxury delivers, what to look for, and why glamping is redefining the experience.",
  },
  banner: {
    title: "Luxury Resort in Mussoorie",
    subTitle: "What Staying There Actually Feels Like",
    description:
      "A clear-eyed look at premium accommodation in Mussoorie – what genuine luxury delivers, what to look for, and why more travellers are choosing experience-led stays.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "What Staying at a Luxury Resort in Mussoorie Actually Feels Like",
    description: [
      "A luxury resort in Mussoorie is not just a hotel room with a better mattress and a mountain view. The distinction matters because a lot of properties in Mussoorie use the word 'luxury' to describe what is essentially a clean mid-range stay with decent food. Real luxury hospitality in a hill station setting is about the combination of where you are placed, what surrounds you, how the space is designed, and what you can do from that base. This piece is a clear-eyed look at what premium accommodation in Mussoorie actually delivers, what to look for, and why more travellers from Delhi NCR and Chandigarh are choosing experience-led luxury over conventional hotel formats.",
    ],
  },
  details: {
    title: "What Luxury in the Hills Really Means",
    subtitle: "Beyond the Label",
    description: [
      "The Setting: Why Location Defines Luxury in Mussoorie. In a city hotel, luxury is defined largely by interiors: thread count, bathroom fittings, lobby design. In a mountain destination like Mussoorie, the setting does much of the work. A well-positioned property near George Everest Peak or along the Doon Valley ridge places you inside the landscape rather than adjacent to it. The difference is felt immediately. Waking up to forest sounds, stepping outside into cool mountain air, and having a clear view of the horizon from your accommodation are things no interior renovation can replicate. Elevation matters here as well. Properties positioned above Mussoorie town at 2,000 metres or higher tend to offer better air quality, reduced ambient noise, and more consistent scenic surroundings than those in the town centre.",
      "What Luxury Accommodation Formats Look Like in Mussoorie. Furnished Luxury Tents: The fastest-growing format in premium mountain hospitality. A well-designed luxury tent includes a proper bed with quality linen and bedding, electric lighting and climate management for cold nights, attached or dedicated nearby washroom with hot water, a private outdoor seating area or deck, and access to a common area with a fire pit or bonfire setup. This is the format at Everest Base Camp Mussoorie, a glamping resort near George Everest Peak that positions itself for travellers who want the outdoor setting without the discomfort of basic camping. Mountain Cottages and Villas: Standalone units, often stone or wood construction, are positioned along ridgelines or within forest areas. More permanent in structure than tents, and better suited to longer stays or winter visits when temperature management is a priority. Suite-Level Hotel Accommodation: Available at larger properties in and around Mussoorie. These offer more conventional luxury, with multiple rooms, in-suite services, and often a spa or pool. Suited to travellers who prefer a full-service hotel model with mountain access as a secondary benefit.",
      "What Distinguishes a Genuine Luxury Experience From a Premium-Priced Basic One. This is the practical question most travellers fail to ask before booking. Signs of genuine luxury hospitality: specific, detailed information about what each accommodation includes (not generic marketing copy); verified guest reviews that mention specific staff interactions, food quality, or room details; clear and transparent booking and cancellation policies; an itinerary or experience menu that reflects knowledge of the local terrain. Signs of inflated pricing: website imagery that does not match the actual property layout or scale; vague descriptions like 'stunning views' without specifying from which unit or at what time of day; bundled packages with unclear inclusions; no mention of what is seasonal or weather-dependent.",
      "Why Glamping Resorts Are Redefining Luxury in Mussoorie. The traditional model of luxury in Indian hill stations was a large property with a colonial aesthetic, a full-service dining room, and a spa. That model still exists and has its audience. But a growing segment of travellers from Delhi NCR, Chandigarh, and Punjab now measure luxury differently, by the quality of the experience rather than the size of the lobby. Glamping properties have responded to this by placing premium comfort inside the landscape rather than next to it. As detailed in this piece on Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp?, the accessibility of a place like Everest Base Camp Mussoorie from the major northern cities is part of what makes the format work.",
      "What a Two-Night Luxury Glamping Stay in Mussoorie Can Include. A well-planned two-night stay at a premium glamping property near Mussoorie gives you: Day 1 (Arrival): Drive from Delhi or Dehradun, afternoon check-in, settle into the tent accommodation, evening bonfire and dinner under open skies. Day 2: Morning trek toward George Everest Peak, late breakfast, free afternoon for rest or exploration, stargazing or second bonfire evening. Day 3: Early morning walk along the ridge, check out by mid-morning, drive back with a clear itinerary served. This rhythm is not possible from a town-centre hotel. The proximity to the trail and the outdoor setup make the experience continuous rather than punctuated by commutes. You can view current accommodation options and tent categories at EBC Mussoorie's rooms page to plan around availability.",
      "Who This Type of Stay Is Best For. Luxury glamping in Mussoorie is especially well-matched for: couples celebrating anniversaries or honeymoons who want privacy and scenery; Delhi NCR professionals looking for a two-night reset without flying; families with older children who want outdoor access with comfort; small corporate groups seeking a retreat format with nature programming. It is less suited for travellers who require extensive shopping access, multiple dining options nearby, or conventional hotel-scale facilities.",
    ],
  },
  faqs: [
    {
      question: "What is included in a luxury glamping resort stay in Mussoorie?",
      answer:
        "Typically: furnished tent accommodation, bedding, washroom access, select meals, and access to on-property experiences. Confirm exact inclusions with the property at booking.",
    },
    {
      question: "Is a luxury resort in Mussoorie suitable for a honeymoon?",
      answer:
        "Yes. The scenic setting, privacy of tent accommodation, and curated evening experiences make it a strong honeymoon option.",
    },
    {
      question: "How does luxury glamping compare in price to a five-star hotel in Mussoorie?",
      answer:
        "Pricing varies. Glamping resorts can be comparable to or more affordable than full-service five-star properties, often with a more distinctive experience.",
    },
    {
      question: "What is the best season for a luxury resort stay in Mussoorie?",
      answer:
        "March to June and September to November offer the most comfortable conditions for outdoor-focused luxury stays.",
    },
    {
      question: "Are luxury resorts in Mussoorie pet-friendly?",
      answer:
        "Select properties accommodate pets with applicable restrictions. Always confirm before booking.",
    },
    {
      question: "Do luxury glamping tents have electricity and hot water?",
      answer:
        "Well-appointed glamping properties provide both. Confirm specific amenities with the property before arrival.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function LuxuryResortPage() {
  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <HeroBanner {...articleData.banner} />

      <SectionWithContainer sectionClassName="bg-[#0C150D] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
              {articleData.details.subtitle}
            </span>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-white">
                {articleData.details.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[#EDE7D9] md:text-lg">
              {articleData.intro.description.map((text, index) => (
                <p key={`intro-${index}`}>{text}</p>
              ))}
              {articleData.details.description.map((text, index) => (
                <p key={`details-${index}`}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F7F5EE] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-[#0C150D]">Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5A47]">Everything you need to know about staying at a luxury resort in Mussoorie.</p>
          </div>
          <div className="space-y-4">
            {articleData.faqs.map((faq, index) => (
              <Accordion2 key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
}