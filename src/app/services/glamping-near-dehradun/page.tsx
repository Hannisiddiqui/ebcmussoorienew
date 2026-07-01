import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  slug: "glamping-near-dehradun",
  metaData: {
    title: "Glamping Near Dehradun: The Mountain Escape You Can Reach Before Lunch | EBC Mussoorie",
    description:
      "A complete guide to glamping near Dehradun – distance, destinations, seasonal tips, and why the Mussoorie ridge is the most accessible mountain glamping corridor in northern India.",
  },
  banner: {
    title: "Glamping Near Dehradun",
    subTitle: "The Mountain Escape You Can Reach Before Lunch",
    description:
      "Discover the most accessible glamping corridor in northern India. From Dehradun to the Mussoorie ridge – reach the hills in under 90 minutes and wake up in a different climate.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Glamping Near Dehradun: A Practical Guide",
    description: [
      "Dehradun is not just a transit point. For most travellers arriving by train or flight from Delhi, Mumbai, or Chandigarh, it is the last major city before the mountains begin. But what fewer people realise is that the land between Dehradun and Mussoorie, specifically the forested ridgeline stretching toward George Everest Peak, is one of the most accessible glamping corridors in northern India. If you are searching for glamping near Dehradun, you are in the right zone. This guide covers what the area offers, how far each option sits from the city, what to expect from the landscape, and why this region consistently draws travellers from across India for short mountain escapes.",
    ],
  },
  details: {
    title: "Why Dehradun Is the Gateway to the Best Mountain Glamping",
    subtitle: "Gateway Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Dehradun Is the Gateway to the Best Mountain Glamping in the Region</h2>
       <p>Dehradun sits at roughly 640 metres above sea level in the Doon Valley. Within 35 to 50 kilometres of the city, the elevation climbs steeply into Mussoorie territory, reaching around 2,000 metres. This rapid change in altitude over a short distance is what makes the Dehradun to Mussoorie belt genuinely distinctive for glamping.</p>
       <p><strong>Three things make this zone work as a glamping destination:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Accessibility from Jolly Grant Airport:</strong> Dehradun's airport receives direct flights from Delhi, Mumbai, Bangalore, and Hyderabad. For non-Delhi travellers, this is a major logistical advantage over hill stations that require multi-leg journeys.</li>
         <li><strong>Railway connectivity:</strong> Dehradun Railway Station is on a major line with connections to Delhi, Howrah, and Mumbai. The onward drive to Mussoorie takes under an hour and a half.</li>
         <li><strong>Road quality:</strong> The Dehradun to Mussoorie highway is well-maintained for most of the year, making the approach comfortable even in an entry-level vehicle.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What the Glamping Landscape Looks Like Near Dehradun</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Mussoorie Ridge Zone</h3>
       <p>This is the primary glamping zone within reach of Dehradun. Properties in this area sit at elevations between 1,800 and 2,200 metres, surrounded by oak and rhododendron forest, with views that open out across the Doon Valley or toward the Himalayan snowline, depending on orientation. <strong>Everest Base Camp Mussoorie</strong> is located in this zone, close to George Everest Peak. The property provides premium furnished tent accommodations, trekking access, and curated outdoor experiences designed for leisure travellers from major Indian cities. You can review specific tent options at <a href="/rooms" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Dhanaulti Zone</h3>
       <p>Dhanaulti sits about 30 kilometres beyond Mussoorie at an elevation of approximately 2,286 metres. It is quieter than Mussoorie and surrounded by dense deodar forest, maintained partly by the Uttarakhand Forest Department. Several operator-led seasonal camps run here between September and June.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">The Chakrata Zone</h3>
       <p>Chakrata is about 90 kilometres from Dehradun and sits at roughly 2,118 metres. It sees far fewer visitors than Mussoorie and offers a genuine off-the-beaten-path experience. Infrastructure is limited, which makes it better suited to experienced travellers than first-timers.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Far Are These Glamping Options from Dehradun?</h2>
       <p>Clear travel distances matter when planning a short trip.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Mussoorie Ridge (George Everest Peak area):</strong> 35 to 50 kilometres from Dehradun. Approximately 1 to 1.5 hours by road.</li>
         <li><strong>Dhanaulti:</strong> 65 to 70 kilometres from Dehradun. Approximately 1.5 to 2 hours.</li>
         <li><strong>Chakrata:</strong> 88 kilometres from Dehradun. Approximately 2.5 to 3 hours.</li>
       </ul>
       <p>For travellers with one night available, the Mussoorie zone is the only realistic option. For two nights or more, Dhanaulti adds variety without significantly extending drive time.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Expect from a Glamping Stay Near Dehradun</h2>
       <p>A well-run glamping property in this zone provides:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Furnished luxury tents with proper beds, blankets, and electricity</li>
         <li>Hot water access, either attached or via a dedicated washroom block</li>
         <li>A bonfire setup during suitable weather and within seasonal availability</li>
         <li>Guided or self-guided trekking access to nearby trails</li>
         <li>Meals, either included in the package or available on the property</li>
       </ul>
       <p>The experience near Dehradun is defined by the elevation shift. You wake up in a different climate zone from the city below, with cooler air, a quieter sound environment, and morning light that reads differently at altitude. As detailed in this piece on <a href="/adventure-mussoorie" class="text-secondary underline">adventure in the heart of Mussoorie with EBC Mussoorie</a>, the combination of proximity to Dehradun and the quality of the outdoor setting makes this zone particularly effective for short-stay travellers.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Seasonal Guide for Glamping Near Dehradun</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>March to May:</strong> Comfortable temperatures, clear skies, accessible trails. Best window for first-time glamping visits.</li>
         <li><strong>June:</strong> Pre-monsoon heat builds in the valley, but the ridge stays cooler. Manageable in early June.</li>
         <li><strong>July to August:</strong> Monsoon season. Rain is frequent, trails can be slippery, and some roads see a landslip risk. Not recommended for glamping-focused visits.</li>
         <li><strong>September to November:</strong> Excellent conditions. Clear post-monsoon air, open trails, and lower crowd density than the summer peak.</li>
         <li><strong>December to February:</strong> Cold, especially at night. Some properties operate year-round; confirm heating and cold-weather readiness before booking.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Who Should Choose Glamping Near Dehradun</h2>
       <p>This zone works particularly well for:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Couples and honeymooners</strong> who want a scenic, private setting within a short flight of major metros</li>
         <li><strong>Corporate groups</strong> from Dehradun-based or Uttarakhand-based organisations looking for a one-night offsite</li>
         <li><strong>Families with older children</strong> who want trekking access without a full-day drive</li>
         <li><strong>Solo travellers and digital nomads</strong> seeking a quiet workation base with reliable connectivity</li>
       </ul>
       <p>It is especially useful for travellers arriving by air or rail who want to minimise road time and maximise mountain time.</p>`,
    ],
  },
  faqs: [
    {
      question: "How far is glamping from Dehradun city centre?",
      answer:
        "The nearest glamping options near Mussoorie are 35 to 50 kilometres from Dehradun, roughly a 1 to 1.5-hour drive.",
    },
    {
      question: "Can I reach glamping near Dehradun without a private vehicle?",
      answer:
        "Yes. Shared taxis and hired cabs are widely available from Dehradun Railway Station and Jolly Grant Airport to Mussoorie.",
    },
    {
      question: "Is glamping near Dehradun suitable in winter?",
      answer:
        "Select properties operate in winter with cold-weather tent setups. Confirm heating and washroom arrangements before booking.",
    },
    {
      question: "What activities are available at glamping sites near Dehradun?",
      answer:
        "Trekking, nature walks, bonfires, and stargazing are common. Availability depends on the season and property.",
    },
    {
      question: "Is pet-friendly glamping available near Dehradun?",
      answer:
        "Some properties accommodate pets with applicable restrictions. Confirm directly before booking.",
    },
    {
      question: "What is the best time to book glamping near Dehradun?",
      answer:
        "For peak season visits in April to June and October, book four to six weeks in advance.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function GlampingNearDehradunPage() {
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
              description="Everything you need to know before booking your glamping stay near Dehradun."
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