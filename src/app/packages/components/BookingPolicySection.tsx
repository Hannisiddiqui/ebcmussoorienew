import { SectionWithContainer } from "@/components/sectionComponants";
import { contacts } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

type PolicySection = {
  question: string;
  answer: string[];
};

type TermsAndConditionsSectionProps = {
  title: string;
  policies: PolicySection[];
};

const TermsAndConditionsSection = ({
  title,
  policies,
}: TermsAndConditionsSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-center md:text-5xl text-2xl font-primary text-white">
          {title}
        </h2>

        {/* Card */}
        <div className="mt-16 bg-linear-to-r from-[#0d1b12] to-[#0a160f] border border-[#243326] rounded-md p-8 md:p-10">
          <div className="space-y-12">
            {policies.map((policy, policyIndex) => (
              <div key={policyIndex}>
                {/* Section Heading */}
                <h3 className="text-secondary text-3xl font-primary mb-6">
                  {policy.question}
                </h3>

                {/* Section Content */}
                <div className="space-y-5">
                  {policy.answer.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 border-b border-[#223025] pb-4"
                    >
                      <FaCheck
                        size={12}
                        className="text-secondary mt-1 shrink-0"
                      />

                      <p className="text-[#c7c2b3] text-sm md:text-base leading-7">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href={contacts?.WhatsAppCta}
            target="_blank"
            className="bg-[#c9a56b] hover:bg-[#d6b67a] text-black uppercase tracking-widest text-sm px-10 py-4 rounded-md transition duration-300"
          >
            Book Via WhatsApp
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TermsAndConditionsSection;