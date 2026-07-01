import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "forest-resort-near-dehradun",
  metaData: {
    title: "Inside the Forest: What Staying at a Forest Resort Near Dehradun Feels Like | EBC Mussoorie",
    description:
      "A sensory guide to forest resorts near Dehradun – what the forests actually contain, how a quality stay feels, and what to expect from the oak‑rhododendron zone.",
  },
  banner: {
    title: "Inside the Forest",
    subTitle: "What Staying at a Forest Resort Near Dehradun Feels Like",
    description:
      "Light, temperature, sound, and scent – what it actually means to be placed inside a living forest ecosystem near Dehradun.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Inside the Forest",
    description: [
      "You notice it within the first hour. The light changes when you are inside a functioning forest. It comes in at angles and quantities that open ground simply does not produce. The temperature is different, the sound layer is different, and the air carries something difficult to name but immediately registers as the absence of pollution and synthetic fragrance. Staying at a forest resort near Dehradun is not primarily about having trees visible from your window. It is about being placed inside a living ecosystem for long enough that your body begins to calibrate to it. This guide covers the forests of the Dehradun region, what specific forest environments exist within reach of the city, and what a quality forest resort stay here delivers in practical terms.",
    ],
  },
  details: {
    title: "The Forests Near Dehradun: What Is Actually Out There",
    subtitle: "A Sensory Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Forests Near Dehradun: What Is Actually Out There</h2>
       <p>The Dehradun valley is surrounded by three distinct forest zones, each with a different character, biodiversity profile, and visitor experience.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Shivalik Sal Forests (Lower Elevation)</h3>
       <p>The Shivalik foothills to the south and southeast of Dehradun are covered in sal (Shorea robusta) dominated tropical moist forests. These form the buffer zones of Rajaji National Park, which begins approximately 15 kilometres east of Dehradun. Sal forests have a specific aesthetic: tall, straight‑trunked trees with a high canopy and a relatively open forest floor. Light penetrates in shafts. The forest floor carries a leaf litter that produces a particular soft sound when walked on. Wildlife in the Rajaji buffer zone includes elephant, leopard, sambar, spotted deer, and a significant bird diversity, including several species of hornbill. Access to the deep forest zones requires a permit and is managed by the Uttarakhand Forest Department.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Mussoorie Oak and Rhododendron Forests (Mid‑Elevation)</h3>
       <p>At 1,500 to 2,100 metres, the forest composition changes entirely. Banj oak dominates the ridgelines around Mussoorie and the George Everest Peak zone. These forests are denser in understory, more moisture‑retentive, and support a significantly different bird community from the Shivalik zone below. This is the forest that most forest resort properties near Dehradun are positioned within. The oak forest at this elevation provides reliable shade, cool temperatures, and a distinct seasonal character: bare‑branched in February, bursting with rhododendron colour in March, dense and green through the monsoon, and golden‑edged in November.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Deodar and Blue Pine Forests (Upper Elevation)</h3>
       <p>Above 2,200 metres, deodar cedar (Cedrus deodara) and blue pine (Pinus wallichiana) begin to establish. These are found prominently around Dhanaulti, 30 kilometres beyond Mussoorie, and the forests here carry a different smell and sound quality from the oak zone below. The resinous scent of pine and cedar is distinctive and immediately identifiable. Deodar is one of the most significant trees in the Garhwal Himalayan ecosystem, used historically for temple construction, forest ecology, and watershed regulation.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What a Quality Forest Resort Near Dehradun Provides</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Position Within the Forest, Not Adjacent to It</h3>
       <p>A resort that uses "forest resort" in its marketing but is positioned on a cleared hillside with an ornamental tree line is not a forest resort. The accommodation should sit within or at the genuine edge of a functioning forest tract, with canopy cover overhead or within a 2‑minute walk.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Minimal Light Pollution at Night</h3>
       <p>One of the most undervalued aspects of genuine forest resort stays is what happens after dark. A property that limits artificial lighting preserves both the nocturnal wildlife activity near the accommodation and the stargazing quality above it. Ask about the property's lighting approach before booking.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Access to Walking Trails Through Working Forest</h3>
       <p>The forest experience requires walking inside it, not observing it from a terrace. Properties within the Mussoorie belt, especially near George Everest Peak, offer trail access that passes through active oak‑rhododendron forest zones.</p>
       <p><strong>Everest Base Camp Mussoorie</strong> is positioned in the George Everest Peak forest zone and provides this kind of access as a core part of the stay. Guests can read the on‑ground experience details in this piece on <a href="/adventure-mussoorie" class="text-secondary underline">EBC Mussoorie's forest and outdoor setting</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Sensory Sequence of a Forest Resort Stay Near Dehradun</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Morning:</strong> Before 7:00 AM, the bird activity in the oak forest around Mussoorie is at its peak. The forest produces a layered sound environment that most people have never heard outside a documentary. Half an hour of quiet sitting at the edge of the tree line before a walk is a genuinely unusual and difficult‑to‑replicate experience.</li>
         <li><strong>Midday:</strong> The forest canopy provides shade that makes midday outdoor time comfortable even in May, when the plains below are already past 40 degrees. This is the best time for slower walks and botanical observation.</li>
         <li><strong>Afternoon:</strong> Forest light in the late afternoon has a quality that is specific to this elevation and latitude. The angle of the sun through the oak canopy produces patterns that photographers find specifically compelling.</li>
         <li><strong>Evening:</strong> As the temperature drops, the forest becomes active again. Insects produce a different sound layer from the morning birds, and the cooler air carries the smell of leaf litter and soil more distinctly than at midday.</li>
       </ul>
       <p>Explore what staying at a forest‑adjacent glamping resort looks like in detail at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "What type of forest is near Dehradun for a forest resort stay?",
      answer:
        "Three distinct zones: sal forest in the Shivalik foothills, oak-rhododendron forest at Mussoorie elevation (1,500 to 2,100 metres), and deodar-pine forest above 2,200 metres near Dhanaulti.",
    },
    {
      question: "Are forest resorts near Dehradun open year‑round?",
      answer:
        "Most operate year‑round. Monsoon months (July to August) restrict trail access, but the forest itself is dramatically alive during this period.",
    },
    {
      question: "What wildlife might I see near a forest resort near Dehradun?",
      answer:
        "Leopard, deer, and bird species in the Shivalik zone. Rich bird life, including pheasants, flycatchers, and laughingthrushes in the Mussoorie oak forest zone.",
    },
    {
      question: "Are forest resort stays suitable for children?",
      answer:
        "Yes. The forest environment is engaging and educational for children. Confirm that the trail terrain is appropriate for the age group.",
    },
    {
      question: "How close are forest resorts near Dehradun to the city?",
      answer:
        "The nearest forest zone properties are 35 to 50 kilometres from Dehradun city centre, approximately 1 to 1.5 hours by road.",
    },
    {
      question: "Is a guided nature walk part of the forest resort experience?",
      answer:
        "At better‑run properties, yes. Confirm whether guided forest walks are available and what level of natural history interpretation is provided.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function ForestResortPage() {
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
              description="Everything you need to know before booking a forest resort stay near Dehradun."
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