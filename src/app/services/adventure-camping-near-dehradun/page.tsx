import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "adventure-camping-near-dehradun",
  metaData: {
    title: "Adventure Camping Near Dehradun: The Activity-First Guide for Outdoor Travellers | EBC Mussoorie",
    description:
      "A practical guide to adventure camping near Dehradun – trekking, rappelling, cycling, and more. Plan your activity-first trip with trail tips, itineraries, and safety advice.",
  },
  banner: {
    title: "Adventure Camping Near Dehradun",
    subTitle: "The Activity-First Guide for Outdoor Travellers",
    description:
      "Trekking, trail hiking, rappelling, and mountain cycling – a guide to planning an adventure camping trip where the activity is as important as the accommodation.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Adventure Camping Near Dehradun",
    description: [
      "Not every camping trip to the Dehradun hills is built around a bonfire and a scenic tent. Some travellers come specifically for the physical experience: the burning legs on a steep ascent, the cold air at altitude, the kind of tiredness that only comes from a full day of outdoor movement. This guide is for that traveller. Adventure camping near Dehradun covers a specific category of outdoor stays where the activity is as important as the accommodation. This is not a relaxation retreat. It is a framework for planning a trip where trekking, trail navigation, and outdoor challenge form the core of the itinerary, with the camp or glamping base serving as a recovery and relaunch point between days.",
    ],
  },
  details: {
    title: "What Adventure Camping Near Dehradun Actually Involves",
    subtitle: "An Activity-First Approach",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Adventure Camping Near Dehradun Actually Involves</h2>
       <p>The Dehradun region sits at the foot of the Garhwal Himalayas, giving it access to terrain that escalates rapidly from river valley at 600 metres to forest ridgelines at 2,000 metres and beyond. This elevation range within a short driving distance is what makes adventure camping here viable as a multi-activity format rather than a single-experience destination.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Core Activities Available in This Zone</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Trekking and Trail Hiking</h3>
       <p>The most consistent adventure activity available near Dehradun year-round (outside of monsoon). Trail options range significantly in difficulty:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Camel's Back Road and George Everest Peak approach (Mussoorie belt):</strong> 2 to 4 hours return, suitable for active beginners and families with older children</li>
         <li><strong>Nag Tibba base trek from Pantwari:</strong> approximately 16 kilometres return, reaches 3,022 metres, suitable for experienced day hikers</li>
         <li><strong>Hathi Paon to George Everest Peak via the forest loop:</strong> a longer variant of the George Everest Peak route with additional forest trail sections</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Rappelling and Rock Climbing</h3>
       <p>Several operators in the Rishikesh and Mussoorie belt run structured rappelling sessions at fixed cliff faces. These are not technical climbs requiring multi-day skill courses but are physically demanding and require a head for heights. Appropriate for fit adults and teenagers aged 14 and above.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">White Water Rafting (Rishikesh Corridor)</h3>
       <p>Technically outside the immediate Mussoorie glamping zone but within 45 minutes of Dehradun, the Ganga stretch between Shivpuri and Rishikesh offers Grade 2 to Grade 4 rapids depending on the section. This is typically run as a half-day excursion, combinable with an overnight camp nearby.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Mountain Cycling</h3>
       <p>Trail cycling options exist in the Mussoorie outskirts and the Landour ridge area. This is an activity that rewards experience: mountain terrain at 2,000 metres with gradient variations requires fitness and cycling-specific comfort on uneven surfaces.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Basing Your Adventure from a Camp Near George Everest Peak</h2>
       <p>The logic of choosing a base camp well is that it determines what you can access each morning without additional driving. For the Mussoorie belt specifically, a camp positioned near George Everest Peak gives you:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Direct trail access without a vehicle</li>
         <li>Elevation already established at roughly 2,000 metres, reducing early morning commute time to higher trailheads</li>
         <li>A genuine outdoor atmosphere that primes the physical mindset rather than requiring a transition from a comfortable city hotel</li>
       </ul>
       <p><strong>Everest Base Camp Mussoorie</strong> is positioned with exactly this in mind. The premium glamping resort near George Everest Peak sits at the edge of accessible trail territory, making morning departures practical without sacrificing a proper night's sleep. You can explore the accommodation options at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's rooms page</a>.</p>
       <p>This piece on <a href="/adventure-mussoorie" class="text-secondary underline">adventure experiences at EBC Mussoorie</a> covers what the property's outdoor access looks like from the ground.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Building a Two-Night Adventure Camping Itinerary Near Dehradun</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Day 1:</strong> Arrive from Dehradun by early afternoon. Orientation walk from camp toward George Everest Peak approach trail (1 to 2 hours). Camp dinner and equipment prep for Day 2.</li>
         <li><strong>Day 2 (Primary Adventure Day):</strong> Early departure for a full George Everest Peak or forest loop trek (3 to 5 hours total). Afternoon recovery: rest, stretching, optional short nature walk. Evening bonfire and debrief.</li>
         <li><strong>Day 3:</strong> Morning: short trail or ridge walk before checkout. Option to add a half-day rafting excursion via Rishikesh before returning to Dehradun.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Pack for Adventure Camping Near Dehradun</h2>
       <p>Essential items regardless of season:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Trekking boots with ankle support (not trail runners for steep terrain)</li>
         <li>Moisture-wicking base layer and insulating mid layer</li>
         <li>Waterproof outer layer even in summer</li>
         <li>Trekking poles, if you have knee sensitivity on descents</li>
         <li>Personal first aid, including blister treatment and muscle pain relief</li>
         <li>At least 2 litres of water capacity (refillable at camp)</li>
         <li>Headlamp for pre-dawn starts</li>
         <li>Sun protection at altitude: SPF 50 sunscreen, UV-blocking sunglasses, and a hat</li>
       </ul>
       <p>For guests staying at <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a>, accommodation essentials like bedding and lighting are provided. Confirm what the property supplies versus what you need to bring when booking through <a href="/rooms" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Safety Considerations for Adventure Camping Near Dehradun</h2>
       <p>Adventure activities carry inherent risk. Be accurate about these:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Trekking difficulty ratings are guidelines, not guarantees. Your pace, fitness level, and trail conditions on the day affect the experience.</li>
         <li>Mountain weather changes quickly at 2,000 metres and above. Start treks early and build in time to descend before afternoon cloud cover arrives.</li>
         <li>Inform your camp of your planned route and estimated return time before any solo or small-group trek.</li>
         <li>Altitude above 2,500 metres can affect some individuals. The Mussoorie belt at 2,000 metres is generally well within comfortable range, but listen to your body.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "What adventure activities are available near Dehradun for camping travellers?",
      answer:
        "Trekking, trail hiking, rappelling, mountain cycling, and white-water rafting are accessible from camps in the Mussoorie and Rishikesh belt.",
    },
    {
      question: "Is adventure camping near Dehradun suitable for beginners?",
      answer:
        "Yes, with appropriate activity selection. The George Everest Peak trek is manageable for active beginners. Technical activities like rappelling require operator guidance.",
    },
    {
      question: "What is the best season for adventure camping near Dehradun?",
      answer:
        "March to May and September to November offer the most reliable trail conditions. Monsoon months carry trail and road risk.",
    },
    {
      question: "How fit do I need to be for a trekking camp near Dehradun?",
      answer:
        "For the Mussoorie belt treks, regular walking fitness is sufficient. Longer routes like Nag Tibba require active preparation.",
    },
    {
      question: "Are guided treks available from glamping camps near Dehradun?",
      answer:
        "Some properties offer guided trek access. Confirm availability and trail options directly with the property before booking.",
    },
    {
      question: "Is adventure camping near Dehradun suitable for groups?",
      answer:
        "Yes. Group bookings for trekking camps and adventure stays are common. Confirm capacity and group activity options with your chosen property.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function AdventureCampingPage() {
  const renderContent = (htmlString) => {
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
              description="Everything you need to know before booking your adventure camping trip near Dehradun."
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