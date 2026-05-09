import React from "react";

export type TFeatureCard = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({ id, title, description, icon }: TFeatureCard) => {
  return (
    <div className="group flex flex-col items-center bg-[#1E2E21] rounded-sm relative overflow-hidden border border-secondary/30 p-12 transition-all duration-500 hover:-translate-y-2">
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* ICON */}
      <div className=" text-5xl mb-6 text-white">
        {icon}
      </div>

      {/* CONTENT */}
      <div className="relative space-y-4">
        <h3 className="font-primary text-secondary text-2xl font-semibold text-center">
          {title}
        </h3>

        <p className="text-neutral-400 text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
