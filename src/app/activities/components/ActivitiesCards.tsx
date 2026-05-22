interface ActivitiesCardsProps {
  icon: string;
  title: string;
  description: string;
  pointsTitle: string;
  points: string[];
  index: number;
}

const ActivitiesCards: React.FC<ActivitiesCardsProps> = ({
  icon,
  title,
  description,
  pointsTitle,
  points,
  index,
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 pb-16 items-center">
      <div
        className={` ${index % 2 !== 0 ? "md:order-2" : ""} flex flex-col gap-4`}
      >
        <span className="font-primary text-5xl text-white">{icon}</span>
        <h3 className="font-primary text-3xl text-white mt-4">{title}</h3>
        <p className="text-light md:text-lg mt-4">{description}</p>
      </div>
      <div className="p-6 flex flex-col gap-4 rounded-md  bg-primary border border-secondary/30">
        <p className="text-secondary font-primary text-2xl">{pointsTitle}</p>
        <ul className="flex flex-col gap-3 divide-y divide-white/30">
          {points.map((point, index) => (
            <li key={index} className="text-white pb-3">
              <span className="text-secondary mr-1">✓</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivitiesCards;
