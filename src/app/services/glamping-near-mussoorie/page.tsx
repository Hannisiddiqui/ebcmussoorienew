import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "glamping-near-mussoorie",
  metaData: {
    title: "Glamping Near Mussoorie: The Short List of What to Know Before You Book | EBC Mussoorie",
    description:
      "A direct breakdown of glamping options near Mussoorie: location, terrain, accommodation standards, and how to identify the best properties. Know before you book.",
  },
  banner: {
    title: "Glamping Near Mussoorie",
    subTitle: "What to Know Before You Book",
    description:
      "A specific breakdown of glamping options near Mussoorie – where they are, what they provide, and how to read listings effectively.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Glamping Near Mussoorie: The Short List",
    description: [
      `The phrase "glamping near Mussoorie" covers a wider area than most people realise when they first search it. Results include properties that are technically within the Mussoorie district but a 45-minute drive from the town centre, seasonal operator setups on rented farmland, and genuinely established resorts with permanent infrastructure near named landmarks. Knowing the difference before you pay matters. This guide is a direct, specific breakdown of the glamping options near Mussoorie: where they are actually located, what the terrain and setting look like, what standard of accommodation to expect from the best properties, and how to identify which listings are worth serious consideration.`,
    ],
  },
  details: {
    title: "The Geography of Glamping Near Mussoorie",
    subtitle: "Location & Setting",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Geography of Glamping Near Mussoorie</h2>
       <p>Mussoorie is a ridge town, approximately 15 kilometres long, positioned at around 2,000 metres above sea level. The main town centres around Landour, Library Chowk, and Mall Road. But the glamping properties that deliver the best outdoor experience sit outside the town proper, in the forested zones that extend east and west along the ridge.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">East of Mussoorie town</h3>
       <p>The area toward <strong>George Everest Peak</strong> is the strongest glamping zone near Mussoorie. The Peak itself sits about 6 kilometres from Library Chowk and is accessible via a trekking trail from Park Estate. Properties in this area sit at elevations between 1,900 and 2,100 metres in oak and rhododendron forest, with Doon Valley views on one side and forested ridgelines on the other.</p>
       <p><strong>Everest Base Camp Mussoorie</strong> is located in this zone. The resort is positioned near the George Everest Peak trekking access point and provides direct trail access without requiring a vehicle to reach the trailhead. You can explore the accommodation options at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's rooms page</a>.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">West of Mussoorie toward Kempty</h3>
       <p>Lower in elevation, more accessible by road from Dehradun, but with less dramatic ridge scenery than the eastern zone. Some operator-led camps in this area are seasonal and not permanently structured.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Dhanaulti (30 kilometres beyond Mussoorie)</h3>
       <p>Technically beyond the "near Mussoorie" zone, but often included in search results for this keyword. Dhanaulti sits at 2,286 metres in dense deodar forest. It is quieter than Mussoorie and better suited for travellers seeking a retreat format over an activity-heavy itinerary.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Glamping Near Mussoorie Actually Provides</h2>
       <p>The immediate Mussoorie zone, particularly the George Everest Peak area, offers a specific set of advantages that other Uttarakhand glamping zones do not:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Named landmark access:</strong> George Everest Peak is a historically documented site with a maintained trekking trail. Having a named, specific objective within walking distance of your accommodation adds purpose to a stay.</li>
         <li><strong>Elevation quality:</strong> At 2,000 metres, the air and temperature differences from the plains are significant and immediately noticeable. This is higher than most Rishikesh-zone camps and comparable to Dhanaulti.</li>
         <li><strong>Dual valley views:</strong> Properties on the right side of the ridge have views of both the Doon Valley to the south and the Himalayan foothills to the north. This double aspect is relatively rare in Indian hill station glamping.</li>
         <li><strong>Year-round accessibility:</strong> The road from Dehradun to Mussoorie is maintained well enough for year-round access, which is not true of all Uttarakhand glamping zones.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How to Read a Glamping Listing Near Mussoorie</h2>
       <p>When reviewing a glamping property's listing, apply these filters:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Distance from Mussoorie town:</strong> Anything listed as "near Mussoorie" that is more than 15 kilometres away requires a separate vehicle for daily access to the main town. Factor this into your itinerary.</li>
         <li><strong>Permanent vs. seasonal structure:</strong> Permanent glamping properties have year-round operations, fixed infrastructure, and ongoing staff. Seasonal setups operate on tents pitched at the start of the season and removed at the end. Both can be good, but expectations and booking flexibility differ.</li>
         <li><strong>Named location specificity:</strong> A listing that names its exact location (e.g., near George Everest Peak, Hathipaon, or Landour ridge) is more credible than one that says only "near Mussoorie" or "in the Uttarakhand hills."</li>
         <li><strong>Activity access from the property:</strong> Confirm whether trekking, bonfires, or nature walks are done from the property itself or require a booked excursion to a separate location.</li>
       </ul>
       <p>For a detailed look at what the George Everest Peak glamping zone includes as an experience, this piece on <a href="/adventure-mussoorie" class="text-secondary underline">adventure in Mussoorie with EBC Mussoorie</a> provides specific on-ground context.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Seasonal Considerations for Glamping Near Mussoorie</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>March to May:</strong> Best overall window. Mild days, cool evenings, clear skies, open trails. The most popular period for couples and weekend travellers from Delhi NCR and Chandigarh.</li>
         <li><strong>June:</strong> Pre-monsoon heat builds on the plains, but the Mussoorie ridge stays cooler. The first two weeks of June are still manageable.</li>
         <li><strong>July to August:</strong> Monsoon. Not recommended for glamping-focused visits. Trail conditions deteriorate, and rainfall is consistent.</li>
         <li><strong>September to November:</strong> Second-best window. Post-monsoon clarity is less crowded than summer and ideal for morning treks and bonfire evenings.</li>
         <li><strong>December to February:</strong> Cold, with night temperatures near or below freezing. Some properties remain open with appropriate heating. A different experience from summer, and genuinely worthwhile for the right traveller.</li>
       </ul>
       <p>Browse current accommodation availability and tent formats at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's rooms page</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "How far from Mussoorie town are most glamping properties?",
      answer:
        "The best-located glamping properties near Mussoorie sit five to ten kilometres from the main town centre, near the George Everest Peak approach.",
    },
    {
      question: "Is glamping near Mussoorie suitable for a one-night stay?",
      answer:
        "Yes, though two nights allow a more complete experience, including a morning trek and an evening bonfire.",
    },
    {
      question: "What is the road condition to glamping properties near Mussoorie?",
      answer:
        "The main Dehradun to Mussoorie highway is well-maintained. Property-specific approach roads vary; confirm current conditions before arriving.",
    },
    {
      question: "Are glamping properties near Mussoorie open in the monsoon?",
      answer:
        "Some remain operational, but outdoor activity access is significantly reduced in July and August.",
    },
    {
      question: "What is the elevation of glamping properties near Mussoorie?",
      answer:
        "Properties in the George Everest Peak zone sit at approximately 1,900 to 2,100 metres above sea level.",
    },
    {
      question: "Do glamping properties near Mussoorie include meals?",
      answer:
        "Many include breakfast and dinner in their packages. Confirm specific inclusions with the property before booking.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function GlampingNearMussooriePage() {
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
              description="Everything you need to know before booking glamping near Mussoorie."
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