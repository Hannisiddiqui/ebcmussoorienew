import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "weekend-trip-from-delhi-to-mountains",
  metaData: {
    title: "Weekend Trip from Delhi to the Mountains: Your Complete Escape Guide | EBC Mussoorie",
    description:
      "A complete guide to weekend mountain trips from Delhi – destinations, itinerary, accommodation options, and practical tips to make the most of 48 hours in the hills.",
  },
  banner: {
    title: "Weekend Trip from Delhi to the Mountains",
    subTitle: "Your Complete Escape Guide",
    description:
      "Some of India's most beautiful mountain destinations sit within 300 km of the capital. Here is how to reset without taking leave.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Weekend Trip from Delhi to the Mountains",
    description: [
      "Most people living in Delhi know the feeling. It is Thursday evening, your week has been long, and you are already searching for somewhere to go. The good news is that some of India's most beautiful mountain destinations sit within 300 km of the capital. A weekend trip from Delhi to the mountains is not just possible; it is one of the most practical ways to reset without taking leave. This guide covers the best options, practical travel details, and how to make the most of 48 hours in the hills.",
      "Delhi's geography is genuinely lucky. The Shivalik range and the lower Himalayas begin within a few hours of the city, and multiple hill towns are reachable before Friday evening is over. Here is what makes mountain weekends from Delhi work: drive time from Delhi to the most popular hill stations falls between 5 and 8 hours; the Delhi‑Meerut and Delhi‑Dehradun Expressways have cut travel time compared to older highways; multiple options exist across different budgets, travel styles, and group types; most destinations offer enough to do over two nights without feeling rushed. The key is choosing the right destination for your specific trip, not just picking the most popular one.",
    ],
  },
  details: {
    title: "The Mountain Destinations Worth Considering from Delhi",
    subtitle: "Your Escape Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Mountain Destinations Worth Considering from Delhi</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Mussoorie</h3>
       <p><strong>Distance:</strong> approximately 290 km. <strong>Drive time:</strong> 6 to 7 hours via Dehradun. Mussoorie sits at around 2,005 metres and is one of the most accessible true Himalayan hill stations from Delhi. It works for couples, families, and corporate groups alike. The range of accommodation has expanded significantly in recent years, from heritage hotels to luxury glamping resorts that sit within forested hillsides above the valley.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Lansdowne</h3>
       <p><strong>Distance:</strong> approximately 250 km. <strong>Drive time:</strong> 5 to 6 hours. Quieter than Mussoorie and far less commercialised. Lansdowne is a Garhwal Rifles cantonment town with oak forests, a small lake, and very little traffic. It is best for travellers who want genuine quiet rather than mountain town activity.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Chakrata</h3>
       <p><strong>Distance:</strong> approximately 320 km from Delhi. <strong>Drive time:</strong> 6 to 7 hours. A restricted‑area cantonment with dense forests and one of the best sunrise viewpoints in the lower Himalayas at Tiger Falls. Limited accommodation but increasingly popular with photographers and trekkers.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Kanatal</h3>
       <p><strong>Distance:</strong> approximately 310 km. <strong>Drive time:</strong> 6 to 7 hours. A small village between Chamba and Dhanaulti. Very few crowds, apple orchards, and clear night skies. Good for glamping stays and couples who want seclusion over convenience.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How to Structure a 2‑Night Mountain Weekend from Delhi</h2>
       <p>A workable structure for most Delhi travellers:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Friday night:</strong> Leave Delhi by 5 PM or earlier. Drive to your destination. Check in, have dinner, sleep.</li>
         <li><strong>Saturday:</strong> Full day for activities. Trekking, sightseeing, local market visits, or simply staying on the property if the resort offers enough on its own. For guests at EBC Mussoorie, the property's outdoor activity setup means you do not necessarily need to leave the resort to fill a day.</li>
         <li><strong>Sunday:</strong> Morning walk or activity. Check out by noon. Drive back, reaching Delhi by evening.</li>
       </ul>
       <p>This structure works because it does not try to do too much. Mountain weekends are best when they are not packed like city itineraries.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Kind of Accommodation Should You Book?</h2>
       <p>This depends entirely on what you want from the trip.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Standard hotels:</strong> Good for travellers who want a familiar setup and are primarily using the property as a base for sightseeing.</li>
         <li><strong>Boutique properties:</strong> Better suited to travellers who want character, personalised service, and fewer guests on the property at the same time.</li>
         <li><strong>Glamping resorts:</strong> The strongest option for nature‑focused travellers, couples, and groups who want an experience that feels different from a city hotel. <a href="/rooms" class="text-secondary underline">EBC Mussoorie's glamping format</a> sits within the natural landscape above Mussoorie rather than inside the town, which changes the feel of the stay entirely.</li>
         <li><strong>Homestays:</strong> Budget‑friendly, locally run, and often the best way to understand the specific character of a small hill town.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Practical Things That Actually Affect Your Weekend</h2>
       <p>A few things that most travel guides skip:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Book by Wednesday at the latest for weekend travel. Premium properties in Mussoorie fill up from Thursday onwards during the summer and October‑November.</li>
         <li>Leave Delhi before 6 AM or after 9 PM on Friday to avoid the Ghaziabad and Meerut traffic stretches.</li>
         <li>Carry your own snacks for the drive. Highway food quality on the Haridwar stretch is inconsistent.</li>
         <li>Check road conditions before heading to Chakrata or Kanatal in monsoon months. Some roads close without advance notice.</li>
         <li>Pack one warm layer more than you think you need. Even in May, Mussoorie evenings drop to around 12 to 15 degrees Celsius.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes Mussoorie the Default Choice for Most Delhi Travellers?</h2>
       <p>Among all the hill stations within weekend range of Delhi, Mussoorie gets chosen most often because it has the largest range of things to do, the best connectivity, and accommodation options at every price point.</p>
       <p>Specific draws include:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Gun Hill, accessible by ropeway, with views across the Doon Valley</li>
         <li>Lal Tibba, the highest point in Mussoorie, with binoculars pointed toward Bandarpunch and Kedarnath peaks on clear days</li>
         <li>Kempty Falls, 15 km from Mussoorie town, heavily visited but genuinely impressive in volume</li>
         <li>Camel's Back Road, a 3 km walking track along the ridge that works well at sunrise</li>
         <li>The Library and Landour area for quieter walks and vintage bookshops</li>
       </ul>
       <p>For travellers who want to go beyond the town and stay somewhere that feels less like a hill station tourist zone, a property like <a href="/" class="text-secondary underline">EBC Mussoorie</a> sits outside the main crowd while remaining accessible.</p>
       <p>Read more about what an adventure‑style mountain stay near Mussoorie actually looks like in this detailed <a href="/adventure-mussoorie" class="text-secondary underline">trip account on Tripoto</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which hill station is closest to Delhi?",
      answer:
        "Lansdowne, at around 250 km, is one of the closest, though Mussoorie at 290 km offers significantly more to do over a full weekend.",
    },
    {
      question: "Is it possible to do a one‑night mountain trip from Delhi?",
      answer:
        "Yes, but two nights is strongly recommended. One night leaves most of Saturday in the car.",
    },
    {
      question: "What is the best month for a Delhi to the mountains weekend?",
      answer:
        "March to June and October to November are the most reliable windows for good weather and road access.",
    },
    {
      question: "Is Mussoorie safe for solo travellers?",
      answer:
        "Yes. It is one of the best‑connected hill towns near Delhi and has a functional local infrastructure.",
    },
    {
      question: "How much does a two‑night Mussoorie trip cost on average?",
      answer:
        "Depending on accommodation type, budget travellers can manage around Rs 4,000 to 6,000 for two nights. Luxury glamping or boutique properties run from Rs 12,000 upward per night.",
    },
    {
      question: "Do I need to book activities in advance?",
      answer:
        "For trekking guides and specific outdoor experiences, yes. For standard sightseeing around Mussoorie town, walk‑in is usually fine.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function WeekendTripPage() {
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
              description="Everything you need to know before planning your weekend mountain trip from Delhi."
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
