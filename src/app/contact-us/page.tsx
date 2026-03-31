import { Section, SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { contactUsPageData } from "./components/pageData";
import Link from "next/link";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import Form1 from "@/components/forms/Form1";

export default function ContactUsPage() {
  return (
    <main>
      <SectionWithContainer sectionClassName="relative">
        <div className="absolute lg:right-1/2 left-0 bg-background-1 lg:w-1/2 w-full z-[-2] inset-y-0 transform  border-r border-primary" />

        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col gap-4 lg:max-w-xl">
            <SectionHeading title={contactUsPageData.bannerDta.title} level={1} />
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
          <div className=" border p-6 border-primary max-w-lg w-full ml-auto rounded-4xl flex gap-3.5 flex-col">
            <SectionHeading title={contactUsPageData.formData.title} />
            <p className="text-[#686868] md:text-[1.375rem] font-medium">
              {contactUsPageData.formData.description}
            </p>
            <Form1 />
          </div>
        </div>
      </SectionWithContainer>
      <Section className="bg-primary md:aspect-4/1.75" defaultPadding={false}>
        <LazyLoadedMap src={contactUsPageData.mapUrl} />
      </Section>
    </main>
  );
}
