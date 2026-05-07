import ContactCardsSection from "./components/ContactCardSection";
import ContactHeroSection from "./components/ContactHeroSection";
import InfoCardsSection from "./components/InforCardSection";
import { contactUsPageData } from "./components/pageData";

export default function ContactUsPage() {
  return (
    <main className="bg-black">
      <ContactHeroSection {...contactUsPageData?.bannerDta} />
      <ContactCardsSection {...contactUsPageData?.contactCards} />
      <InfoCardsSection cards={contactUsPageData.infoCards.cards} />;
      {/* <SectionWithContainer sectionClassName="relative">
        <div className="absolute lg:right-1/2 left-0 bg-background-1 lg:w-1/2 w-full z-[-2] inset-y-0 transform  border-r border-primary" />

        <div className="grid lg:grid-cols-2 grid-cols-1 items-center max-lg:gap-8">
          <div className="flex flex-col gap-4 lg:max-w-xl md:pr-6">
            <SectionHeading
              title={contactUsPageData.bannerDta.title}
              level={1}
            />
            <p className="text-[#686868] md:text-[1.375rem] font-medium">
              {contactUsPageData.bannerDta.description}
            </p>
            <ul className="flex flex-col gap-1">
              {contactUsPageData.bannerDta.links.map((item, index) => (
                <li
                  key={index}
                  className="text-[#686868] md:text-[1.375rem] font-medium"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" border md:p-6 max-md:px-4 max-md:py-5 border-primary xl:max-w-lg lg:max-w-106 w-full lg:ml-auto lg:rounded-4xl rounded-3xl flex md:gap-3.5 gap-2 flex-col">
            <SectionHeading
              title={contactUsPageData.formData.title}
              titleClassName="md:text-[2.5rem] text-lg"
            />
            <p className="text-[#686868] md:text-[1.375rem] font-medium">
              {contactUsPageData.formData.description}
            </p>
            <Form1 />
          </div>
        </div>
      </SectionWithContainer> */}
      {/* <Section
        className="bg-primary md:aspect-4/1.75 aspect-4/3"
        defaultPadding={false}
      >
        <LazyLoadedMap src={contactUsPageData.mapUrl} />
      </Section> */}
    </main>
  );
}
