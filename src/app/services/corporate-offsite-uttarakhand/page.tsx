import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: corporate-offsite-uttarakhand
  slug: "corporate-offsite-uttarakhand",
  metaData: {
    title: "Corporate Offsite in Uttarakhand: A State-Wide Guide to Choosing the Right Venue | EBC Mussoorie",
    description:
      "A complete guide to planning a corporate offsite in Uttarakhand – mapping the state by objective, choosing the right zone, and what to confirm before committing.",
  },
  banner: {
    title: "Corporate Offsite in Uttarakhand",
    subTitle: "A State-Wide Guide to Choosing the Right Venue",
    description:
      "Uttarakhand has become a default consideration for Delhi NCR companies planning offsites. But 'Uttarakhand' is not a venue decision. The state contains four distinct offsite environments—choose the wrong one and your trip costs the same but achieves less.",
    image: "/banner/bnr2.png", // Replace with a corporate offsite banner if available
  },
  intro: {
    title: "Corporate Offsite in Uttarakhand",
    description: [
      "Uttarakhand has become a default consideration for Delhi NCR companies planning offsites, and for good reason: expressway access, direct flights to Dehradun, altitude, and a growing set of properties built for group hosting. But 'Uttarakhand' is not a venue decision. The state contains four distinct offsite environments with genuinely different characteristics, and choosing the wrong one for your objective produces a trip that costs the same and achieves less.",
      "This guide maps the state by offsite objective rather than by geography.",
    ],
  },
  details: {
    title: "The Corporate Offsite Guide",
    subtitle: "Choose the Right Venue",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Step One: Define the Objective, Then Choose the Zone</h2>
       <p>Before comparing properties, answer this: what is the offsite actually for?</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Strategy and leadership alignment</strong> – you need quiet, small scale, and an environment that supports long conversation. <strong>Garhwal ridge.</strong></li>
         <li><strong>Team bonding and energy</strong> – you need activity infrastructure and shared physical challenge. <strong>Rishikesh.</strong></li>
         <li><strong>Reward and recognition</strong> – you need distinctiveness and memorability. <strong>Garhwal ridge or Corbett.</strong></li>
         <li><strong>Large-format conference</strong> – you need banquet and AV infrastructure at scale. <strong>Dehradun city hotels.</strong></li>
         <li><strong>Deep work with a small senior team</strong> – you need genuine isolation. <strong>Lansdowne or the western Mussoorie ridge.</strong></li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 1: The Garhwal Ridge (Mussoorie and George Everest Area)</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 290 km from Delhi, 6 to 7 hours. Jolly Grant Airport 60 km from the ridge.</li>
         <li><strong>Altitude:</strong> approximately 2,000 to 2,100 metres</li>
         <li><strong>Group size suited:</strong> 10 to 30</li>
         <li><strong>Best for:</strong> Leadership retreats, strategy offsites, incentive travel, team cohesion programmes</li>
       </ul>
       <p>This is the strongest zone in Uttarakhand for offsites where the quality of conversation matters more than the scale of the event.</p>
       <p>EBC Mussoorie sits here, on a 20-acre private forest estate beside George Everest House at approximately 6,800 feet. Relevant specifications for corporate planners:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>14 luxury accommodation units across seven categories</li>
         <li>Capacity: 28 guests without extra beds, up to 50 with extra beds</li>
         <li>High-speed WiFi confirmed across all accommodation categories</li>
         <li>Park Cafe: multi-cuisine restaurant, indoor and alfresco seating for group dining</li>
         <li>Private bonfire setups on the estate</li>
         <li>Outdoor BBQ and picnic arrangements</li>
         <li>Direct road access with private parking</li>
         <li>Location away from Mall Road traffic and crowds</li>
       </ul>
       <p>The unit count means a group of 20 to 28 can effectively take the whole property, which is the single most valuable characteristic for an offsite where you want the environment to belong to your team rather than being shared with leisure guests.</p>
       <p>Review the <a href="/rooms" class="text-secondary underline">accommodation and group setup at EBC Mussoorie</a> before contacting the property for a group proposal.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 2: Rishikesh</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 240 km from Delhi</li>
         <li><strong>Altitude:</strong> 356 metres</li>
         <li><strong>Group size suited:</strong> 20 to 60</li>
         <li><strong>Best for:</strong> Adventure-format team bonding, younger team demographics</li>
       </ul>
       <p>Rishikesh has the densest activity infrastructure in Uttarakhand: rafting, outdoor challenge courses, and structured adventure programming through registered operators. The tradeoff is altitude (none) and commercialisation (significant in peak season). Best October to June. Rafting operations are restricted during high monsoon flow.</p>

       <h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 3: Jim Corbett and the Kumaon Foothills</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 260 to 300 km from Delhi</li>
         <li><strong>Group size suited:</strong> 15 to 40</li>
         <li><strong>Best for:</strong> Incentive travel, reward trips for high performers</li>
       </ul>
       <p>Safari-based incentive programmes work well here. Less suited to structured working sessions. Dhikala zone permits require booking, and the zone closes during monsoon.</p>

       <h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 4: Lansdowne and Pauri Garhwal</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 250 km from Delhi</li>
         <li><strong>Altitude:</strong> 1,706 metres</li>
         <li><strong>Group size suited:</strong> 8 to 20</li>
         <li><strong>Best for:</strong> Small senior teams needing genuine isolation</li>
       </ul>
       <p>The quietest zone in the state. Very limited accommodation variety. Suited to small leadership groups where the absence of stimulation is the point.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone Comparison for Planners</h2>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Objective</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Zone</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Typical group size</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Leadership strategy retreat</td>
               <td class="border border-secondary/20 px-4 py-2">Garhwal ridge</td>
               <td class="border border-secondary/20 px-4 py-2">10 to 28</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Team bonding and adventure</td>
               <td class="border border-secondary/20 px-4 py-2">Rishikesh</td>
               <td class="border border-secondary/20 px-4 py-2">20 to 60</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Incentive and reward travel</td>
               <td class="border border-secondary/20 px-4 py-2">Garhwal ridge or Corbett</td>
               <td class="border border-secondary/20 px-4 py-2">15 to 40</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Deep work, senior team</td>
               <td class="border border-secondary/20 px-4 py-2">Lansdowne or western Mussoorie ridge</td>
               <td class="border border-secondary/20 px-4 py-2">8 to 20</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Large conference</td>
               <td class="border border-secondary/20 px-4 py-2">Dehradun city</td>
               <td class="border border-secondary/20 px-4 py-2">100+</td>
             </tr>
           </tbody>
         </table>
       </div>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Confirm With Any Uttarakhand Property Before Committing</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Simultaneous accommodation and dining capacity for your exact headcount</li>
         <li>Covered meeting space availability and seated capacity in your required format</li>
         <li>WiFi performance with your expected number of simultaneous users</li>
         <li>AV provision and whether external equipment is needed</li>
         <li>Dietary handling capability and required lead time</li>
         <li>Cancellation terms for weather-related disruption</li>
         <li>Whether a coordinator is assigned to the group booking</li>
       </ul>
       <p>For pricing, request an itemised quote from the property directly. Costs vary meaningfully by season, group size, and inclusions, and a direct quote is the only reliable basis for a budget submission.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Seasonal Guidance</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>February to April</strong> – optimal. Stable weather, wide outdoor options, shoulder-season value.</li>
         <li><strong>May to June</strong> – good conditions but peak tourist traffic on roads, and Char Dham Yatra traffic increases congestion on the Haridwar and Dehradun stretches.</li>
         <li><strong>September to November</strong> – the strongest overall window. Clearest conditions of the year, moderate crowds, reliable roads.</li>
         <li><strong>July to August</strong> – possible with careful planning. Covered meeting space and indoor alternatives are essential. Confirm road access and property operational status before finalising dates.</li>
         <li><strong>December to February</strong> – cold and quiet. Suitable for indoor-heavy agendas with bonfire evenings. Confirm heating arrangements.</li>
       </ul>
       <p>As described in <a href="https://www.hotelierindia.com/story/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Hotelier India feature on EBC Mussoorie</a>, the property is designed around outdoor experience as the foundation of the stay, which translates directly into a different quality of group dynamic than a conference hotel produces.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which Uttarakhand zone is best for a first corporate offsite?",
      answer:
        "The Garhwal ridge around Mussoorie, for accessibility, accommodation quality, and the widest range of group formats.",
    },
    {
      question: "What group size does EBC Mussoorie handle?",
      answer:
        "28 guests without extra beds and up to 50 with extra beds, across 14 accommodation units.",
    },
    {
      question: "Does EBC Mussoorie have WiFi suitable for corporate use?",
      answer:
        "High-speed WiFi is confirmed across all accommodation categories. Confirm performance expectations for your specific group size during the inquiry.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "Six to eight weeks minimum for a full-property corporate booking in peak season.",
    },
    {
      question: "Can we do an Uttarakhand offsite in monsoon?",
      answer:
        "Possible with covered meeting space and indoor alternatives. Confirm operational status and road access with the property before booking July or August.",
    },
    {
      question: "Should we combine two zones in one offsite?",
      answer:
        "Generally no. Splitting a short offsite across two environments reduces depth in both. Choose one zone and stay.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function CorporateOffsiteUttarakhandPage() {
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
              description="Everything you need to know before planning your corporate offsite in Uttarakhand."
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