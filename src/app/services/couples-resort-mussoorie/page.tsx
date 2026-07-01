import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "couples-resort-mussoorie",
  metaData: {
    title: "More Than a Romantic View: Finding a Couples Resort in Mussoorie That Delivers | EBC Mussoorie",
    description:
      "A practical guide for couples looking for a resort in Mussoorie that delivers on privacy, setting, and evening atmosphere. Beyond the view, what actually makes a stay memorable.",
  },
  banner: {
    title: "More Than a Romantic View",
    subTitle: "Finding a Couples Resort That Delivers",
    description:
      "Privacy, setting, and evening atmosphere – what makes a couples trip to Mussoorie work. A guide beyond the view.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "More Than a Romantic View",
    description: [
      "You do not need to be on your honeymoon to want a couples resort in Mussoorie that actually works. Anniversaries, long-overdue getaways, reconnection trips, and spontaneous weekend escapes all call for the same thing: a place that gives two people space, a good setting, and enough happening around them to fill two or three days without feeling like they have to manufacture their own itinerary. Mussoorie has plenty of accommodation. What it has in shorter supply is the specific combination of privacy, outdoor access, and evening atmosphere that makes a couples trip feel different from a family vacation or a solo stay. This guide is for couples who have already decided Mussoorie is the destination and want to know what to look for in a resort.",
    ],
  },
  details: {
    title: "What a Couples Resort in Mussoorie Must Get Right",
    subtitle: "Three Key Factors",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Three Things a Couples Resort in Mussoorie Must Get Right</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">1. The Space Between You and the Next Guest</h3>
       <p>In most hill station hotels, rooms share walls, corridors, and dining rooms. Two people trying to have a quiet conversation over breakfast end up surrounded by other guests doing the same. A property that works for couples solves this with spacing, whether through <strong>standalone cottages</strong>, <strong>well-separated glamping tents</strong>, or a small enough total capacity that the common areas never feel crowded. When evaluating a couples resort, check the total number of accommodation units. A property with four to eight units is fundamentally different from one with forty rooms.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">2. A Setting That Replaces Conversation</h3>
       <p>The best couples trips are the ones where you sit somewhere beautiful and do not need to say much. The view, the temperature, and the quality of the light do the work. A couples resort in Mussoorie should be positioned to deliver this naturally: a ridgeline view, a forest path from the front door, or an elevation that puts you above the treeline for clear evening skies.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">3. An Evening That Does Not Require Leaving the Property</h3>
       <p>A bonfire, outdoor seating with blankets, and a simple meal under the open sky create an evening that most restaurants cannot replicate. For couples specifically, the option to stay on the property after dinner and watch stars or sit by the fire adds a dimension that a hotel dining room simply does not offer.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Sets a Glamping Couples Resort Apart from a Standard Mussoorie Hotel</h2>
       <p><strong>Everest Base Camp Mussoorie</strong> offers a luxury glamping format near George Everest Peak that addresses all three requirements above. The resort's tent-based accommodation provides natural spacing. The location near the peak and the Doon Valley ridge delivers the kind of setting where the scenery does its own work. And the bonfire and outdoor setup create an evening experience that belongs to the property rather than requiring a restaurant reservation elsewhere. For couples who have stayed in Mussoorie before and found the standard hotel format underwhelming, the glamping model represents a meaningful upgrade in how the mountain setting is experienced.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Activities Worth Doing as a Couple in Mussoorie</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Morning Treks Near George Everest Peak</h3>
       <p>The trek to George Everest Peak takes two to three hours at a relaxed pace and is manageable for couples without specialist outdoor experience. The trail runs through forest and opens to a ridgeline with views across the Doon Valley. It is best done early morning when the light is clearest.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Camel's Back Road Walk</h3>
       <p>A three-kilometre walk along the ridge, quiet enough to hold a full conversation and scenic enough to feel worthwhile. This is a low-effort, high-reward morning or evening activity that requires no planning.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Landour Exploration</h3>
       <p>The old cantonment area of Landour has a distinctly slower pace than Mussoorie town. A few hours here, visiting the Char Dukan tea stalls and the old colonial buildings on the upper ridge, rounds out a trip without requiring much physical effort.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Lal Tibba Viewpoint</h3>
       <p>At 2,275 metres, this is the highest point in Mussoorie. On a clear day between October and February, peaks including Bandarpunch and Kedarnath are visible. The Japanese telescope at the viewpoint allows a closer look at the snow line.</p>
       <p>Browse the full experience and accommodation format at <a href="/rooms" class="text-secondary underline">EBC Mussoorie</a> to plan the right itinerary around your stay.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Practical Checklist Before You Book a Couples Resort in Mussoorie</h2>
       <p>Use these questions to filter your shortlist:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Does the accommodation provide genuine privacy, not just a room with a door?</li>
         <li>What is the view from the accommodation unit itself, not from a shared terrace?</li>
         <li>Is there an outdoor evening setup included or available?</li>
         <li>What activities can you do from the property without arranging transport?</li>
         <li>What is the total capacity of the property?</li>
         <li>Is the cancellation policy reasonable if plans change?</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When to Go for a Couples Trip to Mussoorie</h2>
       <p><strong>Best windows:</strong> September to November for clear skies, open trails, and low crowd density. March to May for warmth, colour, and comfortable evenings.</p>
       <p><strong>Avoid:</strong> July and August. Monsoon rainfall limits outdoor activities and adds road risk on mountain approaches.</p>
       <p><strong>Worth considering:</strong> December and January for couples who want a quieter, colder Mussoorie. Properties with good heating and cold-weather setups make winter visits memorable, though less active.</p>
       <p>As outlined in this detailed piece on <a href="/glamping-george-everest" class="text-secondary underline">glamping and outdoor adventures near George Everest Peak</a>, the property experience varies significantly by season and choosing the right window makes a material difference.</p>`,
    ],
  },
  faqs: [
    {
      question: "What makes a resort suitable for couples in Mussoorie?",
      answer:
        "Private accommodation, a quality outdoor setting, low guest density, and an evening experience that does not require leaving the property.",
    },
    {
      question: "Is Mussoorie good for a couples anniversary trip?",
      answer:
        "Yes. The hill setting, trekking access, and availability of intimate glamping accommodations make it a strong anniversary destination.",
    },
    {
      question: "How long should a couples trip to Mussoorie be?",
      answer:
        "Two nights are sufficient. Three nights allow a slower pace and an additional day for Dhanaulti or Landour exploration.",
    },
    {
      question: "Are couples resorts in Mussoorie available year-round?",
      answer:
        "Most operate year-round with seasonal variation in activity availability. Confirm directly with the property.",
    },
    {
      question: "What is the price range for a couples glamping stay in Mussoorie?",
      answer:
        "Pricing varies. Contact properties directly for current rates and package inclusions.",
    },
    {
      question: "Is early check-in available at couples resorts in Mussoorie?",
      answer:
        "This depends on the property and availability. Request early check-in at the time of booking.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function CouplesResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <HeroBanner {...articleData.banner} />

      <SectionWithContainer sectionClassName="bg-[#0C150D] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
              {articleData.details.subtitle}
            </span>
            <SectionHeading title={articleData.details.title} titleColor="white" />
            <div className="space-y-5 text-base leading-relaxed text-[#EDE7D9] md:text-lg">
              {articleData.intro.description.map((text, index) => (
                <p key={`intro-${index}`}>{text}</p>
              ))}
              {articleData.details.description.map((html, index) => (
                <div key={`details-${index}`} className="space-y-3">
                  {renderContent(html)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F7F5EE] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</p>
            <SectionHeading2
              title="Frequently Asked Questions"
              description="Everything you need to know before booking your couples resort stay."
              textCenter
              titleColor="#0C150D"
              descriptionColor="#4A5A47"
            />
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