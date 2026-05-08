import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TShowcaseCard = {
  id?: string;
  image: string;
  badge?: string;

  title: string;
  description: string;

  price?: string;

  primaryButton?: {
    label: string;
    href?: string;
  };

  secondaryButton?: {
    label: string;
    href?: string;
  };
};

const ShowCaseCard = ({
  title,
  description,
  badge,
  price,
  image,
  primaryButton,
  secondaryButton,
}: TShowcaseCard) => {
  return (
    <div
      className={`group overflow-hidden bg-primary border border-secondary/30 transition-all duration-500 hover:-translate-y-2`}
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-4/2">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="space-y-6 p-6 md:p-8">
        {/* BADGE */}
        {badge && (
          <div>
            <span className="inline-flex bg-[#1B2B21] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[#C8A46B]">
              {badge}
            </span>
          </div>
        )}

        {/* TEXT */}
        <div className="space-y-4">
          <h3 className="font-primary text-3xl font-medium text-white">
            {title}
          </h3>

          <p className="leading-8 text-neutral-400">{description}</p>

          {price && (
            <p className="font-primary text-lg text-[#C8A46B]">{price}</p>
          )}
        </div>

        {/* BUTTONS */}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {primaryButton && (
              <Link
                href={primaryButton.href || "#"}
                className="border border-[#C8A46B] px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#C8A46B] transition-all duration-300 hover:bg-[#C8A46B] hover:text-black"
              >
                {primaryButton.label}
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.href || "#"}
                className="bg-[#C8A46B] px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#d8b47b]"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCaseCard;
