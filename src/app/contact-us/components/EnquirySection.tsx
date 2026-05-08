import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import React from "react";

type EnquirySecionProps = {
  title: string;
  subTitle: string;
};

const EnquirySection = ({ title, subTitle }: EnquirySecionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="flex flex-col gap-4 items-center text-white">
        <h2 className="font-primary md:text-5xl text-2xl">{title}</h2>
        <p className="text-lg text-white/40">{subTitle}</p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <Form2 />
      </div>
    </SectionWithContainer>
  );
};

export default EnquirySection;
