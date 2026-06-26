import HeroBanner from "@/components/banner/HeroBanner";
import IntroSection from "@/components/CommonSections/IntroSection";
import CtaSection from "@/components/CommonSections/CtaSection";
import Accordion2 from "@/components/accordion/Accordion2";
import { Container, Section, SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData } from "../components/servicesData";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  const post = servicesData.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Service Not Found | EBC Mussoorie",
      description: "The requested service details page could not be found.",
    };
  }

  return {
    title: post.metaData.title,
    description: post.metaData.description,
    alternate: {
      canonical: `https://ebcmussoorie.com/services/${post.slug}/`,
    },
    openGraph: {
      title: post.metaData.title,
      description: post.metaData.description,
      url: `https://ebcmussoorie.com/services/${post.slug}/`,
      siteName: "EBC Mussoorie",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: post.banner.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ServiceDetailsPage({ params }: Params) {
  const resolvedParams = await params;
  const data = servicesData.find((item) => item.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* 1. Hero Banner */}
      <HeroBanner {...data.banner} />

      {/* 2. Intro Section */}
      <IntroSection {...data.intro} />

      {/* 3. Detailed Features Section */}
      <section
        style={{ backgroundColor: data.details.bgColor }}
        className={`py-16 md:py-24 ${data.details.textColor} transition-colors duration-300`}
      >
        <Container>
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              data.details.layout === "text-right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Column */}
            <div
              className={`relative w-full aspect-4/3 md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-secondary/15 ${
                data.details.layout === "text-right" ? "lg:order-first" : "lg:order-last"
              }`}
            >
              <Image
                src={data.details.image}
                alt={data.details.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                {data.details.subtitle && (
                  <span className="uppercase text-secondary text-sm tracking-wider font-semibold block mb-2">
                    {data.details.subtitle}
                  </span>
                )}
                <h2 className={`text-3xl md:text-5xl/tight font-extralight ${data.details.headingColor}`}>
                  {data.details.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
                {data.details.description.map((para, idx) => (
                  <p key={idx} className={data.details.subtextColor}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Highlights List */}
              <div className="mt-4">
                <h3 className={`text-lg font-medium mb-4 tracking-wide uppercase ${data.details.headingColor}`}>
                  What We Offer:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.details.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1 ${data.details.featureBgColor}`}
                    >
                      {/* Premium gold bullet indicator */}
                      <span className="w-2 h-2 rounded-full bg-[#B89258] shrink-0" />
                      <span className={`text-sm md:text-base font-medium tracking-wide ${data.details.featureTextColor || data.details.textColor}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FAQs Section */}
      {data.faqs && data.faqs.length > 0 && (
        <Section className="bg-[#070C08] border-t border-primary/20">
          <Container className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-secondary uppercase text-sm tracking-widest font-semibold">
                Common Inquiries
              </span>
              <SectionHeading
                title="Frequently Asked <i>Questions</i>"
                titleColor="white"
                textCenter
              />
            </div>
            <div className="space-y-2">
              {data.faqs.map((faq, idx) => (
                <Accordion2 key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. CTA Section */}
      <CtaSection {...data.cta} />
    </main>
  );
}
