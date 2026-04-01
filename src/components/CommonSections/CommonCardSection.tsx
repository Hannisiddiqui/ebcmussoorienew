import { CommonCardSectionProps } from "@/@types/@types";
import { Container, Section } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeading";
import ImageSlider from "../slider/ImageSlider";
import { CtaBtn } from "../buttons/CtaBtn";

const CommonCardSection: React.FC<CommonCardSectionProps> = ({
  title,
  subTitle,
  description,
  images,
  link,
  titleColor,
  subTitleColor,
  btnClassName,
  sectionColor = "bg-background-1",
  wrapperClassName,
}) => {
  return (
    <Section className={`md:space-y-12 space-y-8 ${sectionColor}`}>
      <Container>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          textCenter
          titleColor={titleColor}
          subTitleColor={subTitleColor}
          wrapperClassName={wrapperClassName}
        />
      </Container>
      <div className="max-md:px-4">
        <ImageSlider images={images} title={title} />
      </div>
      <Container>
        {description?.map((item, i) => (
          <p key={i} className="text-[1.375rem] text-center">
            {item}
          </p>
        ))}
        {link && (
          <CtaBtn
            label={link.label}
            href={link.href}
            type="link"
            className={`mx-auto w-fit mt-8 rounded-lg font-primary ${btnClassName}`}
          />
        )}
      </Container>
    </Section>
  );
};

export default CommonCardSection;
