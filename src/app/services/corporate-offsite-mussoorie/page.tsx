import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "corporate-offsite-mussoorie",
  metaData: {
    title: "Corporate Offsite in Mussoorie: A Practical Planner's Guide to Getting It Right | EBC Mussoorie",
    description:
      "A practical planner's guide to corporate offsites in Mussoorie – property selection, agenda building, costs, and common mistakes to avoid. Written for the person doing the planning.",
  },
  banner: {
    title: "Corporate Offsite in Mussoorie",
    subTitle: "A Practical Planner's Guide to Getting It Right",
    description:
      "Group logistics, budget approvals, WiFi expectations, and team dynamics – a guide written for the person actually doing the planning.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Corporate Offsite in Mussoorie",
    description: [
      "Planning a corporate offsite is one of the more thankless jobs in a company. You are managing group logistics, dietary restrictions, budget approvals, WiFi expectations, team personality dynamics, and leadership preferences simultaneously, often while doing your actual job at the same time. This guide is written for the person actually doing that planning. It covers the Mussoorie area specifically, what makes it work as a corporate offsite destination, what to ask properties before committing, and how to build a two-night itinerary that achieves something rather than just filling time.",
      "Let us start with the practical case, not the scenic one. Mussoorie is approximately 290 km from Delhi, connected by a well-maintained expressway route through Dehradun. Jolly Grant Airport in Dehradun handles direct flights from Delhi (35 minutes), Mumbai, and Bangalore, which matters for teams with members in multiple cities. Once in the hills, Mussoorie offers something most Indian corporate offsite destinations do not: genuine physical separation from urban daily patterns combined with enough infrastructure to run a functional working event. You can have a proper meeting room, reliable food service, stable accommodation, and a 2-hour forest trek all within the same property if you choose correctly. That combination is rarer than the number of 'corporate retreat' labels on resort websites would suggest.",
    ],
  },
  details: {
    title: "Choosing the Right Property for a Mussoorie Corporate Offsite",
    subtitle: "A Planner's Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Central Question: Conference Hotel or Experience Property?</h2>
       <p>There are two distinct property types available for corporate offsites in Mussoorie:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Conference-style properties</strong> within or near the town offer hotel‑standard meeting rooms, banquet facilities, and predictable service. They work well for large groups (50 plus) where meeting logistics dominate the agenda.</li>
         <li><strong>Experience-style properties</strong> outside the main town, typically boutique nature resorts or glamping properties, offer a different setting: smaller group capacity, outdoor meeting spaces, integrated activity programmes, and a more intentional environment. They work best for leadership retreats, strategy offsites, and team cohesion programmes where the quality of conversation matters more than the scale of the event.</li>
       </ul>
       <p><a href="/" class="text-secondary underline">EBC Mussoorie</a> sits in the second category. The property's outdoor format, location above the Mussoorie valley, and integration of activity and accommodation make it suited to groups of 10 to 35, where the goal is genuine engagement rather than a formatted conference. View their <a href="/rooms" class="text-secondary underline">accommodation and retreat setup</a> to understand what the physical space looks like before contacting them for a group proposal.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Building Your Mussoorie Corporate Offsite Agenda</h2>
       <p>A two‑night offsite in Mussoorie works best when it is structured around three distinct purposes, one per half‑day block:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Block 1 (Day 1, afternoon/evening): Arrival and social reset.</strong> No formal sessions. Walk the property, an optional short nature trail, and a group dinner. The point is to get team members out of travel mode and into offsite mode before any work starts.</li>
         <li><strong>Block 2 (Day 2, morning): Core strategic or team session.</strong> Your most important structured content. Use the morning, when energy and focus are strongest. Outdoor meeting formats work well in Mussoorie during the pre‑monsoon and post‑monsoon.</li>
         <li><strong>Block 3 (Day 2, afternoon): Team activity.</strong> Physical or experiential. Trek, birdwatching challenge, photography walk, and outdoor problem‑solving exercise. Choose based on your team's average fitness and the goal: bonding versus individual challenge versus collective output.</li>
         <li><strong>Block 4 (Day 2, evening): Informal review and social.</strong> Campfire dinner, team reflections, low‑structure time. This is often where the most valuable off‑site conversations actually happen.</li>
         <li><strong>Block 5 (Day 3, morning): Synthesis and commitment.</strong> What are we taking back? Two to three hours maximum. Document actions, owners, and timelines. Depart by noon.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Ask a Mussoorie Property Before Signing a Group Booking</h2>
       <p>Questions that will save you problems later:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>What is the maximum group capacity for both accommodation and dining simultaneously?</li>
         <li>Is there a dedicated covered meeting space, or is the outdoor space the only option?</li>
         <li>What is the WiFi bandwidth, and how does it perform with 15 to 25 simultaneous users?</li>
         <li>Which team activities are included in the corporate package versus charged separately?</li>
         <li>What is the cancellation policy for weather‑related disruptions?</li>
         <li>Can the property handle AV requirements (projector, screen, microphone for 20 people)?</li>
         <li>What dietary requirements can the kitchen accommodate?</li>
         <li>Is there a coordinator assigned to the corporate booking for logistics management?</li>
       </ul>
       <p>Getting written confirmation on each of these before signing a group deposit prevents 80 per cent of the problems that corporate offsite planners encounter on site.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Common Mistakes in Corporate Offsite Planning at Hill Destinations</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Overloading the agenda:</strong> The hill environment is itself an input. Leaving unstructured time is not wasted time; it is the space where informal leadership conversations and team relationship‑building actually happen. Treat white space as a feature, not a scheduling failure.</li>
         <li><strong>Choosing scenic over functional:</strong> A property with extraordinary views but unreliable WiFi, a meeting room that seats 12 when your team is 20, or a kitchen that cannot handle the group's dietary spread will create frustration that overwhelms the scenic benefit.</li>
         <li><strong>Skipping the recce:</strong> If your company does regular offsites, a physical recce of shortlisted properties before committing is worth the day trip. Photographs and marketing descriptions do not capture acoustics, actual meeting room size, or the real distance between accommodation units.</li>
         <li><strong>Booking too close to the date:</strong> Good properties in Mussoorie fill up on weekends 3 to 4 weeks in advance during peak season. Corporate bookings that require a full property buyout need a 6 to 8 week lead time at minimum.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What the Mussoorie Setting Actually Does to Group Dynamics</h2>
       <p>This is worth naming directly because it is the actual reason to go to Mussoorie rather than a hotel in Gurgaon.</p>
       <p>When people are physically removed from their normal environments, their social roles within a group become more fluid. The colleague who is quiet in the conference room will often speak first on a trail. The senior leader who dominates in a formal session often becomes more collaborative when the structure is removed.</p>
       <p>These shifts are not guaranteed, but the conditions at an outdoor hill property create more opportunities for them than a city hotel does. The combination of altitude, natural surroundings, physical activity, and communal meals without city‑schedule interruption changes the baseline social temperature of a group.</p>
       <p>This is why the most effective corporate offsites tend to happen at properties where the environment is doing part of the work, not just providing a backdrop. As described in this <a href="#" class="text-secondary underline">Hotelier India piece on EBC Mussoorie</a>, the property is built around this exact principle: tranquil outdoor experience as the foundation for a different kind of hospitality, which translates directly into a different quality of corporate retreat experience.</p>
       <p>For a traveller's perspective on the location and atmosphere, this <a href="/adventure-mussoorie" class="text-secondary underline">Tripoto trip account</a> gives a useful sense of what the property and its surroundings feel like from the ground.</p>`,
    ],
  },
  faqs: [
    {
      question: "How many people does a typical corporate offsite property in Mussoorie accommodate?",
      answer:
        "Boutique and nature‑stay properties typically handle 10 to 40 people. For groups above 50, larger venue properties or full hotel buyouts are more appropriate.",
    },
    {
      question: "What is the average cost of a corporate offsite near Mussoorie?",
      answer:
        "For a 2‑night, 20‑person group at a quality experience property, budget Rs 4 to 9 lakh total, including accommodation, meals, activities, and group transport from Delhi.",
    },
    {
      question: "Can we customise the team activity programme at Mussoorie properties?",
      answer:
        "Most properties offer a set menu of activities. Some, particularly outdoor or glamping properties, will work with a facilitator you bring in. Confirm this flexibility before booking.",
    },
    {
      question: "Is Mussoorie suitable for a product launch or press event?",
      answer:
        "The scenic setting works well for media and influencer events. Logistics require careful planning, particularly for AV and connectivity. Not all properties are equipped for this use case.",
    },
    {
      question: "What is the best group size for a Mussoorie corporate offsite?",
      answer:
        "10 to 25 people is the sweet spot for most experienced properties. Large enough for meaningful group dynamics, small enough to maintain quality of facilitation and individual attention.",
    },
    {
      question: "Do Mussoorie properties provide group transport from Delhi?",
      answer:
        "Most properties do not operate group transport directly but can coordinate with local operators. Confirm this during the inquiry stage.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function CorporateOffsitePage() {
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
              description="Everything you need to know before planning your corporate offsite in Mussoorie."
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