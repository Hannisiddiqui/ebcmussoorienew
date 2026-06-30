import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "team-outing-near-dehradun",
  metaData: {
    title: "Team Outing Near Dehradun: 7 Formats That Actually Work for Indian Corporate Groups | EBC Mussoorie",
    description:
      "A practical guide to team outings near Dehradun – 7 formats that actually work, from adventure days to strategy retreats. Match your team's size and objective with the right format.",
  },
  banner: {
    title: "Team Outing Near Dehradun",
    subTitle: "7 Formats That Actually Work for Indian Corporate Groups",
    description:
      "Seven outing formats that deliver real value – from adventure days to strategy retreats. Match your team's size and objective with the right approach.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Team Outing Near Dehradun",
    description: [
      "A team outing near Dehradun has become a standard item on the Indian corporate calendar, particularly for Delhi NCR‑based companies. But the format of these outings varies wildly in quality and outcome. Some produce a genuine change in how a team works together. Others are a day of forced fun that everyone politely endures before returning to the same dynamics on Monday. This guide covers seven outing formats that actually work, how to match them to your team's size and objective, and the practical planning details that make the difference between a successful outing and a logistical scramble.",
      "The numbers are simple: Delhi to Dehradun is approximately 300 km, 4 to 5 hours by road or 35 minutes by direct flight. Mussoorie above Dehradun is 35 km from the city, another 45 to 60 minutes by road. Altitude sits at 1,400 metres in Dehradun and 2,005 metres in Mussoorie. This geography means a team leaving Delhi on a Friday evening can be in the hills by dinner, have two full days of activity, rest, or structured team programming, and be back in Delhi by Sunday evening. The expressway has made this equation significantly better over the last three years. What used to be a 7‑hour ordeal through Meerut and Haridwar is now manageable and even comfortable as a group drive.",
    ],
  },
  details: {
    title: "7 Team Outing Formats That Work Near Dehradun",
    subtitle: "A Planner's Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 1: The Adventure Day Out</h2>
       <p><strong>Best for:</strong> Young teams, sales teams, teams that bond through physical challenge</p>
       <p><strong>What it involves:</strong> A structured day of sequential outdoor activities: a morning trek (3 to 4 hours), afternoon river activities near Rishikesh (which is 45 minutes from Dehradun and offers some of India's best white‑water rafting), and evening campfire at a hill property above Dehradun.</p>
       <p><strong>Key logistics:</strong> Book a property near Mussoorie or in the Dehradun hills that can serve as your base. Coordinate the Rishikesh rafting booking separately (reputable operators include those registered with the Uttarakhand Tourism Development Board). Ensure transport between activity points is planned; the distances are manageable, but timing matters.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 2: The Strategy Retreat</h2>
       <p><strong>Best for:</strong> Leadership teams, cross‑functional project teams, companies in a transition phase</p>
       <p><strong>What it involves:</strong> A facilitated 2‑day working session at a hill property with structured agenda blocks in the morning, outdoor breaks in the afternoon, and informal dinner discussions in the evening. The goal is not to escape work but to do it better by removing the office environment.</p>
       <p><a href="/" class="text-secondary underline">EBC Mussoorie</a>'s property setup specifically supports this format. The combination of covered outdoor meeting space, nature‑trail access for break periods, and group dining creates the conditions for a productive strategy session rather than a standard hotel conference experience.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 3: The Wellness Offsite</h2>
       <p><strong>Best for:</strong> Teams experiencing high stress or burnout, HR initiatives around employee wellbeing, post‑project recovery</p>
       <p><strong>What it involves:</strong> A low‑agenda two‑night stay focused on rest, nature exposure, yoga or guided meditation (can be arranged through local practitioners), forest walks, and unstructured time. The absence of a packed schedule is the point.</p>
       <p><strong>What to avoid:</strong> Do not turn a wellness offsite into a disguised strategy retreat. If leadership uses the wellness framing to add a full day of presentations, the team will notice, and the trust cost outweighs any wellbeing benefit.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 4: The Photography and Creative Challenge</h2>
       <p><strong>Best for:</strong> Design teams, communications teams, cross‑functional teams where individual voice matters</p>
       <p><strong>What it involves:</strong> Each team member gets a creative brief for a 90‑minute photography walk around the property and surrounding landscape. The output is reviewed at a group evening session. The creative brief can be metaphorical (capture "the team's biggest challenge") or literal (document the best of a specific trail). Facilitated discussion around the photographs creates conversations that a standard team session rarely produces. This works particularly well at nature properties near Dehradun, where the landscape provides genuine visual variety.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 5: The Overnight Trek</h2>
       <p><strong>Best for:</strong> Teams of 8 to 20, physically active groups, companies that want a high‑memory experience</p>
       <p><strong>What it involves:</strong> An overnight trek on a defined route in the Mussoorie or Chakrata area. Nag Tibba (3,022 metres) is the most accessible overnight summit trek from Mussoorie, with a well‑maintained trail that most fit individuals can complete with a day of preparation. A local trekking operator handles guide, camping gear, and meals on the trail.</p>
       <p><strong>Critical note:</strong> This format requires advanced fitness communication to the team. Do not organise an overnight trek for a group that has not been told to prepare physically. This creates medical risk and resentment in equal measure.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 6: The Community Contribution Day</h2>
       <p><strong>Best for:</strong> Companies with CSR objectives, teams that want purpose alongside fun, newer teams building shared identity</p>
       <p><strong>What it involves:</strong> A morning session at a local school, community conservation project, or forest department restoration initiative near Dehradun, coordinated through a registered NGO or community organisation. Afternoon return to the property for debrief and social time. This format works because it builds a shared reference point that is not about the company itself. Teams that work together on something that matters externally often develop stronger internal cohesion than those that only do internal team activities.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 7: The Half‑Day Activity Day (For Budget and Time‑Constrained Groups)</h2>
       <p><strong>Best for:</strong> Large teams, companies with budget constraints, quarterly or monthly cadence outings</p>
       <p><strong>What it involves:</strong> A day trip from Dehradun or Delhi to a hill property near Mussoorie. Morning activity (nature walk, outdoor challenge, team game), group lunch on the property, and afternoon departure. No overnight stay required. This format delivers a reset without a two‑night budget. The limitation is depth: a day outing does not produce the same quality of relationship‑building as an overnight. But it is significantly better than a restaurant dinner as a team outing format.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Planning Logistics: What to Sort First</h2>
       <p>In order of priority:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Date and group size confirmed before approaching properties. A tentative inquiry without these numbers cannot be quoted accurately.</li>
         <li>Property selected and booked with a confirmed deposit at least 4 weeks before for weekend dates.</li>
         <li>Transport arranged for the full group, including the Dehradun airport pickup if team members are flying.</li>
         <li>Activity operators confirmed separately if activities are not handled by the property.</li>
         <li>Dietary and medical requirements communicated to the property kitchen at least one week in advance.</li>
         <li>The day‑of coordinator is assigned from the planning team on‑site to handle real‑time logistics.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "What is the minimum group size for a team outing near Dehradun?",
      answer:
        "Most properties handle groups of 8 or more for a meaningful team outing. Smaller groups of 4 to 7 can use standard room bookings rather than corporate packages.",
    },
    {
      question: "Is a Dehradun team outing feasible as a day trip from Delhi?",
      answer:
        "A day trip is feasible but tiring. You lose roughly 10 hours to travel for a 4 to 5‑hour activity window. An overnight stay is strongly recommended.",
    },
    {
      question: "How do we handle a team with mixed fitness levels on an outdoor outing?",
      answer:
        "Choose activity formats with multiple difficulty options, or run two parallel streams. Trail walks with a defined easy route and an extended route accommodate most fitness ranges without exclusion.",
    },
    {
      question: "Are there team outing venues near Dehradun that handle their own facilitation?",
      answer:
        "Some do. <a href='/adventure-mussoorie' class='text-secondary underline'>EBC Mussoorie</a> integrates outdoor experiences within the stay framework. For structured facilitation (psychometric debrief, leadership tools), bring an external facilitator.",
    },
    {
      question: "What is a reasonable per‑person budget for a 2‑night team outing near Dehradun?",
      answer:
        "Rs 6,000 to 15,000 per person, all‑inclusive (accommodation, meals, activities, group transport from Delhi) covers most quality properties in the Mussoorie hills.",
    },
    {
      question: "When should we avoid planning a team outing near Dehradun?",
      answer:
        "Heavy monsoon months (mid‑July to mid‑August) carry road disruption risk. The Char Dham Yatra peak period (May to June) increases highway traffic significantly. Plan around these windows where possible.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function TeamOutingPage() {
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
              description="Everything you need to know before planning your team outing near Dehradun."
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