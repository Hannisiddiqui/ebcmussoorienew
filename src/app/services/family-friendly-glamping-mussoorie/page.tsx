import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: family-friendly-glamping-mussoorie
  slug: "family-friendly-glamping-mussoorie",
  metaData: {
    title: "Family Friendly Glamping in Mussoorie: What Parents Should Know Before Booking | EBC Mussoorie",
    description:
      "A complete guide to family friendly glamping in Mussoorie – what makes it work for families, which accommodation suits your family size, and what to verify before booking.",
  },
  banner: {
    title: "Family Friendly Glamping in Mussoorie",
    subTitle: "What Parents Should Know Before Booking",
    description:
      "Glamping and families are a combination that sounds either brilliant or ill-advised depending on what you picture. At the premium end, it delivers a forest stay with real beds, attached bathrooms, and an outdoor experience children actually engage with.",
    image: "/banner/bnr2.png", // Replace with a family glamping banner if available
  },
  intro: {
    title: "Family Friendly Glamping in Mussoorie",
    description: [
      "Glamping and families are a combination that sounds either brilliant or ill-advised depending on what you picture when you hear the word. Parents who imagine a shared bathroom block and a groundsheet are right to hesitate. Parents who picture a properly built accommodation unit with a real bed, an attached bathroom, and a forest outside the door are picturing what the premium end of the category actually delivers.",
      "This guide explains what family-friendly glamping in Mussoorie involves, which accommodation formats work for which family compositions, and what to verify before booking.",
    ],
  },
  details: {
    title: "The Family Glamping Guide",
    subtitle: "Plan Your Family Adventure",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes Glamping Work for Families</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The outdoors is the entertainment.</strong> Children who spend most of their week in classrooms and screens respond strongly to a forest environment with room to move. A 20-acre private estate gives them that within a boundary parents can manage.</li>
         <li><strong>The novelty is genuine.</strong> A hotel room in Mussoorie is a hotel room. A glamping unit set within deodar and oak forest is different enough from home that children register it as an event.</li>
         <li><strong>The evening has structure.</strong> Bonfires and outdoor dining give the evening a shape that a hotel restaurant does not. Children engage with a fire in a way they do not engage with a buffet.</li>
         <li><strong>The pace suits families.</strong> Glamping properties are not built around a packed itinerary. That suits families with young children better than a sightseeing-driven trip.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Matching Accommodation to Family Composition</h2>
       <p>EBC Mussoorie has 14 accommodation units across seven categories. For families, three matter most:</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Surveyor Suite (1 unit)</h3>
       <p>King-size bed with a foldable queen-size bed available on request. Accommodates up to four guests. Spacious interiors, premium bathroom, scenic views, tea and coffee facilities, and high-speed WiFi.</p>
       <p><strong>Best for:</strong> Two adults and one or two children under one roof.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Twin Luxury Cottages (2 cottages, 4 rooms total)</h3>
       <p>Interconnecting luxury cottages with a shared balcony and air conditioning. Spacious bedrooms and modern bathrooms.</p>
       <p><strong>Best for:</strong> Larger families, two families travelling together, or parents who want children in an adjoining but separate room.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Andrew's Villas (2 duplex villas)</h3>
       <p>Duplex design with two bedrooms, separate entrances, spacious living areas, premium furnishings, and luxury bathrooms.</p>
       <p><strong>Best for:</strong> Multi-generational families, extended family groups, or families wanting the most space and privacy on the estate.</p>

       <p>Full details are on the <a href="/rooms" class="text-secondary underline">EBC Mussoorie accommodation page</a>. Contact the property directly to confirm which unit suits your family size and dates.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Property Features That Matter to Parents</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>20-acre private forest estate</strong> – enclosed grounds children can use</li>
         <li><strong>Park Cafe</strong> – multi-cuisine restaurant with indoor and alfresco seating, so mealtimes never require a drive</li>
         <li><strong>Private bonfire setups</strong> – the evening anchor</li>
         <li><strong>Outdoor BBQ and picnic arrangements</strong> – engaging for children and easier than a formal dinner</li>
         <li><strong>Direct road access with private parking</strong> – no long walk from a car park with luggage and tired children</li>
         <li><strong>High-speed WiFi</strong> – for the honest reason that families need it</li>
         <li><strong>Pet-friendly</strong> – confirmed, so the family dog can come</li>
         <li><strong>George Everest House adjacent</strong> – a genuine heritage site with a story children find interesting</li>
         <li><strong>Sunrise, sunset, and stargazing opportunities on the ridge</strong>, weather permitting</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Best Seasons for Family Glamping in Mussoorie</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>April to June</strong> – school summer holidays align with this window. Warm days, cool evenings, widest outdoor activity range. Book early; it is peak season.</li>
         <li><strong>October to November</strong> – clearest conditions of the year, moderate crowds, excellent stargazing. Ideal if your family can travel outside school holidays.</li>
         <li><strong>December to February</strong> – cold, with possible snowfall on the ridge. Distinctive but requires warm clothing and confirmation of heating arrangements.</li>
         <li><strong>July to September</strong> – atmospheric and quiet with lower rates, but outdoor time is restricted to morning windows and road access can be affected. Confirm operational status with the property before booking.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Practical Notes for Parents</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Footwear matters more than you think.</strong> Forest paths at 6,800 feet are uneven. Proper closed shoes with grip for every child.</li>
         <li><strong>Layers, not one warm jacket.</strong> Temperatures swing significantly between the 6 AM walk and midday.</li>
         <li><strong>Set the morning expectation before you arrive.</strong> The 6 to 8 AM window is the best part of the day at this altitude. Children who know this in advance get up for it.</li>
         <li><strong>Bring your own indoor entertainment.</strong> Books, cards, and games. Do not rely on the property to fill a rainy afternoon.</li>
         <li><strong>Confirm any specific requirements in advance.</strong> Dietary needs, extra bedding, and pet arrangements all benefit from being agreed before arrival rather than on the day.</li>
       </ul>
       <p>The <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">Hotelier India feature on EBC Mussoorie</a> covers how the property structures its outdoor experience, which is the element families respond to most.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is glamping suitable for young children?",
      answer:
        "At the premium end, yes. EBC Mussoorie's units have attached modern bathrooms, proper bedding, and solid structures rather than basic setups.",
    },
    {
      question: "Which unit accommodates four people?",
      answer:
        "The Surveyor Suite, with a king bed and a foldable queen on request.",
    },
    {
      question: "Can we get interconnecting rooms?",
      answer:
        "Yes. The Twin Luxury Cottages are interconnecting with a shared balcony and air conditioning.",
    },
    {
      question: "Is there WiFi for the children?",
      answer:
        "Yes, high-speed WiFi across all accommodation categories.",
    },
    {
      question: "Can we bring a pet?",
      answer:
        "Yes, EBC Mussoorie is confirmed pet-friendly. Confirm conditions when booking.",
    },
    {
      question: "What outdoor activities are available for families?",
      answer:
        "Estate walks on the 20-acre forest property, the adjacent George Everest heritage site, private bonfires, and outdoor BBQ and picnic setups. Confirm current availability with the property for your dates.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function FamilyFriendlyGlampingPage() {
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
              description="Everything you need to know before booking your family glamping stay in Mussoorie."
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