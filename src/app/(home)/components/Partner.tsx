import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { JSX } from "react";

interface PartnerProps {
  icon: JSX.Element;
  title: string;
  src: string;
}

const Partner: React.FC<{ partners: PartnerProps[] }> = ({ partners }) => {
    partners = [...partners, ...partners];
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="bg-primary">
      <div
        className={`relative overflow-hidden p-8 bg-background-1 rounded-4xl`}
      >
        <div className="marquee-wrapper ">
          <div className="marquee-track">
            {partners.map((t, i) => (
              <div key={i} className="marquee-item font-semibold">
                <div className="flex items-center gap-2 justify-center">
                  <span>{t.icon}</span>
                  <div>
                    <h3 className="text-2xl text-primary font-secondary">
                      {t.title}
                    </h3>
                    <div className="relative w-30 aspect-[4/1.6]">
                      <Image
                        src={t.src}
                        alt={t.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <span className="separator w-0.5 h-7 aspect-square bg-primary"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Partner;
