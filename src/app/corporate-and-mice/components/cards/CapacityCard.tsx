import { FaCheck } from "react-icons/fa";
import { BusinessCaseSectionProps } from "../BusinessCaseSection";

export const CapacityCard = ({
  capacity,
}: {
  capacity: BusinessCaseSectionProps["capacity"];
}) => {
  return (
    <div className="bg-primary border border-secondary/30 rounded-sm p-12 space-y-6">
      <p className="text-secondary text-2xl font-primary">{capacity.title}</p>

      <ul className="space-y-4 divide-y divide-secondary/30">
        {capacity.highlights.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-neutral-300 pb-2"
          >
            <span className="mt-2 text-secondary">
              <FaCheck size={14} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
