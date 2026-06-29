import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "camping-in-mussoorie",
  metaData: {
    title: "Camping in Mussoorie: What to Know Before You Book a Site | EBC Mussoorie",
    description:
      "A complete guide to camping in Mussoorie – types of camping, best seasons, packing tips, and family suitability. Make an informed choice for your mountain stay.",
  },
  banner: {
    title: "Camping in Mussoorie",
    subTitle: "What to Know Before You Book a Site",
    description:
      "From basic tent setups to premium glamping – understand the differences and choose the right experience for your travel group.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Understanding Your Camping Options",
    description: [
      "There is a version of camping in Mussoorie where you carry a tent, find a flat patch of hillside, and spend the night next to a gas stove. That version exists. Then there is a version where you sleep in a properly furnished tent with a real mattress, hot water, and a bonfire laid out for you. Both count as camping, but they are completely different experiences, and choosing between them without knowing the difference is how most trips go wrong. This guide covers what camping in Mussoorie actually involves, the types of camping available, what to expect across seasons, and how to choose the right setup for your travel group.",
    ],
  },
  details: {
    title: "Types of Camping & Practical Tips",
    subtitle: "Make an informed choice",
    description: [
      "Basic Tent Camping: Basic tent camping near Mussoorie typically involves rented tent setups at designated forest-adjacent sites. You bring or rent a sleeping bag, manage your own meals or eat at a nearby dhaba, and have limited access to washroom facilities. This is the most affordable format, and suits experienced campers or those specifically looking for a raw outdoor experience. Downside: weather dependency is high, comfort is minimal, and it is not suitable for families with young children, older travellers, or those visiting in winter.",
      "Glamping: Glamping, short for glamorous camping, sits at the opposite end. Furnished tents with proper beds, electricity, attached or nearby washrooms, and meals are included or available. The outdoor setting is preserved, but comfort is not compromised. Everest Base Camp Mussoorie is a premium glamping resort near George Everest Peak that operates on this model. The location combines scenic mountain surroundings with a hospitality setup closer to a boutique hotel than a campsite.",
      "Seasonal and Operator-Led Camp Setups: Several travel operators run seasonal camps near Mussoorie, particularly during the October to November and March to May windows. These are usually group-format, with fixed itineraries that include meals, guided treks, and bonfire evenings. Quality varies significantly between operators.",
      "Where Can You Camp Near Mussoorie? The areas most commonly used for camping near Mussoorie include: George Everest Peak area (accessible via Park Estate, offering forest cover, elevation, and trekking access – this is where Everest Base Camp Mussoorie operates), Dhanaulti (about 30 kilometres from Mussoorie, at a higher elevation, in a deodar forest setting, popular with operators running group camps), Bhatta Falls area (lower elevation, more accessible, but less scenic for overnight stays), and Landour ridge (limited camping options but strong appeal for day hikers and nature walkers). For travellers interested in the George Everest Peak zone specifically, this travel piece on Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? gives a useful ground-level perspective on the area.",
      "What Is the Best Season for Camping in Mussoorie? Season selection is the single most important planning decision for a camping trip here. March to May: Temperatures range from 10 to 22 degrees Celsius. Trails are dry, evenings are cool, and bonfire conditions are good. This is the best window for first-time campers. June: Early June is manageable, but the pre-monsoon humidity begins to build. Book early in the month if you must travel in summer. July to August: Monsoon season. Landslides, waterlogged trails, and persistent rainfall make outdoor camping genuinely difficult and, in some areas, risky. Not recommended for camping-focused visits. September to November: Second-best window of the year. Clear skies, post-monsoon greenery, and reduced crowd density. Excellent for stargazing and bonfire evenings. December to February: Cold, with temperatures dropping near or below freezing at night. Experienced campers with appropriate gear find this period rewarding. Not suitable for glamping beginners or families with young children without proper cold-weather preparation.",
      "What Should You Pack for Camping in Mussoorie? Essential items regardless of camp type: layered clothing, including a warm fleece or jacket, even in summer; waterproof outer layer; sturdy closed-toe shoes or trekking shoes; sunscreen and lip balm at altitude; personal medications and a basic first aid kit; power bank for devices. For basic tent camping, additionally: sleeping bag rated for sub-10 degrees Celsius; headlamp with spare batteries; a portable water filter or sufficient bottled water. For glamping stays, most of the above, beyond clothing and personal items, is provided by the property.",
      "Is Camping in Mussoorie Suitable for Families and Couples? Yes, with the right format. Glamping properties like Everest Base Camp Mussoorie accommodate families, couples, and small groups, with enclosed tent structures, proper bedding, and washroom access that basic campsites do not offer. If you are travelling with children or want a more comfortable setup, a glamping format is significantly more practical than basic tent camping. Explore what this looks like in practice through the rooms and tent accommodations at EBC Mussoorie before committing to a booking.",
    ],
  },
  faqs: [
    {
      question: "Is camping in Mussoorie safe?",
      answer: "Organised camping sites and glamping resorts offer structured and supervised setups. Independent remote camping carries standard outdoor risks and requires proper preparation.",
    },
    {
      question: "Can beginners try camping in Mussoorie?",
      answer: "Yes. Glamping is specifically well-suited to beginners who want the outdoor experience without technical camping skills.",
    },
    {
      question: "Is camping available in winter near Mussoorie?",
      answer: "Some properties operate year-round, but cold-weather preparation is essential. Confirm availability and conditions directly with your chosen property.",
    },
    {
      question: "Are pets allowed at camping sites near Mussoorie?",
      answer: "Some glamping properties are pet-friendly with applicable restrictions. Confirm the policy before booking.",
    },
    {
      question: "What is the difference between camping and glamping?",
      answer: "Camping typically involves basic tent setups with minimal facilities. Glamping provides furnished tents, proper beds, electricity, and washroom access in the same outdoor setting.",
    },
    {
      question: "How do I book a camping spot near Mussoorie?",
      answer: "Glamping properties can be booked directly through their websites. Operator-led camps are usually bookable through travel platforms or directly with the operator.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function ForestPicnicPage() {
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
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</p>
            <SectionHeading2
              title="Frequently Asked Questions"
              description="Everything you need to know before booking your camping trip."
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