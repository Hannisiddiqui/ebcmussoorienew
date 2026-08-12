import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: bonfire-experience-resort-hills-india
  slug: "bonfire-experience-resort-hills-india",
  metaData: {
    title: "Bonfire Experience at a Resort in the Hills of India: What Makes It Worth Planning Around | EBC Mussoorie",
    description:
      "A complete guide to the bonfire experience at hill resorts in India – what makes it different, which regions deliver it best, and how to choose a property where the evening around the fire is the centrepiece.",
  },
  banner: {
    title: "Bonfire Experience at a Resort in the Hills of India",
    subTitle: "What Makes It Worth Planning Around",
    description:
      "A bonfire at a hill resort sounds simple—until you have had a genuinely good one. Then you understand why returning guests mention it specifically. The fire, the night air, the forest around it, and the quality of an evening spent outdoors at altitude.",
    image: "/banner/bnr2.png", // Replace with a bonfire banner if available
  },
  intro: {
    title: "Bonfire Experience at a Resort in the Hills of India",
    description: [
      "A bonfire at a hill resort in India is one of those experiences that sounds simple until you have had a genuinely good one. Then you understand why returning guests at properties like EBC Mussoorie mention it specifically when they describe what made the stay memorable. Not the room. Not the view. The fire, the night air, the forest around it, and the specific quality of an evening spent outdoors at altitude with nothing competing for your attention.",
      "This guide covers what makes a hill resort bonfire experience worth planning around, which regions and property types deliver it best, and what to look for when choosing a property where the evening around a fire will be the centrepiece rather than an afterthought.",
    ],
  },
  details: {
    title: "The Ultimate Bonfire Guide",
    subtitle: "Plan Your Evening Escape",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why the Bonfire Experience at a Hill Resort Is Different from a City Firepit</h2>
       <p>The mechanics are similar. The experience is categorically different. Here is why:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Temperature creates genuine need:</strong> At 2,000 metres in the Mussoorie hills, evening temperatures drop to 10 to 15 degrees Celsius in October and November, and to 7 to 12 degrees even in May. A bonfire at this temperature is not decoration. It is warmth you actually need. The physical relief of moving closer to the fire, the way the heat reaches your face while the cold stays on your back, is an experience that a city firepit at 28 degrees ambient temperature cannot replicate.</li>
         <li><strong>The surrounding environment changes the sensory context:</strong> A bonfire in a deodar forest, with the Doon Valley visible below and the forest canopy blocking the sky overhead, engages every sense simultaneously. The woodsmoke catches on resinous deodar in a way that produces a specific scent combination found nowhere else. The sound of the fire competes with wind in the upper canopy and the calls of nocturnal birds. The light of the fire is the only light source in a direction for several hundred metres. This is the specific sensory environment that hill resort bonfires at well-positioned properties produce, and it cannot be manufactured at lower altitudes or in built-up settings.</li>
         <li><strong>The social dynamic changes:</strong> Around a fire at night, at a hill resort away from city schedules, people talk differently. The absence of ambient noise, screens, and the social props of a restaurant or bar environment removes the usual distractions. Couples, families, and corporate groups consistently report that bonfire evenings produce conversations that do not happen in other settings.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">EBC Mussoorie: Where the Bonfire Experience Is Built Into the Property Design</h2>
       <p>EBC Mussoorie is a luxury glamping resort on a 20-acre private forest estate beside George Everest House on the western Mussoorie ridge. Private bonfire setups on the estate are a confirmed property feature, not an ad hoc arrangement.</p>
       <p>The estate's specific qualities make the bonfire experience here more than a standard hill resort offering:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The George Everest heritage context:</strong> The adjacent George Everest House estate is the restored property of Sir George Everest, Surveyor General of India and the man after whom Mount Everest was named. Sitting around a fire in the evening beside this heritage site, on a ridge that Everest himself used as a survey position, gives the setting a specific identity that generic hill resort bonfires do not have.</li>
         <li><strong>The 20-acre forest estate:</strong> The bonfire clearing at EBC Mussoorie sits within a private 20-acre estate of deodar and oak. The tree cover around the fire changes the light, the sound, and the smell of the experience. There are no road-facing positions, no other guest properties visible from the fire area, and no ambient town lighting to dilute the dark-sky quality above the fire.</li>
         <li><strong>The full-property social dynamic:</strong> With a maximum capacity of 28 guests without extra beds and up to 50 with extra beds across 14 accommodation units, the bonfire at EBC Mussoorie is not a public event. It is a private or semi-private experience depending on occupancy. Couples or small groups who book during lower-occupancy periods may have the bonfire clearing largely to themselves.</li>
         <li><strong>The Park Cafe integration:</strong> The on-site Park Cafe with indoor and alfresco seating provides the food and beverage service that makes an extended bonfire evening functional rather than just atmospheric. Hot drinks, outdoor BBQ arrangements, and group dining around the fire are available as part of the estate's confirmed hospitality features.</li>
       </ul>
       <p>View the <a href="/rooms" class="text-secondary underline">accommodation options at EBC Mussoorie</a> to plan the right stay configuration for a bonfire-centred visit.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Best Hill Regions in India for a Resort Bonfire Experience</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Uttarakhand: Mussoorie and the Garhwal Hills:</strong> The combination of altitude, deodar forest, and cool temperatures year-round makes Uttarakhand the strongest region in India for a hill resort bonfire experience. The specific scent of deodar resin in cool air beside a fire is one of the defining sensory memories of a Mussoorie stay. Best season: October to November for cold, clear evenings and minimal rainfall. April to June for cool evenings without winter chill. December to February for the most dramatic cold-weather bonfire experience.</li>
         <li><strong>Himachal Pradesh: Kasauli, Shimla hinterland, Manali:</strong> Himachal properties above 1,500 metres offer comparable altitude and forest conditions to Uttarakhand. Properties in the Kasauli and Chail area are particularly well-positioned for bonfire evenings with valley views across the Sutlej and Beas drainage systems.</li>
         <li><strong>Coorg, Karnataka: Coffee estate bonfires:</strong> A completely different forest character from the Himalayan foothills. Coffee and pepper plantation bonfires in Coorg produce a tropical-forest sensory environment rather than a mountain one. Best in the cooler months of November to February.</li>
         <li><strong>Rajasthan: Desert camp bonfires:</strong> The only Indian context where a bonfire under a genuinely clear desert sky is available. The absence of forest cover is the trade-off: the star density above a Jaisalmer desert camp bonfire compensates for it.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Look for in a Hill Resort Bonfire Experience</h2>
       <p>Not every property that offers a bonfire delivers the experience worth seeking. These are the specific features that matter:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Private vs. shared bonfire setup:</strong> A bonfire shared between 50 guests at a large resort is a social event. A private bonfire on an estate you have largely to yourself is a different experience. EBC Mussoorie's boutique scale makes the latter more likely.</li>
         <li><strong>Forest clearing vs. paved area:</strong> A bonfire in a proper forest clearing with earth and grass underfoot, surrounded by trees, is the authentic experience. A firepit in a paved courtyard between buildings is a firepit.</li>
         <li><strong>Seating arrangement:</strong> Log seating, arranged stone seating, or proper outdoor chairs arranged at the right distance from the fire (close enough for warmth, spread enough to avoid smoke) makes the difference between a comfortable two-hour evening and an uncomfortable one.</li>
         <li><strong>Catering integration:</strong> Hot drinks, bhuttas (roasted corn), outdoor BBQ, or a properly set outdoor dinner alongside the fire extends the bonfire from a thirty-minute activity to a three-hour evening. Confirm what food and drink service is available at the bonfire location when booking.</li>
         <li><strong>Season-specific considerations:</strong> In monsoon (July to September), confirm whether the bonfire setup has partial cover for use after evening rain stops. In winter (December to February), confirm whether the fire size is adequate for the lower temperatures. In peak summer (May to June), confirm whether a bonfire is available even when daytime temperatures are warm.</li>
       </ul>
       <p>For a first-person account of what the EBC Mussoorie estate evening experience actually feels like, <a href="https://www.tripoto.com/trip/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Tripoto account of EBC Mussoorie</a> gives grounded traveller-level detail.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Structuring a Stay Around the Bonfire Experience</h2>
       <p>If the bonfire evening is the centrepiece of a visit to EBC Mussoorie or any hill resort, the rest of the day should be structured to maximise arrival quality at the fire:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Morning:</strong> Active outdoor time. A forest walk, a trek to a nearby viewpoint, or birding on the estate. Physical activity in cool mountain air creates the appetite and energy expenditure that makes a sedentary evening around a fire feel genuinely earned rather than just a default activity.</li>
         <li><strong>Afternoon:</strong> Rest. A long lunch at the Park Cafe, a quiet hour in the accommodation, or a shorter nature walk. The afternoon is not the centrepiece. Save energy for the evening.</li>
         <li><strong>Pre-bonfire:</strong> Shower, change into warm layers, be at the bonfire location by the time it is lit. Missing the first twenty minutes of a hill bonfire, when the fire is building, and the light is transitioning from dusk to dark, is missing the best part.</li>
         <li><strong>At the fire:</strong> Stay longer than you think you will. The quality of a hill bonfire evening tends to improve over the first hour as the fire settles, the temperature drops further, and the conversation deepens. Two to three hours is the natural duration of a well-managed bonfire evening.</li>
       </ul>
       <p>As described in <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Hotelier India feature on EBC Mussoorie</a>, the property's outdoor experience design is built around exactly this kind of curated evening anchoring.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which season is best for a bonfire at a hill resort in India?",
      answer:
        "October to November is the optimal window: cold enough for a fire to be genuinely warming, clear skies, and dry conditions. December to February offers the most dramatic cold-weather bonfire experience but requires proper winter clothing.",
    },
    {
      question: "Does EBC Mussoorie include the bonfire in the room rate?",
      answer:
        "Private bonfire setups are a confirmed property feature. Confirm whether this is included in your specific package or charged separately when booking.",
    },
    {
      question: "Can a bonfire be arranged for a large corporate group at EBC Mussoorie?",
      answer:
        "Yes. EBC Mussoorie accommodates corporate groups and outdoor evening programming including bonfires. Contact the property directly for group bonfire arrangements and group dining options.",
    },
    {
      question: "Is a bonfire available at EBC Mussoorie in monsoon?",
      answer:
        "Confirm with EBC Mussoorie directly for July to August dates. Bonfire availability in monsoon depends on evening weather conditions and the specific setup available at the property.",
    },
    {
      question: "What should I wear to a bonfire at a Mussoorie hill resort?",
      answer:
        "A warm fleece or down jacket, comfortable outdoor trousers, and closed shoes. At 6,800 feet, even summer evenings drop significantly after 7 PM. Bring a layer more than you think you need.",
    },
    {
      question: "How far is EBC Mussoorie from Delhi for a bonfire weekend trip?",
      answer:
        "Approximately 290 km, 6 to 7 hours by road via the Delhi-Dehradun Expressway. A Friday evening departure reaching EBC Mussoorie by late evening leaves Saturday fully available for the day-and-bonfire experience.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function BonfireExperiencePage() {
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
              description="Everything you need to know before planning your bonfire experience at a hill resort."
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