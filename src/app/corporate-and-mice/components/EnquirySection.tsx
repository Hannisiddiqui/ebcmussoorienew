import Form3 from "@/components/forms/Form3";
import { SectionWithContainer } from "@/components/sectionComponants";

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

      <div className="mt-16 max-w-3xl mx-auto">
        <Form3 />
      </div>
    </SectionWithContainer>
  );
};

export default EnquirySection;
