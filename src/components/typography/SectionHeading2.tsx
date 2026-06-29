interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  description?: string;
  descriptionColor?: string;
  textCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  smTextCenter?: boolean;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
}

const isCustomColorValue = (value?: string) => Boolean(value && /^(#|rgb|hsl|var\()/i.test(value));

export const SectionHeading2: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  description,
  descriptionColor,
  textCenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  descriptionClassName = "",
}) => {
  const titleColorClass = titleColor && !isCustomColorValue(titleColor) ? `text-${titleColor}` : "";
  const subTitleColorClass = subTitleColor && !isCustomColorValue(subTitleColor) ? `text-${subTitleColor}` : "";
  const descriptionColorClass = descriptionColor && !isCustomColorValue(descriptionColor) ? `text-${descriptionColor}` : "";

  return (
    <div className={`flex flex-col w-full gap-4 heading2 ${wrapperClassName}`}>
      {title && (
        <h2
          className={`${titleClassName} ${textCenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${titleColorClass} md:text-5xl font-primary tracking-wider text-[2rem]`}
          style={isCustomColorValue(titleColor) ? { color: titleColor } : undefined}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subTitle && (
        <h3
          className={`${subTitleClassName} ${textCenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${subTitleColorClass} md:text-3xl text-[1.5rem]`}
          style={isCustomColorValue(subTitleColor) ? { color: subTitleColor } : undefined}
        >
          {subTitle}
        </h3>
      )}
      {description && (
        <p
          className={`${descriptionClassName} ${textCenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${descriptionColorClass}`}
          style={isCustomColorValue(descriptionColor) ? { color: descriptionColor } : undefined}
        >
          {description}
        </p>
      )}
    </div>
  );
};
