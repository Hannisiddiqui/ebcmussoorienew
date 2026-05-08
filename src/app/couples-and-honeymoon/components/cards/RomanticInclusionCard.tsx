import React from "react";

type RomanticInclusionCardProps = {
  icon: string;
  title: string;
};

export const RomanticInclusionCard = ({
  icon,
  title,
}: RomanticInclusionCardProps) => {
  return (
    <div className="group border border-secondary/30 p-8 transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-col items-center justify-center text-center">
        {/* ICON */}
        <div className="mb-5 text-2xl text-white transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>

        {/* TITLE */}
        <p className="max-w-[220px] leading-8 text-neutral-300">{title}</p>
      </div>
    </div>
  );
};
