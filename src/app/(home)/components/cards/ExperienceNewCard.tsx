import { ExperienceProps } from "@/@types/@homeType";

const ExperienceNewCard: React.FC<ExperienceProps["items"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-full flex flex-col hover:translate-y-1 hover:shadow-md hover:border-secondary duration-200 ease-in-out items-center gap-4 bg-ternary/85 border-[0.5px] border-secondary/50 rounded-sm p-4">
      <span>{icon}</span>
      <div className="space-y-2 text-center">
        <p className="text-secondary font-primary text-3xl">{title}</p>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceNewCard;
