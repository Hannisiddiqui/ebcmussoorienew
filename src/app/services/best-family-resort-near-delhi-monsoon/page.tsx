import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: best-family-resort-near-delhi-monsoon
  slug: "best-family-resort-near-delhi-monsoon",
  metaData: {
    title: "Best Family Resort Near Delhi in Monsoon: How to Choose When the Weather Is a Variable | EBC Mussoorie",
    description:
      "A complete guide to choosing the best family resort near Delhi for monsoon – five criteria that decide whether your trip works, and why Mussoorie is the strongest option.",
  },
  banner: {
    title: "Best Family Resort Near Delhi in Monsoon",
    subTitle: "How to Choose When the Weather Is a Variable",
    description:
      "Searching for a family resort near Delhi for a monsoon trip produces a lot of results and very little useful guidance. Every property claims to be family‑friendly. Almost none of them explain what happens when it rains for six hours.",
    image: "/banner/bnr2.png", // Replace with a family/monsoon banner if available
  },
  intro: {
    title: "Best Family Resort Near Delhi in Monsoon",
    description: [
      "Searching for a family resort near Delhi for a monsoon trip produces a lot of results and very little useful guidance. Every property claims to be family-friendly. Almost none of them explain what happens when it rains for six hours and you have two children and a set of expectations to manage.",
      "This guide approaches the question differently. Rather than listing properties, it establishes the criteria that actually determine whether a monsoon family trip works, and then applies those criteria to the Mussoorie hills as the strongest option within the weekend range of Delhi.",
    ],
  },
  details: {
    title: "The Family Monsoon Resort Guide",
    subtitle: "Choose Wisely",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Five Criteria That Decide a Monsoon Family Trip</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Criterion 1: Accommodation footprint per family</h3>
       <p>The single strongest predictor of a good monsoon family stay. A family confined to one room during a wet afternoon has a different trip from a family with two bedrooms and a living area.</p>
       <p><strong>Look specifically for:</strong> interconnecting rooms, suites with flexible bedding, or multi-bedroom villa formats.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Criterion 2: Usable grounds within the property</h3>
       <p>Children need to be outdoors. In monsoon, outdoor time comes in unpredictable windows. A property with substantial private grounds lets the family use a 40-minute clear spell without planning an excursion.</p>
       <p><strong>Look specifically for:</strong> private estate acreage, walkable grounds, and forest or garden access from the accommodation.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Criterion 3: On-site dining</h3>
       <p>Driving a wet mountain road for dinner with children is the kind of friction that ruins evenings. A proper on-site restaurant removes it entirely.</p>
       <p><strong>Look specifically for:</strong> a full restaurant rather than limited room service, and both indoor and outdoor seating so you can use whichever the weather allows.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Criterion 4: Structured evening</h3>
       <p>Monsoon evenings are long. A property that offers a genuine evening activity gives the day a shape.</p>
       <p><strong>Look specifically for:</strong> bonfire arrangements and outdoor dining or BBQ setups.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Criterion 5: Access reliability and cancellation flexibility</h3>
       <p>Hill roads in monsoon can be affected for a day or more after heavy rainfall. A property that offers rescheduling flexibility is managing a real risk on your behalf.</p>
       <p><strong>Look specifically for:</strong> direct road access, private parking, and written cancellation terms.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Applying the Criteria: The Mussoorie Hills</h2>
       <p>Mussoorie sits approximately 290 km from Delhi, 6 to 7 hours by road via Dehradun. It is the most accessible true Himalayan hill station from Delhi NCR, and the accommodation range now extends well beyond the town-centre hotels.</p>
       <p>EBC Mussoorie, a luxury glamping resort on a 20-acre private forest estate beside George Everest House at approximately 6,800 feet, meets all five criteria:</p>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Criterion</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">What the property offers</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Accommodation footprint</td>
               <td class="border border-secondary/20 px-4 py-2">Twin Luxury Cottages (2 interconnecting cottages, 4 rooms), Surveyor Suite (up to 4 guests), Andrew's Villas (2 duplex villas, two bedrooms each)</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Usable grounds</td>
               <td class="border border-secondary/20 px-4 py-2">20-acre private forest estate with walkable grounds</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">On-site dining</td>
               <td class="border border-secondary/20 px-4 py-2">Park Cafe, multi-cuisine, indoor and alfresco seating</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Structured evening</td>
               <td class="border border-secondary/20 px-4 py-2">Private bonfire setups, outdoor BBQ and picnic arrangements</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Access</td>
               <td class="border border-secondary/20 px-4 py-2">Direct road access with private parking</td>
             </tr>
           </tbody>
         </table>
       </div>
       <p class="mt-4">Total capacity is 28 guests without extra beds and up to 50 with extra beds across 14 units, which keeps the property intimate rather than crowded even at full occupancy.</p>
       <p>Compare the categories on the <a href="/rooms" class="text-secondary underline">EBC Mussoorie accommodation page</a> before enquiring.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Families Should Not Expect</h2>
       <p>Being clear about this prevents disappointment:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Extended external sightseeing during active rain is not realistic. Plan one morning outing per day at most.</li>
         <li>Panoramic Himalayan views are not reliable in July and August.</li>
         <li>Long drives to Dhanaulti, Chakrata, or Rishikesh with children in monsoon are not sensible.</li>
         <li>Any monsoon booking requires direct confirmation of operational status and access conditions with the property.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Monsoon Family Day That Works</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>6:30 AM</strong> – Everyone up. Estate walk in the forest mist. This is the day's outdoor time, and it is genuinely worth the early alarm.</li>
         <li><strong>8:00 AM</strong> – Breakfast at the Park Cafe.</li>
         <li><strong>9:00 to 11:00 AM</strong> – Second outdoor block if conditions hold. The George Everest heritage site adjacent to the estate gives the walk a destination.</li>
         <li><strong>11:00 AM to 5:00 PM</strong> – Property time. This is where accommodation space earns its keep.</li>
         <li><strong>5:00 to 7:00 PM</strong> – Grounds again if the rain has eased.</li>
         <li><strong>7:30 PM onward</strong> – Dinner, bonfire if conditions allow.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Alternatives Within Range of Delhi</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Lansdowne (250 km)</strong> – Quietest option, limited accommodation variety, good for families wanting minimal stimulation.</li>
         <li><strong>Nainital (320 km)</strong> – Lake activities engage children well, but the town is busy, and monsoon lake weather is variable.</li>
         <li><strong>Rishikesh (240 km)</strong> – Lower altitude means warmer, and river activities are restricted during high monsoon flow. Better for families with teenagers than young children.</li>
         <li><strong>Mussoorie (290 km)</strong> – The best balance of accessibility, accommodation quality, and property-level self-sufficiency for a monsoon family stay.</li>
       </ul>
       <p>For a traveller-level view of the EBC Mussoorie estate and its surroundings, <a href="https://www.tripoto.com/trip/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">this Tripoto account</a> gives useful ground detail.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which family accommodation at EBC Mussoorie suits four people?",
      answer:
        "The Surveyor Suite accommodates up to four guests with a king bed and a foldable queen on request. Twin Luxury Cottages offer interconnecting space for larger families.",
    },
    {
      question: "Is there anything for children to do on the property?",
      answer:
        "The 20-acre forest estate, morning nature walks, the adjacent George Everest heritage site, and evening bonfire and outdoor BBQ arrangements. Confirm current activity availability with the property.",
    },
    {
      question: "How far is it from Delhi?",
      answer:
        "Approximately 290 km, 6 to 7 hours in dry conditions, longer in monsoon.",
    },
    {
      question: "Should we book flexible cancellation for a monsoon family trip?",
      answer:
        "Yes. Hill road access can be disrupted after heavy rainfall. Flexible terms are worth any small premium.",
    },
    {
      question: "Is the property pet-friendly for families travelling with a dog?",
      answer:
        "Yes, confirmed pet-friendly. Confirm conditions when booking.",
    },
    {
      question: "What is the total guest capacity?",
      answer:
        "28 guests without extra beds and up to 50 with extra beds, across 14 accommodation units.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function BestFamilyResortNearDelhiMonsoonPage() {
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
              description="Everything you need to know before booking the best family resort near Delhi for monsoon."
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