import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: couple-resort-mussoorie-monsoon
  slug: "couple-resort-mussoorie-monsoon",
  metaData: {
    title: "Couple Resort in Mussoorie During Monsoon: Why the Off-Season Is the Better Season for Two | EBC Mussoorie",
    description:
      "A complete guide to a couple's monsoon stay in Mussoorie – why the off-season delivers more privacy, better rates, and a more atmospheric experience than peak season.",
  },
  banner: {
    title: "Couple Resort in Mussoorie During Monsoon",
    subTitle: "Why the Off-Season Is the Better Season for Two",
    description:
      "The couples who book Mussoorie in May are looking at the same ridge and valley as those who book it in July. They are not having the same trip. The monsoon version is the better one.",
    image: "/banner/bnr2.png", // Replace with a couple/monsoon banner if available
  },
  intro: {
    title: "Couple Resort in Mussoorie During Monsoon",
    description: [
      "The couples who book Mussoorie in May are looking at the same ridge, the same forest, and the same valley as the couples who book it in July. They are not having the same trip. May brings crowds, peak rates, and a hill station operating at capacity. July brings mist through deodar canopy, a valley that disappears under cloud by mid-morning, evenings cool enough that a fire matters, and a property that is largely yours. For couples who understand what they are choosing, the monsoon version of a Mussoorie stay is the better one.",
      "This guide covers what a monsoon couple's stay in Mussoorie actually involves, what to look for in the property, and how to plan the two or three days so the weather works for you.",
    ],
  },
  details: {
    title: "The Monsoon Couple's Guide",
    subtitle: "Plan Your Intimate Escape",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Case for a Monsoon Couple Stay, Stated Plainly</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Privacy becomes structural, not aspirational.</strong> Occupancy across Mussoorie properties drops significantly in July and August. At a boutique property with a small unit count, this means a couple can have the estate walk, the dining terrace, and the bonfire clearing effectively to themselves. Privacy stops being something you hope for and becomes a feature of the season.</li>
         <li><strong>The sensory environment is at its most distinctive.</strong> Deodar forest at 6,800 feet after overnight rain has a specific scent that exists in no other season and at no other altitude. Add the sound of rain on a forest canopy, mist that reduces visibility to 25 metres at 6 AM, and evening air at 14 degrees Celsius, and you have a sensory environment that a dry-season stay simply does not produce.</li>
         <li><strong>Rates allow a property upgrade.</strong> The budget that covers a mid-tier Mussoorie hotel in May often covers a premium boutique property in July. Couples consistently underuse this. A monsoon stay at a better property produces a better trip than a peak-season stay at an average one.</li>
         <li><strong>The evenings are the best of the year.</strong> The Mussoorie monsoon weather pattern is reliable enough to plan around: clear or lightly overcast mornings, building cloud through late morning, active rain from mid-afternoon, and clearing on many evenings by 8 to 9 PM. When it clears, the valley lights of Dehradun appear below the ridge through moving cloud. Sitting beside a fire in that setting is the moment most couples cite afterwards.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What a Monsoon Couple Property Must Actually Have</h2>
       <p>Four requirements. Everything else is secondary.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>A private covered outdoor space attached to the accommodation.</strong> This is the single most important feature for a monsoon couple stay. A private sit-out or verandah with partial cover means you can sit outside with rain falling nearby rather than being sealed inside a room for six hours. At EBC Mussoorie, the Glamper Rooms are built around exactly this: spacious interiors with a private sit-out and forest-facing orientation.</li>
         <li><strong>Structurally weather-resistant accommodation.</strong> Sustained Mussoorie monsoon rainfall tests the accommodation structure. EBC Mussoorie's range includes the Zenith Luxury Cottage, a standalone unit with large panoramic windows, and the Twin Luxury Cottages with air conditioning and modern bathrooms, alongside the signature Glamper Rooms. These are year-round structures rather than seasonal setups.</li>
         <li><strong>On-site dining that removes the need to drive anywhere.</strong> The Park Cafe at EBC Mussoorie is a multi-cuisine restaurant with both indoor and alfresco seating. In monsoon, this matters more than in any other season. A couple should never need to drive down a wet ridge road at 8 PM to find dinner.</li>
         <li><strong>A bonfire that works in the evening clearing window.</strong> Private bonfire setups on the 20-acre estate are a confirmed EBC Mussoorie feature. For monsoon dates specifically, confirm with the property whether the setup can be arranged after evening rain stops and whether there is any covered seating alongside it.</li>
       </ul>
       <p>Browse the <a href="/rooms" class="text-secondary underline">accommodation categories at EBC Mussoorie</a> before enquiring so you can name your preferred unit when you contact them.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which EBC Mussoorie Accommodation Suits a Monsoon Couple Stay</h2>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Category</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Units</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Why it works in monsoon</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Glamper Room</td>
               <td class="border border-secondary/20 px-4 py-2">4 rooms</td>
               <td class="border border-secondary/20 px-4 py-2">Private sit-out and forest-facing orientation; the signature couple unit</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Camper Room</td>
               <td class="border border-secondary/20 px-4 py-2">1 room</td>
               <td class="border border-secondary/20 px-4 py-2">Cosy entry-level luxury with king bed; suited to couples who prioritise the estate over the room</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Zenith Luxury Cottage</td>
               <td class="border border-secondary/20 px-4 py-2">1 cottage</td>
               <td class="border border-secondary/20 px-4 py-2">Standalone cottage with large panoramic windows; the best rain-view unit on the estate</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Surveyor Room</td>
               <td class="border border-secondary/20 px-4 py-2">1 room</td>
               <td class="border border-secondary/20 px-4 py-2">Spacious premium room with scenic meadow views and a work-friendly setup</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Surveyor Suite</td>
               <td class="border border-secondary/20 px-4 py-2">1 suite</td>
               <td class="border border-secondary/20 px-4 py-2">Largest suite category; king bed with foldable queen on request, for couples travelling with a child or family member</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Twin Luxury Cottages</td>
               <td class="border border-secondary/20 px-4 py-2">1 set (2 interconnecting rooms, common balcony)</td>
               <td class="border border-secondary/20 px-4 py-2">Air-conditioned interconnecting rooms with a shared balcony; suits two couples travelling together</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Andrew's Villas</td>
               <td class="border border-secondary/20 px-4 py-2">2 villas (4 rooms total)</td>
               <td class="border border-secondary/20 px-4 py-2">Duplex villas with separate entrances, sleeping up to 8; the most private and spacious option on the estate</td>
             </tr>
           </tbody>
         </table>
       </div>
       <p class="mt-4">Total property inventory is 14 units, accommodating 28 guests without extra beds and up to 50 with extra beds.</p>
       <p>For a monsoon stay where interior time is guaranteed, the Zenith Luxury Cottage's panoramic window design and the Glamper Room's private sit-out are the two strongest choices for a couple. Confirm availability directly with the property.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Monsoon Couple Itinerary That Actually Works</h2>
       <p><strong>Arrival day:</strong> Leave Delhi mid-morning. The Delhi-Dehradun Expressway covers 210 km in about 2.5 hours, and the Dehradun to Mussoorie spur adds roughly another hour, putting total driving time at around 3.5 to 4 hours. In active monsoon, allow 5 hours to account for slower conditions on the Mussoorie Road switchbacks. Aim to arrive at EBC Mussoorie by around 12 noon. Lunch at the Park Cafe while rooms are prepared. Once settled, walk the estate in the afternoon if conditions allow, dinner at the Park Cafe, bonfire on the estate if the rain eases in the evening.</p>
       <p><strong>Full day:</strong> 5:45 AM. Get up. This is not negotiable if you want the best of a monsoon stay. The forest is inside cloud between roughly 6 and 8 AM, and this window is the reason to be here. Walk the estate. The George Everest House heritage site sits adjacent to the 20-acre property, and the restored surveyor's estate emerging out of mist is one of the more atmospheric sights in the Mussoorie hills. Breakfast at the Park Cafe, ideally alfresco under cover while the cloud builds below the ridge. Mid-morning to late afternoon: interior time. Read. Watch the valley disappear. This is not wasted time on a monsoon trip; it is the rhythm of the season. Evening: bonfire when the rain eases. Stay out longer than you plan to.</p>
       <p><strong>Departure morning:</strong> One more mist walk before breakfast. Depart by 10 AM with a road-condition buffer built into the day. With the expressway, a mid-morning departure still gets you into Delhi comfortably by mid-afternoon.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Tradeoffs, Named Honestly</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Sightseeing to Kempty Falls, Lal Tibba, and Landour in sequence each day will not work. Plan one outing at most, in the morning.</li>
         <li>Panoramic Himalayan peak views from the ridge are not reliably visible in July and August. If clear peak views are the point of your trip, book October instead.</li>
         <li>Road access can be affected for 24 to 48 hours after a heavy rainfall event. Book flexible cancellation terms.</li>
         <li>Stargazing on the George Everest ridge, which is excellent in October and April, is limited by monsoon cloud cover.</li>
       </ul>
       <p>Confirm EBC Mussoorie's operational status and access conditions directly with the property before booking July or August dates. The <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">Hotelier India feature on EBC Mussoorie</a> gives useful context on the property's outdoor hospitality philosophy across seasons.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is Mussoorie good for couples in monsoon?",
      answer:
        "At the right property, yes. Privacy is higher, rates are lower, and the atmospheric quality is at its peak. Sightseeing variety is the tradeoff.",
    },
    {
      question: "Which EBC Mussoorie room is best for a couple in monsoon?",
      answer:
        "The Glamper Room for the private sit-out. The Zenith Luxury Cottage for panoramic rain views from inside a standalone cottage.",
    },
    {
      question: "Is the bonfire available during monsoon?",
      answer:
        "Confirm directly with EBC Mussoorie for your specific dates. Availability depends on evening conditions.",
    },
    {
      question: "How far is the property from Delhi?",
      answer:
        "Approximately 290 km, 6 to 7 hours by road in normal conditions. Allow longer in active monsoon.",
    },
    {
      question: "Is EBC Mussoorie pet-friendly?",
      answer:
        "Yes, confirmed pet-friendly. Confirm any conditions when booking.",
    },
    {
      question: "What should a couple pack for a monsoon stay?",
      answer:
        "Two rain jackets, waterproof shoes with grip, a warm mid-layer for 14-degree evenings, and quick-dry clothing.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function CoupleResortMussoorieMonsoonPage() {
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
              description="Everything you need to know before booking your couple's monsoon getaway in Mussoorie."
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