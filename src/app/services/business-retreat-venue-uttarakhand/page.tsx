import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: business-retreat-venue-uttarakhand
  slug: "business-retreat-venue-uttarakhand",
  metaData: {
    title: "Business Retreat Venue in Uttarakhand: A Selection Framework for Decision Makers | EBC Mussoorie",
    description:
      "A complete selection framework for choosing a business retreat venue in Uttarakhand – capacity, environment, infrastructure, and what to verify in writing before committing.",
  },
  banner: {
    title: "Business Retreat Venue in Uttarakhand",
    subTitle: "A Selection Framework for Decision Makers",
    description:
      "Choosing a business retreat venue has an asymmetric risk profile. A good venue does not guarantee a good retreat, but a bad one reliably produces a bad retreat. This guide is a selection framework, not a recommendation list.",
    image: "/banner/bnr2.png", // Replace with a business retreat banner if available
  },
  intro: {
    title: "Business Retreat Venue in Uttarakhand",
    description: [
      "Choosing a business retreat venue is a decision with an asymmetric risk profile. A good venue does not guarantee a good retreat, but a bad one reliably produces a bad retreat. The meeting room that seats fewer people than your team, the WiFi that collapses under fifteen simultaneous users, the kitchen that cannot handle your dietary spread, and the property hosting a wedding on your second night are all failures that no amount of good facilitation recovers from.",
      "This guide is a selection framework rather than a recommendation list. It covers what to assess, in what order, and what to verify in writing before committing.",
    ],
  },
  details: {
    title: "The Business Retreat Framework",
    subtitle: "Assess, Compare, Decide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer One: Capacity Fit</h2>
       <p>The first filter, and the one most often applied incorrectly.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Accommodation capacity:</strong> Confirm the maximum guest count the property can house, not the number of rooms. These are different numbers. For reference, EBC Mussoorie on the western Mussoorie ridge has 14 luxury accommodation units across seven categories, housing 28 guests without extra beds and up to 50 with extra beds. A planner reading only "14 units" and assuming double occupancy would arrive at a different figure than the confirmed capacity.</li>
         <li><strong>Dining capacity, simultaneous:</strong> Can the property seat your entire group for a meal at the same time? A property that can house 30 but seats 18 in its restaurant will split your group across two sittings, which undermines the shared-meal dynamic that retreats depend on.</li>
         <li><strong>Meeting capacity, by format:</strong> Theatre seating and boardroom seating produce very different numbers from the same room. Ask for the seated capacity in your specific required format.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Two: Environment Fit</h2>
       <p>Once capacity is confirmed, assess whether the environment does what you need it to do.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Isolation from external disruption:</strong> A retreat venue on a commercial hill station main road will have traffic, pedestrian noise, and general tourist activity through the day. A venue on a private estate away from the commercial zone will not. EBC Mussoorie sits on a 20-acre private forest estate beside George Everest House, positioned away from Mall Road traffic. For a retreat where sustained concentration is the objective, this positioning is a functional feature rather than a scenic one.</li>
         <li><strong>Exclusivity potential:</strong> Can your group take the whole property? At 14 units, a group of 20 to 28 can effectively do so at EBC Mussoorie. This eliminates the risk of sharing common areas with leisure guests or another group.</li>
         <li><strong>Outdoor programme capability:</strong> Confirmed features at EBC Mussoorie relevant to retreat programming include private bonfire setups, outdoor BBQ and picnic arrangements, the 20-acre estate for walking sessions, and the adjacent George Everest heritage site.</li>
       </ul>
       <p>Review the <a href="/rooms" class="text-secondary underline">accommodation and estate setup</a> before contacting the property.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Three: Infrastructure Fit</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Connectivity:</strong> Ask specifically about bandwidth performance under your expected simultaneous user load, not headline speed. High-speed WiFi is confirmed across all EBC Mussoorie accommodation categories; confirm expected performance for your group size during the inquiry.</li>
         <li><strong>AV:</strong> Establish what the property provides versus what you need to bring. Projectors, screens, microphones, and flip charts are frequently not standard at boutique properties.</li>
         <li><strong>Power reliability:</strong> Ask about backup power provision, particularly for retreats with heavy presentation content.</li>
         <li><strong>F&B flexibility:</strong> Can meal timings shift if your session runs long? Can the kitchen handle your dietary spread, and what lead time does it need?</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Four: Access and Risk</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Travel time and route:</strong> EBC Mussoorie is approximately 290 km from Delhi (6 to 7 hours by road) and approximately 60 km from Jolly Grant Airport, Dehradun, which handles direct flights from Delhi, Mumbai, and Bangalore.</li>
         <li><strong>Arrival logistics:</strong> Direct road access with private parking is a confirmed feature at EBC Mussoorie. For a group arriving by coach, this matters more than it sounds.</li>
         <li><strong>Seasonal risk:</strong> February to April and September to November are the most reliable windows. For July to August dates, confirm road access conditions and property operational status directly before committing.</li>
         <li><strong>Cancellation terms:</strong> Get these in writing before paying a deposit, particularly for monsoon or winter dates.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Written Confirmation Checklist</h2>
       <p>Before signing any deposit, have written confirmation of:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Simultaneous accommodation capacity for your headcount</li>
         <li>Simultaneous dining capacity</li>
         <li>Meeting space seated capacity in your required format</li>
         <li>WiFi provision and expected performance for your user count</li>
         <li>AV provision, and what you must supply</li>
         <li>Dietary handling capability and lead time</li>
         <li>Whether the property will host other groups during your dates</li>
         <li>Assigned coordinator for the booking</li>
         <li>Full itemised cost with inclusions and exclusions clearly separated</li>
         <li>Cancellation and rescheduling terms</li>
       </ul>
       <p>Requesting a direct itemised proposal from the property is the only reliable basis for a budget submission. Costs vary by season, group size, and inclusions, and general market estimates are not a substitute.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why the Environment Matters for Retreat Outcomes</h2>
       <p>Worth stating directly, because it is the actual reason to leave the office.</p>
       <p>When a team is removed from its normal environment, the workplace social hierarchy becomes less operative. The person who dominates a conference room often becomes more collaborative on a forest trail. The person who rarely speaks in meetings often speaks first around a fire.</p>
       <p>A venue where the environment does part of that work, through forest cover, altitude, physical separation from urban patterns, and communal meals without city-schedule interruption, produces different retreat outcomes from a venue that merely provides a scenic backdrop. The <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">Hotelier India feature on EBC Mussoorie</a> covers how the property builds its guest experience around this principle.</p>`,
    ],
  },
  faqs: [
    {
      question: "What group size does EBC Mussoorie accommodate for a business retreat?",
      answer:
        "28 guests without extra beds and up to 50 with extra beds, across 14 accommodation units in seven categories.",
    },
    {
      question: "Can we book the entire property exclusively?",
      answer:
        "Contact EBC Mussoorie directly to discuss full-property availability. With 14 units, a group of 20 to 28 can effectively take the whole estate.",
    },
    {
      question: "What is the cost of a business retreat at EBC Mussoorie?",
      answer:
        "Request an itemised proposal from the property directly. Costs vary by group size, dates, and inclusions, and a direct quote is the only accurate basis for budget planning.",
    },
    {
      question: "What is the WiFi situation?",
      answer:
        "High-speed WiFi is confirmed across all accommodation categories. Confirm expected performance for your specific simultaneous user count during the inquiry.",
    },
    {
      question: "How far is the property from Jolly Grant Airport?",
      answer:
        "Approximately 60 km. Confirm transfer arrangements with the property in advance for group arrivals.",
    },
    {
      question: "When should we avoid booking?",
      answer:
        "Mid-July to mid-August carries road disruption risk. May to June sees heavy Char Dham Yatra traffic on the approach routes. February to April and September to November are the most reliable windows.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function BusinessRetreatVenuePage() {
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
              description="Everything you need to know before booking your business retreat venue in Uttarakhand."
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