import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: family-vacation-mussoorie-monsoon
  slug: "family-vacation-mussoorie-monsoon",
  metaData: {
    title: "Family Vacation in Mussoorie During Monsoon: An Honest Planning Guide for Parents | EBC Mussoorie",
    description:
      "A complete guide to a family monsoon vacation in Mussoorie – setting expectations, choosing the right property, and planning a trip that works for parents and children.",
  },
  banner: {
    title: "Family Vacation in Mussoorie During Monsoon",
    subTitle: "An Honest Planning Guide for Parents",
    description:
      "The honest answer is that it depends almost entirely on the property you choose and the expectations you set. A monsoon family trip built around sightseeing will fail. One built around the right property can be one of the better family trips you take.",
    image: "/banner/bnr2.png", // Replace with a family monsoon banner if available
  },
  intro: {
    title: "Family Vacation in Mussoorie During Monsoon",
    description: [
      "Let me start with the question every parent actually asks: is a monsoon trip to Mussoorie with children a good idea, or is it a two-day exercise in managing disappointed kids stuck indoors? The honest answer is that it depends almost entirely on the property you choose and the expectations you set before you leave. A monsoon family trip built around sightseeing will fail. A monsoon family trip built around a property with enough space, enough on-site interest, and a genuine forest setting can be one of the better family trips you take.",
      "This guide covers setting expectations, what a monsoon family property actually needs, a realistic itinerary, and how to make the trip work for both parents and children.",
    ],
  },
  details: {
    title: "The Family Monsoon Guide",
    subtitle: "Plan Your Family Escape",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Setting Expectations Before You Book</h2>
       <p>Tell the children what the trip is, honestly, before you go:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>We will do our outdoor time in the mornings, early, before the rain</li>
         <li>We will be at the property for a lot of the day, and that is the plan, not a failure of the plan</li>
         <li>The forest looks completely different in rain, and that is the point of coming now</li>
         <li>There may be a day when we do not leave the property at all</li>
       </ul>
       <p>Children handle this framing well. What they handle badly is being promised waterfalls and ropeways and then spending eight hours in a hotel room watching rain.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What a Monsoon Family Property Needs</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Enough accommodation space for the family to spread out:</strong> A single hotel room with two adults and two children during a full-rain day is a difficult environment. Interconnecting or multi-bedroom accommodation transforms this. At EBC Mussoorie, the Twin Luxury Cottages are two interconnecting cottages providing four rooms total, with a shared balcony and air conditioning. The Surveyor Suite has a king-size bed plus a foldable queen on request and accommodates up to four guests. Andrew's Villas are duplex villas with two bedrooms and separate entrances, suited to larger families or multi-generational groups.</li>
         <li><strong>Grounds the children can use:</strong> A 20-acre private forest estate is a fundamentally different proposition from a hotel with a small garden. Children can walk, explore, and be outdoors within the property boundary between rain spells.</li>
         <li><strong>On-site dining without a drive:</strong> The Park Cafe at EBC Mussoorie is a multi-cuisine restaurant with indoor and alfresco seating. For families, not having to negotiate a wet ridge road for every meal is a material advantage.</li>
         <li><strong>Something to do outdoors that works in short windows:</strong> Private bonfire setups and outdoor BBQ arrangements at the estate give the evening a structure that children engage with. The morning estate walk and the adjacent George Everest heritage site give the mornings a purpose.</li>
       </ul>
       <p>Review the <a href="/rooms" class="text-secondary underline">accommodation options at EBC Mussoorie</a> and confirm which category fits your family size before enquiring.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">A Realistic Monsoon Family Itinerary</h2>
       <p><strong>Day one, arrival:</strong> Leave Delhi in the morning rather than the evening. The 290 km drive takes 6 to 7 hours in dry conditions and longer in rain, and arriving with children after dark on a wet ridge road is not the way to start. Arrive mid to late afternoon. Let the children explore the grounds. Early dinner at the Park Cafe. Bonfire if the evening clears.</p>
       <p><strong>Day two, the full day:</strong> 6:30 to 8 AM: the estate walk. Get everyone up. The forest in morning mist is the single most memorable thing children take away from a monsoon hill trip, and it is gone by 9 AM. Walk to the George Everest House heritage site adjacent to the estate. Tell the children the story: this is where a man measured the height of the highest mountain on earth without ever standing on it, using triangulation from ridges like this one. Children engage with that far more than with a generic viewpoint. 8:30 AM: breakfast. Mid-morning onward: the property. Board games you brought, books, family time, a long lunch. This is where accommodation space matters most. Evening: bonfire and outdoor BBQ if conditions allow.</p>
       <p><strong>Day three, departure morning:</strong> One more early walk. Breakfast. Leave by 10 AM with a road-condition buffer.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Pack for a Monsoon Family Trip</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Waterproof shoes with grip for every family member, adults and children</li>
         <li>Two rain jackets per person if possible, since one will be wet</li>
         <li>Warm layers: evenings drop to 14 to 16 degrees Celsius at this altitude even in July</li>
         <li>Indoor entertainment you brought yourselves: books, cards, games</li>
         <li>A basic first aid kit</li>
         <li>Dry bags for electronics</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Honest Tradeoffs</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Kempty Falls in monsoon is spectacular in volume, but the approach can be crowded and slippery. Assess with children in mind.</li>
         <li>Road access to the Mussoorie area can be affected for 24 to 48 hours after heavy rain. Book flexible cancellation.</li>
         <li>Long day trips to Dhanaulti or Chakrata are not sensible with children in active monsoon.</li>
       </ul>
       <p>Confirm EBC Mussoorie's operational status and access for your specific July or August dates before booking.</p>
       <p>The <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">Hotelier India feature on EBC Mussoorie</a> covers the property's outdoor-led hospitality design, which is the reason it works for families whose plans need to flex around weather.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is Mussoorie suitable for a family monsoon trip?",
      answer:
        "Yes, with the right property and honest expectations. Choose accommodation with space and on-site interest rather than planning around external sightseeing.",
    },
    {
      question: "Which EBC Mussoorie accommodation suits a family?",
      answer:
        "Twin Luxury Cottages for interconnecting family space, the Surveyor Suite for up to four guests, or Andrew's Villas for larger or multi-generational groups.",
    },
    {
      question: "Is the property safe for children?",
      answer:
        "It is a private 20-acre estate with direct road access and private parking. Confirm any specific child-related arrangements and supervision requirements with the property when booking.",
    },
    {
      question: "Can we bring our pet on a family trip?",
      answer:
        "Yes. EBC Mussoorie is confirmed pet-friendly. Confirm conditions when booking.",
    },
    {
      question: "What is the drive time from Delhi with children?",
      answer:
        "Allow 7 to 8 hours in monsoon, including breaks, versus 6 to 7 in dry conditions.",
    },
    {
      question: "What if it rains the entire time?",
      answer:
        "Plan for it. Choose accommodation with space, bring indoor entertainment, and treat the morning window as the outdoor time. Families who plan this way report good trips; families who plan around sightseeing do not.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function FamilyVacationMussoorieMonsoonPage() {
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
              description="Everything you need to know before planning your family monsoon vacation in Mussoorie."
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