import { SectionWithContainer } from "@/components/sectionComponants";
import React from "react";
import { FaCheck } from "react-icons/fa";

type PricingInfoSectionProps = {
  alwaysIncluded: string[];
  seasonalPricingNotes: {
    title: string;
    description: string;
  }[];
  addOns: {
    title: string;
    description: string;
    price: string;
  }[];
};

const PricingInfoSection = ({
  alwaysIncluded,
  seasonalPricingNotes,
  addOns,
}: PricingInfoSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Always Included */}
        <div>
          <h2 className="text-3xl font-primary text-white">Always Included</h2>

          <div className="space-y-5 mt-6 divide-y divide-secondary/20">
            {alwaysIncluded.map((item, index) => (
              <div key={index} className="flex items-center gap-4 pb-3">
                {/* <Check className="w-4 h-4 mt-1 text-secondary shrink-0" /> */}

                <span className="text-secondary mt-2">
                  <FaCheck size={14} />
                </span>
                <p className="text-base leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Pricing Notes */}
        <div>
          <h2 className="text-3xl font-primary text-white">
            Seasonal Pricing Notes
          </h2>

          <div className="space-y-7 mt-6">
            {seasonalPricingNotes.map((item, index) => (
              <div key={index} className="">
                {/* <h3 className="text-[#d6b67a] text-sm uppercase tracking-wider mb-2">
                  {item.title}
                </h3> */}

                <p className="text-base leading-7 text-white/40">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Ons */}
        <div>
          <h2 className="text-3xl font-primary text-white">Add-Ons</h2>

          <div className="space-y-6 mt-6">
            {addOns.map((item, index) => (
              <div key={index} className="">
                <div className="grid grid-cols-3 items-center gap-2">
                  <h3 className="text-base text-white leading-6">
                    {item.title}
                  </h3>

                  <span className="text-white text-sm whitespace-nowrap flex flex-col">
                    <span>-</span>
                    {item.price}
                  </span>

                  <p className="text-sm text-white/40 leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default PricingInfoSection;
