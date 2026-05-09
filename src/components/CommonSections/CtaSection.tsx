import LinkButton from "../buttons/LinkButton";
import { SectionWithContainer } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeading";
import { SectionHeading2 } from "../typography/SectionHeading2";

interface Props {
  title: string;
  subtitle: string;
  description: string[];
  actions: {
    label: string;
    href: string;
  }[];
}
const CtaSection: React.FC<Props> = ({
  title,
  subtitle,
  description,
  actions,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center max-w-xl mx-auto gap-5">
        <p className="text-secondary uppercase text-[1.375rem] ">{title}</p>
        <SectionHeading2
          title={subtitle}
          textCenter
          wrapperClassName="gap-4"
          description={description[0]}
        />
        <div className="flex max-md:flex-col md:gap-4 gap-1">
          {actions.map((action, index) => (
            <LinkButton
              label={action.label}
              href={action.href}
              key={index}
              className={`mt-4 rounded-sm uppercase ${
                index === 0
                  ? "bg-secondary text-primary border-none"
                  : "bg-transparent text-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CtaSection;
