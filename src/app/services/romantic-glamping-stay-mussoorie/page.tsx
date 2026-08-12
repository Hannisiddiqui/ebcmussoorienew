import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

const articleData = {
  // ✅ URL is exactly: romantic-glamping-stay-mussoorie
  slug: "romantic-glamping-stay-mussoorie",
  metaData: {
    title: "Romantic Glamping Stay in Mussoorie: What the Format Delivers That a Hotel Cannot | EBC Mussoorie",
    description:
      "A complete guide to a romantic glamping stay in Mussoorie – what the format delivers, which unit to choose, and why the outdoor experience matters more than the room.",
  },
  banner: {
    title: "Romantic Glamping Stay in Mussoorie",
    subTitle: "What the Format Delivers That a Hotel Cannot",
    description:
      "Ask a couple what made a stay memorable, and they rarely name the room. They name the evening. They name the morning walk. They name the moment on the terrace when the cloud lifted.",
    image: "/banner/bnr2.png", // Replace with a romantic glamping banner if available
  },
  intro: {
    title: "Romantic Glamping Stay in Mussoorie",
    description: [
      "Ask a couple what made a stay memorable, and they rarely name the room. They name the evening. They name the morning walk. They name the moment on the terrace when the cloud lifted. Which is why the glamping format, done properly, has become the strongest romantic accommodation category in Mussoorie. It is built around exactly the things couples actually remember.",
      "This guide covers what luxury glamping actually means in the Mussoorie context, the four things that make it genuinely romantic, and how to choose the right unit at EBC Mussoorie for your stay.",
    ],
  },
  details: {
    title: "The Romantic Glamping Guide",
    subtitle: "Find Your Perfect Stay",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">First, What Luxury Glamping Actually Means Here</h2>
       <p>The word gets stretched. In the Mussoorie context, at the premium end, luxury glamping means:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>A permanent, structurally solid accommodation unit set within a natural landscape rather than a building complex</li>
         <li>Full hospitality service, not self-catering</li>
         <li>Premium bedding, attached modern bathrooms, high-speed WiFi, and tea and coffee facilities</li>
         <li>Private outdoor space attached to the unit</li>
         <li>Curated outdoor experiences built into the stay rather than sold separately</li>
       </ul>
       <p>EBC Mussoorie is a luxury glamping resort in this sense: 14 accommodation units across seven categories, on a 20-acre private forest estate beside George Everest House, at approximately 6,800 feet on the western Mussoorie ridge.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Four Things That Make Glamping Romantic</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">One: The outdoor space belongs to the two of you</h3>
       <p>A hotel balcony overlooks another hotel balcony. A Glamper Room sit-out at EBC Mussoorie faces the forest. That difference is not cosmetic. It determines whether a couple spends the evening outside or retreats indoors. The four Glamper Rooms are the property's signature couple accommodation: spacious interiors, king-size bed, attached modern bathroom, private sit-out, and forest and valley views.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Two: The evening has a centre</h3>
       <p>Every romantic stay needs an anchor to the evening. In a city hotel, that anchor is a restaurant. At a forest estate, it is a fire. Private bonfire setups on the estate are a confirmed feature at EBC Mussoorie. Combined with outdoor BBQ arrangements and the Park Cafe's alfresco seating, the evening at this property has genuine structure without needing to leave the grounds.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Three: The morning is available</h3>
       <p>The best hour of a Mussoorie day is between 6 and 8 AM. A property where that hour requires arranging transport is a property where most guests skip it. At a 20-acre forest estate, the morning walk begins at the door. The George Everest heritage site adjacent to the property gives it a destination and a story: Sir George Everest was Surveyor General of India from 1830 to 1843, and the mountain that carries his name was named for the survey work conducted from ridges like this one.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Four: The scale keeps it private</h3>
       <p>Fourteen units. Maximum 28 guests without extra beds, up to 50 with. That is the entire property. A couple is not sharing a lobby with two hundred people or queuing for a breakfast buffet.</p>
       <p>See the <a href="/rooms" class="text-secondary underline">full accommodation range at EBC Mussoorie</a> to compare categories.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Choosing Your Unit</h2>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Category</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Why It Works for Couples</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Availability</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Glamper Room</td>
               <td class="border border-secondary/20 px-4 py-2">The signature romantic glamping unit. Private sit-out, forest-facing, king bed, attached modern bathroom.</td>
               <td class="border border-secondary/20 px-4 py-2">4 rooms</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Zenith Luxury Cottage</td>
               <td class="border border-secondary/20 px-4 py-2">Standalone cottage with large panoramic windows, enhanced privacy, and premium interiors. The choice for maximum seclusion.</td>
               <td class="border border-secondary/20 px-4 py-2">1 cottage</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Camper Room</td>
               <td class="border border-secondary/20 px-4 py-2">Cosy entry-level luxury with a king-size bed. Ideal for couples who intend to spend their time on the estate rather than in the room.</td>
               <td class="border border-secondary/20 px-4 py-2">1 room</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Surveyor Room</td>
               <td class="border border-secondary/20 px-4 py-2">Spacious premium room with scenic mountain and meadow views, premium furnishings, and a work-friendly setup. Suits couples on a longer stay or a workation.</td>
               <td class="border border-secondary/20 px-4 py-2">1 room</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Surveyor Suite</td>
               <td class="border border-secondary/20 px-4 py-2">The largest suite category, with a king bed and a foldable queen on request. For couples travelling with a child or an extended family member.</td>
               <td class="border border-secondary/20 px-4 py-2">1 suite</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Twin Luxury Cottages</td>
               <td class="border border-secondary/20 px-4 py-2">Two interconnecting rooms with a common balcony, air-conditioned. Suits two couples travelling together who want connected but separate spaces.</td>
               <td class="border border-secondary/20 px-4 py-2">1 set (2 rooms)</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Andrew's Villas</td>
               <td class="border border-secondary/20 px-4 py-2">Duplex villas with separate entrances, spacious living areas, and premium furnishings. The most spacious option on the estate, suited to couples travelling with family.</td>
               <td class="border border-secondary/20 px-4 py-2">2 villas (4 rooms)</td>
             </tr>
           </tbody>
         </table>
       </div>
       <p class="mt-4">Total property inventory is 14 units, accommodating 28 guests without extra beds and up to 50 with extra beds.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Season Guide for a Romantic Glamping Stay</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November:</strong> The strongest window overall. Crisp air, clearest valley views of the year, excellent stargazing on the George Everest ridge (weather permitting), and comfortable bonfire evenings.</li>
         <li><strong>April to June:</strong> Warm days, cool evenings, widest outdoor activity range. May is peak season; book early.</li>
         <li><strong>December to February:</strong> Cold, quiet, and distinctive. Possibility of snowfall on the ridge. Confirm heating arrangements when booking.</li>
         <li><strong>July to September:</strong> Atmospheric, private, and lower-rate. Confirm operational status and road access with the property before booking.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What to Confirm Before You Book</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Which specific unit you are being allocated, not just the category</li>
         <li>Whether the private sit-out has partial cover</li>
         <li>Whether the bonfire is included or separately arranged</li>
         <li>Dining arrangements for an intimate dinner rather than a group setting</li>
         <li>Cancellation and rescheduling terms</li>
         <li>Pet arrangements if applicable, since the property is confirmed pet-friendly</li>
       </ul>
       <p>For a first-person account of what the estate and its surroundings feel like on the ground, the <a href="https://www.tripoto.com/trip/ebc-mussoorie" target="_blank" rel="noopener noreferrer" class="text-secondary underline">Tripoto trip account of EBC Mussoorie</a> is the most useful external reference available.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is glamping comfortable enough for a honeymoon?",
      answer:
        "At the premium end, yes. EBC Mussoorie's units include king-size beds, attached modern bathrooms, premium toiletries, tea and coffee facilities, and high-speed WiFi.",
    },
    {
      question: "Which unit is most romantic at EBC Mussoorie?",
      answer:
        "The Glamper Room for the signature experience, or the Zenith Luxury Cottage for standalone privacy.",
    },
    {
      question: "Is there WiFi?",
      answer:
        "Yes, high-speed WiFi across all accommodation categories.",
    },
    {
      question: "What is the location exactly?",
      answer:
        "Beside George Everest House on the western Mussoorie ridge, at approximately 6,800 feet, away from the Mall Road commercial area.",
    },
    {
      question: "Can we book the whole property for a celebration?",
      answer:
        "Contact EBC Mussoorie directly to discuss full-property availability and arrangements.",
    },
    {
      question: "How private is the property?",
      answer:
        "Fourteen units across a 20-acre estate, with a maximum of 28 guests without extra beds. More importantly, every accommodation unit is standalone: no room shares a wall with another room. There are no corridors, no adjoining rooms, and no sound transfer between guests. Each unit sits independently within the forest estate. This is structurally different from a conventional hill station hotel, where privacy depends on how considerate your neighbours happen to be rather than on how the building is designed.",
    },
  ],
};

export const metadata = articleData.metaData;

export default function RomanticGlampingStayPage() {
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
              description="Everything you need to know before booking your romantic glamping stay in Mussoorie."
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