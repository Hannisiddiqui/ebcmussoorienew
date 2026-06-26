import HeroBanner from "@/components/banner/HeroBanner";
import CtaSection from "@/components/CommonSections/CtaSection";
import Accordion2 from "@/components/accordion/Accordion2";
import { Container, SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import FeatureCard from "@/components/cards/FeatureCard";
import LinkButton from "@/components/buttons/LinkButton";
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
    alternates: {
      canonical: `https://ebcmussoorie.com/services/${post.slug}/`,
    },
    openGraph: {
      title: post.metaData.title,
      description: post.metaData.description,
      url: `https://ebcmussoorie.com/services/${post.slug}/`,
      siteName: "EBC Mussoorie",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServiceDetailsPage({ params }: Params) {
  const resolvedParams = await params;
  const data = servicesData.find((item) => item.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  const isDark = data.details.bgColor === "#0C150D" || data.details.bgColor === "#070C08";

  return (
    <main className="min-h-screen">

      {/* ── 1. HERO BANNER ─────────────────────────────────── */}
      <HeroBanner {...data.banner} />

      {/* ── 2. INTRO — matches OurStory / FamilyStaySection ─── */}
      <SectionWithContainer sectionClassName="bg-ternary">
        <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-14">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-secondary font-medium tracking-wider uppercase text-sm">
              {data.banner.title}
            </p>
            <h2
              className="font-primary text-white text-3xl md:text-5xl/tight font-extralight"
              dangerouslySetInnerHTML={{ __html: data.intro.title }}
            />
            <div className="space-y-4">
              {data.intro.description.map((para, i) => (
                <p key={i} className="text-light text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {data.intro.quote && (
              <blockquote className="border-l-2 border-secondary pl-4 mt-2">
                <p className="font-primary text-secondary text-lg md:text-xl italic">
                  {data.intro.quote}
                </p>
              </blockquote>
            )}
          </div>

          {/* Image */}
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={data.intro.image}
              alt={data.banner.subTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWithContainer>

      {/* ── 3. DETAIL SECTION — dark/light alternating ───────── */}
      <SectionWithContainer
        sectionStyle={{ backgroundColor: data.details.bgColor }}
        sectionClassName="relative overflow-hidden"
      >
        {/* Subtle background border line (matches AdventuresSection) */}
        <div className="absolute lg:left-1/2 left-0 inset-y-0 w-px z-0 opacity-20"
          style={{ background: isDark ? "#B89258" : "#0C150D" }}
        />

        <div
          className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 ${
            data.details.layout === "text-right" ? "" : "lg:[&>*:first-child]:order-last"
          }`}
        >
          {/* Image */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={data.details.image}
              alt={data.details.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {data.details.subtitle && (
              <span className="uppercase text-secondary text-sm tracking-widest font-medium">
                {data.details.subtitle}
              </span>
            )}

            <SectionHeading
              title={data.details.title}
              titleColor={isDark ? "white" : "[#0C150D]"}
            />

            <div className="space-y-4">
              {data.details.description.map((para, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg leading-relaxed ${
                    isDark ? "text-neutral-300" : "text-light"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Feature checklist — matches ActivitiesCards style */}
            <div
              className={`p-5 md:p-6 rounded-sm border flex flex-col gap-3 ${
                isDark
                  ? "bg-primary border-secondary/30"
                  : "bg-[#F2F2F2] border-[#0C150D]/10"
              }`}
            >
              <p
                className={`font-primary text-xl mb-1 ${
                  isDark ? "text-secondary" : "text-[#0C150D]"
                }`}
              >
                What&apos;s Included
              </p>
              <ul className="flex flex-col gap-2 divide-y divide-white/10">
                {data.details.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 pb-2 text-sm md:text-base ${
                      isDark ? "text-white" : "text-[#0C150D]"
                    }`}
                  >
                    <span className="text-secondary font-bold text-lg leading-none shrink-0">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <LinkButton
              href={data.cta.actions[0]?.href ?? "/contact-us"}
              label={data.cta.actions[0]?.label ?? "Book Now"}
              className={`w-fit rounded-sm uppercase text-sm tracking-wider ${
                isDark
                  ? "bg-secondary text-primary border-secondary"
                  : "bg-primary text-white border-primary"
              }`}
            />
          </div>
        </div>
      </SectionWithContainer>

      {/* ── 4. FAQs — matches home FaqSection pattern ─────────── */}
      {data.faqs && data.faqs.length > 0 && (
        <SectionWithContainer
          sectionClassName="bg-[#162218]"
          containerClassName="md:space-y-12 space-y-8"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="uppercase text-secondary text-sm tracking-widest font-medium">
              Common Questions
            </span>
            <SectionHeading
              title={`Frequently Asked <i>Questions</i>`}
              titleColor="white"
              textCenter
            />
          </div>
          <div className="max-w-3xl mx-auto w-full space-y-2">
            {data.faqs.map((faq, i) => (
              <Accordion2 key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </SectionWithContainer>
      )}

      {/* ── 5. RELATED HIGHLIGHTS — FeatureCard grid ─────────── */}
      {data.highlights && data.highlights.length > 0 && (
        <SectionWithContainer
          sectionClassName="bg-[#162218]"
          containerClassName="md:space-y-12 space-y-8"
        >
          <SectionHeading2
            title="Why Guests Love This"
            description="Highlights that make this service exceptional"
            textCenter
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {data.highlights.map((item, i) => (
              <FeatureCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </SectionWithContainer>
      )}

      {/* ── 6. CTA — matches CtaSection used across site ──────── */}
      <CtaSection {...data.cta} />
    </main>
  );
}
