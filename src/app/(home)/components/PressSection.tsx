import { PressSectionProps } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import PressSectionSlider from "./slider/PressSectionSlider";

const PressSection: React.FC<PressSectionProps> = ({ title, links }) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="flex flex-col gap-2">
        <SectionHeading title={title} textCenter />
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
      <PressSectionSlider links={links} />
    </SectionWithContainer>
  );
};

export default PressSection;

export const Star = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0004 16.1023L8.37039 18.2943C8.26372 18.3469 8.16472 18.3683 8.07339 18.3583C7.98272 18.3476 7.89439 18.3163 7.80839 18.2643C7.72172 18.2109 7.65639 18.1356 7.61239 18.0383C7.56839 17.9409 7.56439 17.8346 7.60039 17.7193L8.56639 13.6093L5.37139 10.8393C5.28139 10.7659 5.22206 10.6783 5.19339 10.5763C5.16472 10.4743 5.17106 10.3766 5.21239 10.2833C5.25372 10.1899 5.30872 10.1133 5.37739 10.0533C5.44672 9.99526 5.54006 9.95592 5.65739 9.93526L9.87339 9.56726L11.5174 5.67526C11.5627 5.56526 11.6281 5.48592 11.7134 5.43726C11.7987 5.38859 11.8944 5.36426 12.0004 5.36426C12.1064 5.36426 12.2024 5.38859 12.2884 5.43726C12.3744 5.48592 12.4394 5.56526 12.4834 5.67526L14.1274 9.56726L18.3424 9.93526C18.4604 9.95526 18.5541 9.99492 18.6234 10.0543C18.6927 10.1129 18.7481 10.1893 18.7894 10.2833C18.8301 10.3766 18.8361 10.4743 18.8074 10.5763C18.7787 10.6783 18.7194 10.7659 18.6294 10.8393L15.4344 13.6093L16.4004 17.7193C16.4377 17.8333 16.4341 17.9393 16.3894 18.0373C16.3447 18.1353 16.2791 18.2106 16.1924 18.2633C16.1071 18.3166 16.0187 18.3483 15.9274 18.3583C15.8367 18.3683 15.7381 18.3469 15.6314 18.2943L12.0004 16.1023Z"
      fill="#DFB65C"
    />
  </svg>
);
