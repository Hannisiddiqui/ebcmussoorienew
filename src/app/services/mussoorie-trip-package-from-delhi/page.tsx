import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "mussoorie-trip-package-from-delhi",
  metaData: {
    title: "Planning a Mussoorie Trip Package from Delhi: The Complete Breakdown | EBC Mussoorie",
    description:
      "A practical breakdown of Mussoorie trip packages from Delhi – what they cover, how to evaluate them, and a two‑night itinerary that works for couples, families, and groups.",
  },
  banner: {
    title: "Planning a Mussoorie Trip Package from Delhi",
    subTitle: "The Complete Breakdown",
    description:
      "A practical guide to planning and evaluating a Mussoorie trip package from Delhi – what to look for, what to avoid, and how to build your own itinerary.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Planning a Mussoorie Trip Package from Delhi",
    description: [
      "A Mussoorie trip package from Delhi sounds straightforward until you start comparing options. Some packages include only the hotel and breakfast. Others bundle transport, activities, and meals into a single price. A few advertise things that turn out to be seasonal, unavailable at the time of booking, or subject to conditions buried in the fine print. This guide is a practical breakdown of how to plan and evaluate a Mussoorie trip package from Delhi, what a well-structured package should include, and how to build your own itinerary if you prefer to travel independently.",
    ],
  },
  details: {
    title: "What Does a Mussoorie Trip Package from Delhi Actually Cover?",
    subtitle: "A Practical Breakdown",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Mussoorie Trip Package from Delhi Actually Cover?</h2>
       <p>Most packages fall into one of three structures:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Transport‑inclusive packages:</strong> These cover round‑trip travel from Delhi, usually by private cab or shared vehicle, along with accommodation. Meals may or may not be included. Good for travellers who do not want to arrange a vehicle separately.</li>
         <li><strong>Activity‑bundled packages:</strong> These include accommodation, select activities (Kempty Falls visit, local sightseeing, a bonfire evening), and some or all meals. Better suited for first‑time visitors who want a structured experience.</li>
         <li><strong>Glamping packages:</strong> These are property‑specific packages offered by resorts like <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a>, which include tent accommodation, meals, outdoor activities like trekking near George Everest Peak, and a bonfire setup. These are the most experience‑dense of the three formats and have grown steadily in popularity among Delhi NCR travellers.</li>
       </ul>
       <p>You can review what a current glamping package includes at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's accommodation page</a> before comparing with operator‑led alternatives.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">A Two‑Night Itinerary Framework for a Mussoorie Package from Delhi</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 1: Departure and Arrival</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Depart Delhi by 5:00 to 6:00 AM to avoid NH‑58 morning congestion</li>
         <li>Route: Delhi to Dehradun via Haridwar (approximately 5.5 to 6 hours)</li>
         <li>Dehradun to Mussoorie: approximately 35 kilometres, 1 to 1.5 hours</li>
         <li>Check in by early afternoon</li>
         <li>Afternoon: rest or short orientation walk near the property</li>
         <li>Evening: bonfire setup, dinner</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 2: Core Experience Day</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Morning: trek toward George Everest Peak (2 to 3 hours return at a relaxed pace)</li>
         <li>Late breakfast or lunch at the property</li>
         <li>Afternoon: explore Lal Tibba or Camel's Back Road, depending on energy level</li>
         <li>Evening: optional Landour Bazaar visit or second bonfire night</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 3: Return to Delhi</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Early morning walk along the ridge</li>
         <li>Check out by 10:00 to 11:00 AM</li>
         <li>Drive from Mussoorie to Delhi via Dehradun</li>
         <li>Arrival in Delhi by early evening under normal traffic conditions</li>
       </ul>
       <p>This itinerary works equally well for couples, families, and small groups. Adjust Day 2 based on your group's pace and interests.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Check Before Confirming a Package</h2>
       <p>Regardless of the format, run through this list before paying:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Accommodation:</strong> What is the exact tent or room type? Is the washroom attached or shared? Are blankets and heating provided for cold months?</li>
         <li><strong>Meals:</strong> Which meals are included? Is there flexibility for dietary restrictions? Are meals served at fixed times or on request?</li>
         <li><strong>Activities:</strong> Which activities are included in the package price? Which are priced separately? Are they seasonal or weather‑dependent?</li>
         <li><strong>Transport:</strong> Is pickup from Delhi included? What is the vehicle type? Is the driver available throughout the trip or only for transfers?</li>
         <li><strong>Cancellation:</strong> What is the policy if weather makes travel inadvisable? Is there a refund or rescheduling option?</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Independent vs. Package Travel to Mussoorie from Delhi</h2>
       <p><strong>Choose a package if:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li>You are travelling for the first time</li>
         <li>You want logistics handled end‑to‑end</li>
         <li>You are part of a group with varied preferences</li>
         <li>You want a structured activity itinerary</li>
       </ul>
       <p><strong>Travel independently if:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li>You have your own vehicle and prefer flexibility</li>
         <li>You want to combine Mussoorie with Dhanaulti or another stop</li>
         <li>You are experienced with mountain travel and prefer to organise each element separately</li>
       </ul>
       <p>For most Delhi NCR first‑timers, a well‑structured glamping package from a property like <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a> reduces friction significantly. As covered in <a href="/glamping-george-everest" class="text-secondary underline">this travel piece</a>, getting from Delhi to an Everest Base Camp in Mussoorie is more straightforward than most people expect.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Key Distances and Travel Times From Delhi to Mussoorie</h2>
       <table class="w-full border-collapse my-4 text-sm md:text-base">
         <thead>
           <tr class="border-b border-secondary/30">
             <th class="text-left py-2 font-semibold text-secondary">Departure Point</th>
             <th class="text-left py-2 font-semibold text-secondary">Distance</th>
             <th class="text-left py-2 font-semibold text-secondary">Estimated Drive Time</th>
           </tr>
         </thead>
         <tbody>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Central Delhi</td>
             <td class="py-2 pr-4">310 km</td>
             <td class="py-2 pr-4">6 to 7 hours</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Gurugram</td>
             <td class="py-2 pr-4">295 km</td>
             <td class="py-2 pr-4">6 to 6.5 hours</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Noida</td>
             <td class="py-2 pr-4">320 km</td>
             <td class="py-2 pr-4">6.5 to 7 hours</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Chandigarh</td>
             <td class="py-2 pr-4">170 km</td>
             <td class="py-2 pr-4">4 to 5 hours</td>
           </tr>
           <tr>
             <td class="py-2 pr-4">Dehradun</td>
             <td class="py-2 pr-4">35 km</td>
             <td class="py-2 pr-4">1 to 1.5 hours</td>
           </tr>
         </tbody>
       </table>`,
    ],
  },
  faqs: [
    {
      question: "How do I book a Mussoorie trip package from Delhi?",
      answer:
        "Book directly with the resort for property‑specific packages or through a registered travel operator for transport‑inclusive packages. Always confirm inclusions in writing.",
    },
    {
      question: "What is the best time to book a Mussoorie package from Delhi?",
      answer:
        "For peak season visits, book four to six weeks in advance. Long weekends and national holidays fill up fastest.",
    },
    {
      question: "Are Mussoorie trip packages available for groups?",
      answer:
        "Yes. Most properties and operators accommodate groups and can customise packages for larger bookings.",
    },
    {
      question: "How much does a basic Mussoorie trip package from Delhi cost?",
      answer:
        "Pricing varies significantly by format and season. Contact properties directly for current rates and inclusions.",
    },
    {
      question: "Is a two‑night package sufficient for Mussoorie?",
      answer:
        "Yes. Two nights covers the main experiences comfortably for most traveller types.",
    },
    {
      question: "Can I customise a Mussoorie trip package?",
      answer:
        "Many properties offer customisation on meals, activities, and transport. Ask the property directly about what can be adjusted.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function MussoorieTripPackagePage() {
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
              description="Everything you need to know before booking your Mussoorie trip package from Delhi."
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