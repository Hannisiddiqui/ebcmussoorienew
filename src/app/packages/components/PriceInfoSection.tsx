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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 overflow-hidden">
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
        {/* Add Ons */}
        <div className="mt-10 lg:mt-0 lg:col-span-2 overflow-x-auto">
          <h2 className="text-3xl font-primary text-white">Add-Ons</h2>

          {/* Table wrapper */}
          <div className="mt-6 min-w-full">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-secondary/20">
                  <th className="text-left py-3 pr-4 text-sm font-medium text-white">
                    Add-On
                  </th>
                  {/* <th className="text-left py-3 pr-4 text-sm font-medium text-white whitespace-nowrap">
                    Price
                  </th> */}
                  <th className="text-left py-3 text-sm font-medium text-white">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                {addOns.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-secondary/10 last:border-b-0"
                  >
                    <td className="py-4 pr-4 text-base text-white whitespace-nowrap">
                      {item.title}
                    </td>

                    {/* <td className="py-4 pr-4 text-sm text-white whitespace-nowrap">
                      {item.price}
                    </td> */}

                    <td className="py-4 text-sm text-white/40 leading-6 min-w-[250px]">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default PricingInfoSection;
