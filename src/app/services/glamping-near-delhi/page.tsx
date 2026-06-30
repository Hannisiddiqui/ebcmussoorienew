import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "mountain-weekend-getaway-delhi",
  metaData: {
    title: "The Mountain Weekend Getaway from Delhi That Actually Delivers | EBC Mussoorie",
    description:
      "A practical guide to planning a mountain weekend from Delhi that delivers. Destinations, accommodation, itinerary, and season tips for a two-night escape.",
  },
  banner: {
    title: "The Mountain Weekend Getaway from Delhi That Actually Delivers",
    subTitle: "Weekend Escape Guide",
    description:
      "A practical guide for travellers who want a mountain weekend that actually justifies the Friday night packing and the Sunday evening drive back.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Planning a Mountain Weekend from Delhi",
    description: [
      "The idea of a mountain weekend getaway from Delhi is appealing enough that most people from the NCR plan one at some point and either never follow through or come back underwhelmed. The underwhelm usually traces to one of two problems: choosing the wrong destination for the season, or choosing accommodation that places you adjacent to the mountains rather than inside them. This piece is built for travellers who want a mountain weekend that actually justifies the Friday night packing and the Sunday evening drive back. It covers which destinations deliver on the mountain promise, what makes a two-night format work rather than feel rushed, and why the right accommodation choice matters more than the destination itself.",
    ],
  },
  details: {
    title: "What Makes a Mountain Weekend Work",
    subtitle: "Practical Guide",
    description: [
      `<h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why Most Delhi Weekend Trips to the Mountains Fall Short</h3>
       <p>Before covering what works, it helps to understand the most common failure modes.</p>
       <p><strong>Staying in a town-centre hotel</strong> – Mussoorie town, Shimla town, and Nainital town are all hill stations. But the experience of staying in a hotel on or near Mall Road in any of these places is essentially a modified city experience: traffic, noise, crowds, and a view from your window that could be a hill town anywhere. The mountains are visible but not accessible from the room.</p>
       <p><strong>Underestimating drive time</strong> – A 300-kilometre mountain drive takes longer than a 300-kilometre highway drive. Adding one or two hours to your estimate is always safer. Arriving after dark in the hills limits your first evening significantly.</p>
       <p><strong>Picking the wrong season</strong> – Monsoon visits to mountain destinations carry real risk: waterlogged roads, reduced visibility, and cancelled outdoor activities. The July to August window is not suitable for outdoor-focused mountain getaways from Delhi.</p>`,

      `<h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Mountain Destinations Worth the Drive from Delhi</h3>
       <p><strong>Mussoorie and George Everest Peak Area</strong> – Distance from Delhi: 290 to 310 kilometres. Drive time: 6 to 7 hours. This remains the most practical mountain weekend destination from Delhi for a specific reason: the Dehradun to Mussoorie road is one of the better-maintained hill approach roads in Uttarakhand, and Dehradun's airport and railway station give you exit options if travel plans change. The George Everest Peak area, specifically, offers elevation, forest access, and a named landmark with trekking infrastructure. Properties like <strong>Everest Base Camp Mussoorie</strong> are built around this zone and deliver the outdoor access that town-centre hotels do not.</p>
       <p><strong>Dhanaulti</strong> – Distance from Delhi: approximately 330 kilometres via Dehradun. Drive time: 7 to 8 hours. Higher elevation than Mussoorie at around 2,286 metres, quieter atmosphere, and denser deodar forest. Better suited for travellers who specifically want quiet over activity options.</p>
       <p><strong>Lansdowne</strong> – Distance from Delhi: approximately 260 kilometres. Drive time: 5 to 6 hours. A less-visited Garhwal hill station with a distinctive colonial atmosphere. Limited glamping infrastructure, but good for travellers who want a quiet, low-key mountain visit.</p>`,

      `<h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What the Right Accommodation Does for a Two-Night Getaway</h3>
       <p>A two-night mountain weekend from Delhi has roughly 48 hours of usable time after accounting for drive time. How you spend those 48 hours depends almost entirely on where you are staying and what access it provides.</p>
       <p>Accommodation that works for a two-night format:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Positioned within 20 minutes of a trekking trail or natural landmark</li>
         <li>Provides a morning and evening outdoor experience from or near the property</li>
         <li>Does not require a separate vehicle for daily activity access</li>
         <li>Has a functional outdoor space for the evening portion of the day</li>
       </ul>
       <p>Glamping properties satisfy these conditions by design. The tent format places you outdoors from the moment you open the flap, and bonfire setups provide a built-in evening activity that does not require leaving the property. As detailed in this feature on <a href="/adventure-mussoorie" class="text-secondary underline">adventure in the heart of Mussoorie with EBC Mussoorie</a>, the property is specifically designed to make the most of a short mountain stay.</p>`,

      `<h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">A Practical Two-Night Mountain Weekend Itinerary from Delhi</h3>
       <p><strong>Friday evening or early Saturday:</strong> Depart by 4:00 to 5:00 AM Saturday or Friday night if distance allows. Arrive by early afternoon. Check in. Do nothing demanding. Adjust to the altitude and temperature. Evening bonfire.</p>
       <p><strong>Sunday (full day):</strong> Wake early for a morning trek or nature walk before the day heats up. Return by 9:00 AM. Breakfast. Explore the immediate area at a relaxed pace. Afternoon rest. Second evening outdoors.</p>
       <p><strong>Monday morning or Sunday late afternoon:</strong> Checkout. Drive back to Delhi. Arrive by early evening if departing by noon from Mussoorie.</p>
       <p>This schedule is not rushed and does not try to cover too much ground. The mountain weekend getaway that works is the one that treats the setting as the experience rather than as a backdrop for a checklist. Explore current tent accommodations and availability at <a href="/rooms" class="text-secondary underline">EBC Mussoorie</a> to plan your dates around the season that suits you.</p>`,

      `<h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Who Benefits Most from a Mountain Weekend Getaway from Delhi</h3>
       <p><strong>Couples and honeymooners:</strong> The combination of privacy, scenic surroundings, and unhurried time makes this format a strong alternative to city hotel staycations.</p>
       <p><strong>Young professionals:</strong> A 48-hour mountain reset is a genuine change of environment, not just a relocation. The altitude, temperature difference, and morning light all register physically.</p>
       <p><strong>Families with older children:</strong> Two nights provide enough time for a trek, a market visit, and a slow meal without the logistical pressure of a longer trip.</p>
       <p><strong>Corporate groups:</strong> A two-night offsite format in the mountains, with structured outdoor activities and a bonfire evening, reliably achieves more than a conference room event.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is a two-night weekend enough for a mountain trip from Delhi?",
      answer:
        "Yes. With the right property and itinerary, two nights from Friday to Sunday deliver a complete mountain experience.",
    },
    {
      question: "What is the best mountain weekend destination from Delhi?",
      answer:
        "The Mussoorie and George Everest Peak area offers the best balance of drive time, elevation, and outdoor experience infrastructure.",
    },
    {
      question: "What should I pack for a mountain weekend from Delhi?",
      answer:
        "Layered clothing, including a warm jacket, comfortable trekking shoes, sunscreen, a power bank, and personal medications.",
    },
    {
      question: "Is a mountain weekend from Delhi feasible without a private car?",
      answer:
        "Yes. Hired cabs from Delhi to Dehradun are widely available, and the onward journey to Mussoorie can be arranged separately.",
    },
    {
      question: "Which months should I avoid for a mountain getaway from Delhi?",
      answer:
        "July and August carry the highest monsoon-related travel risk. Pre-travel road condition checks are recommended for these months.",
    },
    {
      question: "Are mountain glamping resorts near Delhi suitable for pet owners?",
      answer:
        "Select properties are pet-friendly with applicable restrictions. Confirm the current pet policy directly with the property before booking.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function MountainWeekendPage() {
  // Helper to render HTML content from the description array
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
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-white">
                {articleData.details.title}
              </h2>
            </div>
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
            <span className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-[#0C150D]">Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5A47]">Everything you need to know before booking a glamping trip near Delhi.</p>
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