import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import { SectionWithContainer } from "@/components/sectionComponants";
import { pageData } from "./components/pageData";
import Accordion2 from "@/components/accordion/Accordion2";
import LinkButton from "@/components/buttons/LinkButton";

export default function page() {
  return (
    <main>
      <HeroHeaderSection
        title=""
        description="Everything you need to know before you arrive"
        subTitle="Frequently Asked Questions"
      />
      <SectionWithContainer sectionClassName="bg-ternary">
        <div className="max-w-5xl mx-auto">
          {pageData.faq.map((item, index) => (
            <Accordion2 key={index} question={item.q} answer={item.a} />
          ))}
        </div>
        <LinkButton
          label={pageData.link.text}
          href={pageData.link.link}
          className="bg-secondary w-fit mx-auto mt-4 text-white border-none rounded-sm uppercase"
        />
      </SectionWithContainer>
    </main>
  );
}
