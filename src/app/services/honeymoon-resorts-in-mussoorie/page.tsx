import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: honeymoon-resorts-in-mussoorie
  slug: "honeymoon-resorts-in-mussoorie",
  metaData: {
    title: "Honeymoon Resorts in Mussoorie: A Practical Guide to Choosing the Right Property for Your Stay | EBC Mussoorie",
    description:
      "A complete guide to honeymoon resorts in Mussoorie – what the property categories offer, how to match the right type to your stay, and why EBC Mussoorie's specific offering is worth understanding before you book.",
  },
  banner: {
    title: "Honeymoon Resorts in Mussoorie",
    subTitle: "A Practical Guide to Choosing the Right Property for Your Stay",
    description:
      "The Mussoorie honeymoon has been a staple of Indian romantic travel for over a century. The challenge for couples today is that the accommodation landscape has changed—and the traditional hotel format is no longer the obvious best choice.",
    image: "/banner/bnr2.png", // Replace with a honeymoon banner if available
  },
  intro: {
    title: "Honeymoon Resorts in Mussoorie",
    description: [
      "The Mussoorie honeymoon has been a staple of Indian romantic travel for over a century. The appeal has always been straightforward: a hill station within reach of Delhi, cool air, forested ridges, and accommodation options ranging from colonial-era heritage hotels to modern boutique properties. The challenge for couples planning today is that the accommodation landscape has changed significantly, and the traditional hotel format is no longer the obvious best choice.",
      "This guide covers what Mussoorie's honeymoon accommodation options actually look like in the current market, how to match the right property type to what you want from the stay, and why EBC Mussoorie's specific offering is worth understanding before you book.",
    ],
  },
  details: {
    title: "The Honeymoon Guide",
    subtitle: "Find Your Perfect Stay",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Couples Are Actually Looking for in a Mussoorie Honeymoon Property</h2>
       <p>Based on what matters to couples booking a Mussoorie honeymoon, the priorities typically organise as follows:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Privacy above all else.</strong> A honeymoon in a property where thirty other couples are having breakfast simultaneously, where corridors carry sound from adjacent rooms, and where the common areas are shared with school trip groups does not deliver the intimacy the occasion requires.</li>
         <li><strong>A setting that is the experience, not just a backdrop.</strong> The best Mussoorie honeymoon properties are not hotels with a hill station outside their windows. They are properties where the forested hillside, the valley view, and the outdoor evening environment are inseparable from the stay itself.</li>
         <li><strong>Evenings that actually work.</strong> A good honeymoon property delivers on the evening as much as the daytime: a private outdoor space, a bonfire option, quality on-site dining, and a setting where the night air and the hillside are as present as the room.</li>
         <li><strong>Specific, confirmed amenities rather than vague luxury claims.</strong> Couples who have been disappointed by Mussoorie properties previously consistently cite the same issue: the property looked better in photographs than in reality. The solution is confirmed, specific amenities rather than generic "luxury" descriptors.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Property Categories Available for a Mussoorie Honeymoon</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Heritage Hotels</h3>
       <p>The large legacy hotels on the Mussoorie ridge have been hosting honeymooners for decades. The Savoy is the best-known example. These properties offer formal dining, heritage architecture, and brand recognition. The trade-off is scale: these are busy hotels with hundreds of guests simultaneously. Privacy is not a structural feature.</p>
       <p><strong>Best for:</strong> couples who value heritage, formal service, and a recognisable brand over intimacy and privacy.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Boutique Guesthouses</h3>
       <p>Smaller, independently operated properties, typically 8 to 15 rooms. More personal service than large hotels. Variable in quality. Best verified through guest reviews specifically from couple and honeymoon stays.</p>
       <p><strong>Best for:</strong> couples who want character and personal service on a moderate budget.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Luxury Glamping and Nature Resorts</h3>
       <p>The newest and most distinctive category in Mussoorie's honeymoon market. These properties sit outside the commercial town centre within forested estates, offer premium accommodation with outdoor orientation, and prioritise the natural environment as the primary experience rather than hotel amenities.</p>
       <p>EBC Mussoorie is the leading example of this category in Mussoorie. Located on a 20-acre private deodar and oak forest estate beside George Everest House at approximately 6,800 feet on the western ridge, it offers 14 accommodation units across seven categories with a confirmed set of amenities specifically suited to a honeymoon stay.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">EBC Mussoorie for a Honeymoon: What It Specifically Offers</h2>
       <p>The confirmed property features at EBC Mussoorie that are directly relevant to a honeymoon couple:</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Accommodation options for couples:</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The Glamper Rooms (4 units)</strong> are the signature honeymoon accommodation: spacious rooms with private sit-outs, forest and valley views, king-size beds, and premium amenities. The private sit-out is the key feature for a couple wanting an intimate outdoor space within the accommodation unit itself.</li>
         <li><strong>The Zenith Luxury Cottage (1 unit)</strong> is a standalone cottage with large panoramic windows that frame the forest and valley landscape. For couples who want the most visually immersive experience from within the room, the cottage's window design is specifically suited to this purpose.</li>
         <li><strong>Andrew's Villas (2 units)</strong> are the property's highest-tier accommodation: duplex villas with two bedrooms, separate entrances, spacious living areas, and premium furnishings. For couples who want the most private and spacious option on the estate, this is the choice.</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Confirmed property amenities:</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Park Cafe with indoor and alfresco dining for intimate couple dinners</li>
         <li>Private bonfire setups on the 20-acre estate</li>
         <li>Outdoor BBQ arrangements</li>
         <li>Stargazing access on the George Everest ridge (weather permitting)</li>
         <li>High-speed WiFi across all units</li>
         <li>Pet-friendly facilities for couples travelling with pets</li>
         <li>George Everest House heritage site adjacent to the estate for morning walks</li>
       </ul>
       <p>View the <a href="/rooms" class="text-secondary underline">full accommodation range at EBC Mussoorie</a> and contact the property directly to discuss honeymoon-specific arrangements including preferred unit, special requests, and seasonal availability.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Seasonal Guidance for a Mussoorie Honeymoon</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November (Recommended as the primary honeymoon window):</strong> Post-monsoon clarity makes this the visually strongest season for valley and mountain views from the estate. Temperatures are crisp and cool (8 to 18 degrees Celsius), making a bonfire evening genuinely warming. Clear skies make stargazing from the George Everest ridge particularly rewarding. Crowds in the commercial town centre are moderate rather than peak.</li>
         <li><strong>April to June (Strong pre-monsoon window):</strong> Warm days and cool evenings. The widest outdoor activity range. The deodar forest is at its freshest green before the monsoon. May is peak season, so book well in advance.</li>
         <li><strong>December to February (Winter honeymoon):</strong> Cold and quiet. The possibility of snowfall on the George Everest ridge makes this window visually distinctive. Requires confirmation of heating infrastructure at the property. Rates are typically lower than peak season. Best for couples who specifically want a cold-weather, winter-blanket, fireside honeymoon experience.</li>
         <li><strong>July to August (Monsoon honeymoon):</strong> Atmospheric, private, and significantly cheaper than peak season. The forest mist, the valley cloud, and the bonfire evenings are all at their most dramatic. The trade-off is limited outdoor sightseeing. Suitable for couples who value intimacy and atmosphere over activity variety. Confirm operational status and road access with EBC Mussoorie before booking monsoon dates.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Ask Before Booking a Mussoorie Honeymoon Property</h2>
       <p>These questions, asked before committing, prevent the most common honeymoon property disappointments:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Is the accommodation unit we are booking private or shared-wall with adjacent units?</li>
         <li>What is the occupancy level typically like during our dates?</li>
         <li>Does the property host group events, parties, or corporate bookings simultaneously with individual guests?</li>
         <li>Is the bonfire included or separately charged?</li>
         <li>What is the on-site dining setup for an intimate couple dinner?</li>
         <li>What is the cancellation and rescheduling policy?</li>
       </ul>
       <p>A property that answers these specifically and in writing is significantly more trustworthy than one that deflects with general "luxury experience" language.</p>
       <p>As described in <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Hotelier India feature on EBC Mussoorie</a>, the property is built around a specific outdoor hospitality philosophy that produces a genuinely distinctive experience from standard hotel stays.</p>
       <p>For a first-person account of the property and estate atmosphere, <a href="https://www.tripoto.com/trip/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Tripoto piece on EBC Mussoorie</a> is the most grounded external reference available.</p>`,
    ],
  },
  faqs: [
    {
      question: "What is the most romantic accommodation at EBC Mussoorie for a honeymoon?",
      answer:
        "The Glamper Rooms for the signature glamping experience with a private sit-out. The Zenith Luxury Cottage for the most visually immersive standalone cottage with panoramic windows. Andrew's Villas for the most spacious and private option on the estate.",
    },
    {
      question: "Is EBC Mussoorie better than a heritage hotel for a Mussoorie honeymoon?",
      answer:
        "For couples who prioritise privacy, nature immersion, and an intimate outdoor evening experience over formal dining and heritage architecture, EBC Mussoorie's boutique glamping format delivers a qualitatively different and more private experience than large heritage hotels.",
    },
    {
      question: "What is the best season for a honeymoon in Mussoorie?",
      answer:
        "October to November for the clearest conditions and most rewarding views. April to June for the widest outdoor activity range. December to February for a winter bonfire experience.",
    },
    {
      question: "How far is EBC Mussoorie from the main Mussoorie town?",
      answer:
        "The property is on the western Mussoorie ridge near George Everest House, away from the Mall Road commercial area. Contact EBC Mussoorie directly for the specific distance and access route.",
    },
    {
      question: "Does EBC Mussoorie offer any honeymoon-specific packages?",
      answer:
        "Contact the property directly to discuss honeymoon arrangements, preferred accommodation categories, and any special experience options available for couple stays.",
    },
    {
      question: "Is EBC Mussoorie pet-friendly for couples travelling with pets?",
      answer:
        "Yes. EBC Mussoorie is confirmed pet-friendly. Confirm any specific pet conditions or restrictions when booking.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function HoneymoonResortsPage() {
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
              description="Everything you need to know before booking your honeymoon resort in Mussoorie."
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